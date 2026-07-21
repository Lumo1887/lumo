import Stars from "@/components/Stars";

export interface ReviewItem {
  id: string;
  displayName: string;
  rating: number;
  body: string;
  likesCount: number;
  likedByMe: boolean;
}

function LikeIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20.8 4.6c-1.9-1.6-4.7-1.4-6.4.4L12 7.4l-2.4-2.4c-1.7-1.8-4.5-2-6.4-.4-2.1 1.8-2.2 5-.3 7l9 9.4 9-9.4c1.9-2 1.8-5.2-.3-7z" />
    </svg>
  );
}

// Einzelne Bewertungskarte (Sterne, Text, Name, Like-Button) — wird sowohl
// in der Top-3-Ansicht auf der Startseite (components/Reviews.tsx) als auch
// auf der vollständigen Liste (app/bewertungen/page.tsx) verwendet.
export default function ReviewCard({
  review,
  loggedIn,
  liking,
  onLike,
}: {
  review: ReviewItem;
  loggedIn: boolean;
  liking: boolean;
  onLike: (id: string) => void;
}) {
  return (
    <div className="card p-5">
      <Stars value={review.rating} />
      <p className="mt-2 text-sm text-ink-700">{review.body}</p>
      <div className="mt-3 flex items-center justify-between">
        <p className="text-xs font-medium text-ink-500">{review.displayName}</p>
        <button
          onClick={() => onLike(review.id)}
          disabled={!loggedIn || liking}
          title={loggedIn ? "Gefällt mir" : "Melde dich an, um zu liken"}
          className={`flex items-center gap-1 text-xs font-medium transition ${
            review.likedByMe ? "text-brand-700" : "text-ink-500 hover:text-brand-600"
          } ${!loggedIn ? "cursor-not-allowed opacity-60" : ""}`}
        >
          <LikeIcon filled={review.likedByMe} />
          {review.likesCount}
        </button>
      </div>
    </div>
  );
}

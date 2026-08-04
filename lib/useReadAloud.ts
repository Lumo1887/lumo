"use client";

import { useCallback, useEffect, useState } from "react";

// Die Web Speech API kann global immer nur EINE Äußerung gleichzeitig
// abspielen — dieser modul-weite Zustand (statt pro Komponente) sorgt dafür,
// dass beim Starten eines neuen Abschnitts automatisch jeder andere gerade
// laufende ReadAloudButton stoppt, egal wo auf der Seite er sitzt.
type Listener = (playingId: string | null) => void;
let currentPlayingId: string | null = null;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l(currentPlayingId));
}

export function useReadAloud(id: string, text: string) {
  const [playingId, setPlayingId] = useState<string | null>(currentPlayingId);
  const [paused, setPaused] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(
      typeof window !== "undefined" && "speechSynthesis" in window
    );
    const listener: Listener = (pid) => {
      setPlayingId(pid);
      if (pid !== id) setPaused(false);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [id]);

  const isActive = playingId === id;

  const play = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 1;
    utterance.onend = () => {
      if (currentPlayingId === id) {
        currentPlayingId = null;
        notify();
      }
    };
    utterance.onerror = () => {
      if (currentPlayingId === id) {
        currentPlayingId = null;
        notify();
      }
    };
    currentPlayingId = id;
    setPaused(false);
    notify();
    window.speechSynthesis.speak(utterance);
  }, [id, text]);

  const pause = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.pause();
    setPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.resume();
    setPaused(false);
  }, []);

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    currentPlayingId = null;
    notify();
  }, []);

  return { isActive, paused, supported, play, pause, resume, stop };
}

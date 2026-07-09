"""
Prueft, ob die PDF-Schriftart (NotoSans-Regular.ttf, geladen in
lib/pdf/SkriptPdfDocument.tsx) fuer JEDES in einer Skript-Datei verwendete
Sonderzeichen ein echtes Glyph besitzt. Fehlende Glyphen wuerden im
exportierten PDF als leere/kaputte Kaestchen ("Tofu") erscheinen.

Verwendung (im Lumo-Repo-Root):
    pip install fonttools requests
    python check_font_glyphs.py lib/content/informatik-2.ts
    python check_font_glyphs.py lib/content/informatik-2.ts lib/questions-informatik-2.ts
"""

import sys
import re
import urllib.request
from io import BytesIO

FONT_URLS = [
    ("NotoSans-Regular", "https://raw.githubusercontent.com/openmaptiles/fonts/master/noto-sans/NotoSans-Regular.ttf"),
    ("NotoSans-Bold", "https://raw.githubusercontent.com/openmaptiles/fonts/master/noto-sans/NotoSans-Bold.ttf"),
]

STRING_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')


def extract_unique_chars(path: str) -> dict:
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    chars = {}
    for m in STRING_RE.finditer(text):
        s = m.group(1)
        for ch in s:
            if ord(ch) > 127:
                chars.setdefault(ch, 0)
                chars[ch] += 1
    return chars


def load_cmap(name: str, url: str):
    from fontTools.ttLib import TTFont

    print(f"Lade {name} von {url} ...")
    with urllib.request.urlopen(url, timeout=30) as resp:
        data = resp.read()
    font = TTFont(BytesIO(data))
    cmap = font.getBestCmap()
    print(f"  -> {len(cmap)} Codepoints im cmap gefunden.")
    return cmap


def main():
    files = sys.argv[1:] or ["lib/content/informatik-2.ts"]

    cmaps = {}
    for name, url in FONT_URLS:
        try:
            cmaps[name] = load_cmap(name, url)
        except Exception as e:
            print(f"FEHLER beim Laden von {name}: {e}")
            sys.exit(1)

    for path in files:
        print(f"\n=== {path} ===")
        try:
            chars = extract_unique_chars(path)
        except FileNotFoundError:
            print(f"  Datei nicht gefunden: {path}")
            continue

        print(f"  {len(chars)} eindeutige Nicht-ASCII-Zeichen gefunden.")
        missing = []
        for ch, count in sorted(chars.items(), key=lambda kv: ord(kv[0])):
            cp = ord(ch)
            supported_anywhere = any(cp in cmap for cmap in cmaps.values())
            if not supported_anywhere:
                missing.append((ch, cp, count))

        if not missing:
            print("  Ergebnis: 0 fehlende Zeichen — alle Glyphen sind in der Schriftart vorhanden.")
        else:
            print(f"  Ergebnis: {len(missing)} FEHLENDE Zeichen (wuerden im PDF kaputt/leer erscheinen):")
            print(f"  {'Zeichen':<8}{'Codepoint':<12}{'Vorkommen'}")
            for ch, cp, count in missing:
                print(f"  {ch:<8}U+{cp:04X}      {count}x")


if __name__ == "__main__":
    main()

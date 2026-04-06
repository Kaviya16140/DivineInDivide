#!/usr/bin/env python3
"""
Remove only black *edge* strokes (silhouette/outline): near-black pixels that touch
clearly non-black content become transparent. Interior blacks and image data are left alone.

PNG output stays lossless (Pillow default). Does not posterize or resample.
"""
from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install pillow", file=sys.stderr)
    sys.exit(1)

# Near-black = likely silhouette stroke (tune up only if outlines are dark gray)
BLACK_MAX = 16
# Neighbor is "content" if any channel exceeds this (not silhouette, not crushed shadow)
CONTENT_MIN = 42


def remove_silhouette_edges(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    w, h = im.size
    src = im.load()
    # Work on a copy of pixels we can read; write to new image
    out = Image.new("RGBA", (w, h))
    dst = out.load()

    def is_near_black(r: int, g: int, b: int) -> bool:
        return max(r, g, b) <= BLACK_MAX

    def is_content(r: int, g: int, b: int) -> bool:
        return max(r, g, b) >= CONTENT_MIN

    for y in range(h):
        for x in range(w):
            r, g, b, a = src[x, y]
            if a == 0:
                dst[x, y] = (0, 0, 0, 0)
                continue
            if not is_near_black(r, g, b):
                dst[x, y] = (r, g, b, a)
                continue
            # Near-black: remove only if it touches non-black content (outline / edge stroke)
            touches_content = False
            for dy in (-1, 0, 1):
                for dx in (-1, 0, 1):
                    if dx == 0 and dy == 0:
                        continue
                    nx, ny = x + dx, y + dy
                    if nx < 0 or nx >= w or ny < 0 or ny >= h:
                        continue
                    r2, g2, b2, a2 = src[nx, ny]
                    if a2 and is_content(r2, g2, b2):
                        touches_content = True
                        break
                if touches_content:
                    break
            if touches_content:
                dst[x, y] = (r, g, b, 0)
            else:
                dst[x, y] = (r, g, b, a)

    return out


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    char_dir = root / "assets" / "characters"
    if not char_dir.is_dir():
        print(f"Missing: {char_dir}", file=sys.stderr)
        sys.exit(1)
    pngs = sorted(char_dir.glob("*.png"))
    if not pngs:
        print("No PNG files found.", file=sys.stderr)
        sys.exit(1)
    for path in pngs:
        im = Image.open(path)
        new_im = remove_silhouette_edges(im)
        # Lossless PNG; compress_level=6 is default zlib, visually identical
        new_im.save(path, format="PNG", compress_level=6)
        print(path.name)
    print(f"Processed {len(pngs)} file(s) (silhouette edges only).")


if __name__ == "__main__":
    main()

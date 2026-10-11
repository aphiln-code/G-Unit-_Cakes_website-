from pathlib import Path
import base64
import io

from PIL import Image


SOURCE = Path(r"C:\Users\aphil\OneDrive\Pictures\Screenshots\Screenshot 2026-07-27 160822.png")
OUT_DIR = Path("brand-assets")
SVG_OUT = OUT_DIR / "g-unit-cakes-logo-from-screenshot.svg"
PNG_OUT = OUT_DIR / "g-unit-cakes-logo-from-screenshot.png"


def remove_white_background(image: Image.Image) -> Image.Image:
    image = image.convert("RGBA")
    pixels = []

    for red, green, blue, alpha in image.getdata():
        distance_from_white = ((255 - red) ** 2 + (255 - green) ** 2 + (255 - blue) ** 2) ** 0.5
        if red > 248 and green > 248 and blue > 248:
            new_alpha = 0
        elif distance_from_white < 38:
            new_alpha = int(max(0, min(255, (distance_from_white - 6) * 8)))
        else:
            new_alpha = alpha
        pixels.append((red, green, blue, new_alpha))

    image.putdata(pixels)
    return image


def main() -> None:
    OUT_DIR.mkdir(exist_ok=True)

    source = Image.open(SOURCE).convert("RGBA")
    # Crop away the unrelated partial brown arc at the top of the screenshot.
    logo = source.crop((22, 34, 364, 448))
    logo = remove_white_background(logo)

    bbox = logo.getbbox()
    if bbox:
        logo = logo.crop(bbox)

    padding = 32
    canvas = Image.new("RGBA", (logo.width + padding * 2, logo.height + padding * 2), (255, 255, 255, 0))
    canvas.alpha_composite(logo, (padding, padding))
    canvas.save(PNG_OUT)

    buffer = io.BytesIO()
    canvas.save(buffer, format="PNG")
    encoded = base64.b64encode(buffer.getvalue()).decode("ascii")

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{canvas.width}" height="{canvas.height}" viewBox="0 0 {canvas.width} {canvas.height}" role="img" aria-labelledby="title desc">
  <title id="title">G-Unit Cakes logo</title>
  <desc id="desc">Clean standalone SVG made from the provided G-Unit Cakes logo screenshot, with transparent background.</desc>
  <image href="data:image/png;base64,{encoded}" x="0" y="0" width="{canvas.width}" height="{canvas.height}"/>
</svg>
"""
    SVG_OUT.write_text(svg, encoding="utf-8")
    print(SVG_OUT.resolve())
    print(PNG_OUT.resolve())
    print(canvas.size)


if __name__ == "__main__":
    main()

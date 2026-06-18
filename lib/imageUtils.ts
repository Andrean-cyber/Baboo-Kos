export type ImageContext =
  | "thumbnail"
  | "card"
  | "gallery"
  | "hero"
  | "fullscreen"
  | "fallback";

const CONTEXT_TO_WIDTH = {
  thumbnail: 400,
  card: 600,
  gallery: 1200,
  hero: 1200,
  fullscreen: 1600,
  fallback: 1200,
};

const DEFAULT_WIDTHS = [400, 800, 1200];

function replaceExtension(
  src: string,
  replacement: string
) {
  return src.replace(
    /\.(webp|avif)$/i,
    replacement
  );
}

export function getOptimizedImage(
  originalSrc: string,
  context: ImageContext = "fallback"
): string {
  if (!/\.(webp|avif)$/i.test(originalSrc)) {
    return originalSrc;
  }

  const width = CONTEXT_TO_WIDTH[context];

  return replaceExtension(
    originalSrc,
    `-w${width}.webp`
  );
}

export function getOptimizedAvif(
  originalSrc: string,
  context: ImageContext = "fallback"
): string {
  if (!/\.(webp|avif)$/i.test(originalSrc)) {
    return originalSrc;
  }

  const width = CONTEXT_TO_WIDTH[context];

  return replaceExtension(
    originalSrc,
    `-w${width}.avif`
  );
}

export function getImageSrcSet(
  originalSrc: string,
  widths: number[] = DEFAULT_WIDTHS
): string {
  if (!/\.(webp|avif)$/i.test(originalSrc)) {
    return originalSrc;
  }

  return widths
    .map(
      (width) =>
        `${replaceExtension(
          originalSrc,
          `-w${width}.webp`
        )} ${width}w`
    )
    .join(", ");
}

export function getAvifSrcSet(
  originalSrc: string,
  widths: number[] = DEFAULT_WIDTHS
): string {
  if (!/\.(webp|avif)$/i.test(originalSrc)) {
    return originalSrc;
  }

  return widths
    .map(
      (width) =>
        `${replaceExtension(
          originalSrc,
          `-w${width}.avif`
        )} ${width}w`
    )
    .join(", ");
}

export function getImageSizes(
  context: ImageContext = "fallback"
): string {
const sizeMap: Record<ImageContext, string> = {
  thumbnail:
    "(max-width: 768px) 25vw, (max-width: 1024px) 20vw, 200px",

  gallery:
    "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px",

  card:
    "(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 340px",

  hero: "100vw",

  fullscreen: "100vw",

  fallback: "100vw",
};

  return sizeMap[context];
}
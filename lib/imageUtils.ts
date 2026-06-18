/**
 * Image utilities for optimized variant selection
 * Automatically selects appropriate image variants based on usage context
 */

export type ImageContext = "thumbnail" | "gallery" | "card" | "hero" | "fallback";

/**
 * Map contexts to optimal widths
 */
const CONTEXT_TO_WIDTH: Record<ImageContext, number> = {
  thumbnail: 400, // Small grid thumbnails
  gallery: 800, // Gallery main images, cards
  card: 800, // Team/product cards
  hero: 1200, // Full-width hero images
  fallback: 1200, // Fallback to largest variant
};

/**
 * Get optimized image source based on context.
 * Replaces .webp extension with -w{width}.webp variant.
 *
 * @example
 * getOptimizedImage("/team/yuca.webp", "card") → "/team/yuca-w800.webp"
 * getOptimizedImage("/outbond/Bali1.webp", "thumbnail") → "/outbond/Bali1-w400.webp"
 *
 * @param originalSrc - Original image path (e.g., "/team/yuca.webp")
 * @param context - Usage context determining optimal size
 * @returns Optimized image path, or original if not webp
 */
export function getOptimizedImage(originalSrc: string, context: ImageContext = "fallback"): string {
  // If not a webp, return as-is (e.g., SVG, PNG already optimized)
  if (!originalSrc.endsWith(".webp")) {
    return originalSrc;
  }

  const width = CONTEXT_TO_WIDTH[context];
  return originalSrc.replace(".webp", `-w${width}.webp`);
}

/**
 * Get image srcSet for responsive images using generated variants
 * Useful for `<img>` srcSet or advanced Image component usage
 *
 * @example
 * getImageSrcSet("/team/yuca.webp") → "/team/yuca-w400.webp 400w, /team/yuca-w800.webp 800w, /team/yuca-w1200.webp 1200w"
 *
 * @param originalSrc - Original image path
 * @param widths - Widths to generate (default: [400, 800, 1200])
 * @returns srcSet string
 */
export function getImageSrcSet(originalSrc: string, widths: number[] = [400, 800, 1200]): string {
  if (!originalSrc.endsWith(".webp")) {
    return originalSrc;
  }

  return widths.map((w) => `${originalSrc.replace(".webp", `-w${w}.webp`)} ${w}w`).join(", ");
}

/**
 * Helper to determine Next.js Image `sizes` prop based on container
 * Helps Next/Image select optimal variant at different breakpoints
 *
 * @example
 * // For a card that is 100% on mobile, 50% on desktop
 * getImageSizes("card") → "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 340px"
 *
 * @param context - Usage context
 * @returns Next/Image sizes prop value
 */
export function getImageSizes(context: ImageContext = "fallback"): string {
  const sizeMap: Record<ImageContext, string> = {
    thumbnail: "(max-width: 768px) 25vw, (max-width: 1024px) 20vw, 15vw",
    gallery: "(max-width: 768px) 100vw, 60vw",
    card: "(max-width: 768px) 90vw, 340px",
    hero: "100vw",
    fallback: "100vw",
  };

  return sizeMap[context] || sizeMap.fallback;
}

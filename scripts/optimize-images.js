const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

// Folders to process relative to project root
const TARGET_DIRS = ["public/team", "public/outbond", "public/sosmed"];

// Sizes to generate (width in px)
const SIZES = [400, 800, 1200];

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(res)));
    else files.push(res);
  }
  return files;
}

function isImage(file) {
  return /\.(jpe?g|png|webp|avif|gif)$/i.test(file);
}

async function processFile(file) {
  try {
    if (!isImage(file)) return;
    const parsed = path.parse(file);
    // Skip already-processed variants
    if (/-(w|w)\d+\.(jpe?g|png|webp|avif)$/i.test(parsed.base)) return;

    const pipeline = sharp(file).rotate();
    for (const w of SIZES) {
      const outName = path.join(parsed.dir, `${parsed.name}-w${w}.webp`);
      // If exists, skip
      try {
        await fs.access(outName);
        console.log("Skip (exists):", outName);
        continue;
      } catch (e) {
        // not exists, proceed
      }

      await pipeline.resize({ width: w }).toFormat("webp", { quality: 78 }).toFile(outName);
      console.log("Wrote:", outName);
    }
  } catch (err) {
    console.error("Error processing", file, err.message);
  }
}

async function main() {
  for (const dir of TARGET_DIRS) {
    const abs = path.resolve(dir);
    try {
      const stats = await fs.stat(abs);
      if (!stats.isDirectory()) continue;
    } catch (e) {
      console.warn("Skipping (not found):", dir);
      continue;
    }

    const files = await walk(abs);
    for (const f of files) {
      await processFile(f);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

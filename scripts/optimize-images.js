const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

// kompatibel semua versi p-limit
const pLimitModule = require("p-limit");
const pLimit =
  typeof pLimitModule === "function"
    ? pLimitModule
    : pLimitModule.default;

const TARGET_DIRS = [
  "public/team",
  "public/outbond",
  "public/sosmed",
  "public/testimoni",
  "public/villa",
];

const SIZES = [
  400,   // thumbnail
  600,   // card
  1200,  // gallery / hero
  1600,  // fullscreen
];

const WEBP_QUALITY = 80;

const CONCURRENCY = 4;

async function walk(dir) {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function isImage(file) {
  return /\.(jpg|jpeg|png|webp|avif)$/i.test(file);
}

function isGeneratedVariant(file) {
  return /-w\d+\.(webp|avif)$/i.test(
    path.basename(file)
  );
}

async function fileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function generateVariant(
  image,
  outputPath,
  width,
  format
) {
  const quality = WEBP_QUALITY;

  await image
    .clone()
    .resize({
      width,
      fit: "inside",
      // penting:
      // jangan pakai withoutEnlargement
      // agar file 1200 & 1600 tetap dibuat
    })
    .toFormat(format, { quality })
    .toFile(outputPath);

  console.log("✓", outputPath);
}

async function processFile(file) {
  try {
    if (!isImage(file)) return;

    if (isGeneratedVariant(file)) return;

    const parsed = path.parse(file);

    const image = sharp(file).rotate();

    const metadata = await image.metadata();

    if (!metadata.width) {
      console.warn(
        "Skip (cannot read width):",
        file
      );
      return;
    }

    for (const width of SIZES) {
      const webpOutput = path.join(
        parsed.dir,
        `${parsed.name}-w${width}.webp`
      );

      if (!(await fileExists(webpOutput))) {
        await generateVariant(
          image,
          webpOutput,
          width,
          "webp"
        );
      }
    }
  } catch (error) {
    console.error(
      `✗ Error processing ${file}`,
      error
    );
  }
}

async function main() {
  const limit = pLimit(CONCURRENCY);

  for (const dir of TARGET_DIRS) {
    const absPath = path.resolve(dir);

    try {
      const stat = await fs.stat(absPath);

      if (!stat.isDirectory()) {
        continue;
      }
    } catch {
      console.warn(
        `Skip (directory not found): ${dir}`
      );
      continue;
    }

    console.log(`\nProcessing: ${dir}`);

    const files = await walk(absPath);

    await Promise.all(
      files.map((file) =>
        limit(() => processFile(file))
      )
    );
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
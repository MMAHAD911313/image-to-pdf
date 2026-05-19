const fs = require("fs-extra");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

const IMAGES_FOLDER = path.join(__dirname, "images");
const OUTPUT_FOLDER = path.join(__dirname, "output");
const OUTPUT_FILE = path.join(OUTPUT_FOLDER, "pdf_name.pdf");

async function createPdfFromImages() {
  await fs.ensureDir(OUTPUT_FOLDER);

  const pdfDoc = await PDFDocument.create();

  const imageFiles = fs
    .readdirSync(IMAGES_FOLDER)
    .filter((file) =>
      [".png", ".jpg", ".jpeg"].includes(path.extname(file).toLowerCase())
    )
    .sort(); // keeps order (1,2,3...)

  for (const file of imageFiles) {
    const filePath = path.join(IMAGES_FOLDER, file);
    const imageBytes = fs.readFileSync(filePath);

    let image;
    if (file.endsWith(".png")) {
      image = await pdfDoc.embedPng(imageBytes);
    } else {
      image = await pdfDoc.embedJpg(imageBytes);
    }

    const page = pdfDoc.addPage([1080, 1080]); // LinkedIn square format

    const { width, height } = image.scaleToFit(1080, 1080);

    page.drawImage(image, {
      x: (1080 - width) / 2,
      y: (1080 - height) / 2,
      width,
      height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_FILE, pdfBytes);

  console.log("✅ PDF created at:", OUTPUT_FILE);
}

createPdfFromImages();
# Image to PDF

A simple Node.js script that converts all PNG/JPG/JPEG images in the `images/` folder into a single square PDF file at `output/pdf_name.pdf`.

## Features

- Reads images from `images/`
- Supports PNG, JPG, and JPEG files
- Converts images into a square 1080x1080 PDF page layout
- Outputs the final PDF into `output/`

## Prerequisites

- Node.js 18+ or compatible
- npm installed

## Install

1. Open a terminal in the repository root.
2. Install dependencies:

```bash
npm install
```

## Usage

1. Place your image files inside the `images/` folder.
2. Run the script:

```bash
node script.js
```

3. The generated PDF will be written to:

```bash
output/pdf_name.pdf
```

## Notes

- Image files are sorted alphabetically before being added to the PDF.
- The output PDF uses a square 1080x1080 page size to preserve social media-ready layout.

## Repository files

- `script.js` – main conversion script
- `package.json` – Node.js project dependencies and metadata
- `images/` – source image folder
- `output/` – generated PDF output folder

## License

This project is licensed under the MIT License.

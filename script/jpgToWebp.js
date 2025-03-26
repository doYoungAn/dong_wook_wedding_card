const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetFolder = path.join(__dirname, './images');
const fileNames = fs.readdirSync(targetFolder);

const targetDir = path.join(__dirname, './convert_images');

const files = fileNames.map((fileName) => {
  return {
    fileName,
    buffer: fs.readFileSync(`${targetFolder}/${fileName}`),
  };
});

files.forEach((file) => {
  sharp(file.buffer)
    .webp({ quality: 90 })
    .toFile(`${targetDir}/${file.fileName.split('.')[0]}.webp`);
});


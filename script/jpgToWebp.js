/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetNaUUsDir = path.join(
  __dirname,
  './convert_images'
);
const folderNaUUsPath = path.join(__dirname, './images');
// const naUUsfileNames = fs.readdirSync(folderNaUUsPath);

// const targetWsDir = path.join(__dirname, './../src/assets/optimization/ws');
// const folderWsPath = path.join(__dirname, './../src/assets/ws');
const fileNames = fs.readdirSync(folderNaUUsPath);

const naUUsfiles = fileNames.map((fileName) => {
  return {
    fileName,
    buffer: fs.readFileSync(`${folderNaUUsPath}/${fileName}`),
  };
});

naUUsfiles.forEach((file) => {
  sharp(file.buffer)
    .webp({ quality: 90 })
    .toFile(`${targetNaUUsDir}/${file.fileName.split('.')[0]}.webp`);
});

// const wSfiles = wSfileNames.map((fileName) => {
//   return {
//     fileName,
//     buffer: fs.readFileSync(`${folderWsPath}/${fileName}`),
//   };
// });

// wSfiles.forEach((file) => {
//   sharp(file.buffer)
//     .webp({ quality: 90 })
//     .toFile(`${targetWsDir}/${file.fileName.split('.')[0]}.webp`);
// });

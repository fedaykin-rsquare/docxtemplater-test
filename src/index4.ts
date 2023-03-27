import PizZip from 'pizzip';
import * as fs from 'fs';
import * as path from 'path';

// PPTX 파일 압축 해제하기
const pptxFilePath: string = path.resolve(process.env.PWD || '', 'test-sample-1.pptx');
const pptxData = fs.readFileSync(pptxFilePath);
const pptx = new PizZip(pptxData);
const pptxFiles = pptx.files;

// 새로운 슬라이드 콘텐츠 생성하기
const newSlideContent = pptx.file('ppt/slides/slide1.xml')?.asNodeBuffer();
// const newSlideContent = "<p>New slide content</p>";

// console.log('newSlideContent :', newSlideContent);

// 새로운 슬라이드 콘텐츠 추가하기
const slideCount = Object.keys(pptxFiles).filter((filename) => filename.match(/^ppt\/slides\/slide\d+\.xml$/)).length;
const newSlideFilename = `ppt/slides/slide${slideCount + 1}.xml`;
// console.log('newSlideFilename :', newSlideFilename);

//@ts-ignore
pptxFiles[newSlideFilename] = new PizZip().file(newSlideFilename, newSlideContent);
/* if (newSlideContent) {
  pptxFiles[newSlideFilename] = newSlideContent;
} */

// PPTX 파일 압축하기
const newPptxData = pptx.generate({ type: "nodebuffer", compression: 'DEFLATE' });
fs.writeFileSync("new_presentation.pptx", newPptxData);
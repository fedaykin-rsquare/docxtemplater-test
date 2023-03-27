import * as fs from 'fs';
import * as path from 'path';
import PptxGenJS from 'pptxgenjs';
import SlideModule from 'docxtemplater-slides-module';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

// common
const pixelToInch = (pixcel: number, dpi: number = 72): number => {
  return pixcel / dpi;
};
const Main_Color: string = 'CF5C5C';

const outputFilePath: string = path.resolve(process.env.PWD || '', 'test-output-file2.pptx');
const pptxgen: PptxGenJS = new PptxGenJS();

pptxgen.defineLayout({
  name: 'RSQUARE_LAYOUT',
  width: pixelToInch(780),
  height: pixelToInch(540),
});

const slide1: PptxGenJS.Slide = pptxgen.addSlide();

slide1.addText('{buildingName}', {
  x: pixelToInch(0),
  y: pixelToInch(0),
  w: pixelToInch(100),
  h: pixelToInch(50),
  fontSize: 12,
  isTextBox: true,
  align: 'center',
});

const slide2: PptxGenJS.Slide = pptxgen.addSlide();

slide2.addText('{buildingName}', {
  x: pixelToInch(0),
  y: pixelToInch(0),
  w: pixelToInch(100),
  h: pixelToInch(50),
  fontSize: 12,
  isTextBox: true,
  align: 'center',
});

const testData = {
  slides: [
    {
      $slide: 1,
      buildingName: 'test 빌딩1',
    },
    {
      $slide: 2,
      buildingName: 'test 빌딩2',
    }
  ]
};

(async () => {
  const buffer: Buffer = await pptxgen.write({ outputType: 'nodebuffer' }) as Buffer;

  fs.writeFileSync(outputFilePath, buffer);

  const pizZip: PizZip = new PizZip(buffer);
  const document: Docxtemplater = new Docxtemplater(pizZip, {
    modules: [new SlideModule()],
    paragraphLoop: true,
    linebreaks: true,
  });

  document.render(testData);

  const resultBuffer: Buffer = document.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  const bindingOutputFilePath: string = path.resolve(process.env.PWD || '', 'test-binded2.pptx');

  fs.writeFileSync(bindingOutputFilePath, resultBuffer);

  console.log('----- Data Binding is completed. -----');
})()


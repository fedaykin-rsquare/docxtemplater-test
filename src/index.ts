import Docxtemplater, { DXT } from 'docxtemplater';
import ImageModule, { docxtemplater_image_module_namespace } from 'docxtemplater-image-module';
import SlideModule from 'docxtemplater-slides-module';
import * as fs from 'fs';
import * as path from 'path';
import PizZip from 'pizzip';


const imageOptions: docxtemplater_image_module_namespace.ImageOptions = {
  getImage: function (data: any, tagValue: string): docxtemplater_image_module_namespace.ZipInput {
    // throw new Error('Function not implemented.');
    return '';
  },
  getSize: function (imgData: string | Buffer, data: any, tagValue: string, options: docxtemplater_image_module_namespace.SizeOptions): [number, number] | [string, string] | Promise<[number, number] | [string, string]> {
    // throw new Error('Function not implemented.');
    return [0, 0];
  }
} as docxtemplater_image_module_namespace.ImageOptions;
const getParser: (tag: string) => DXT.Parser = (tag: string): DXT.Parser => {

  return {
    get(scope: any, context: DXT.ParserContext) {
      // console.count();
      // console.log('tag :', tag);
      // console.log('scope :', scope);
      // console.log('context :', context);
      // console.log('----------------------------------');

      return scope[tag] || '-';
    },
  };
};

/* const merge = require("lodash/merge");
const expressionParser = require("docxtemplater/expressions.js");

expressionParser.filters.recur = function (input: any, ...items: any) {
  if (!input) {
    return input;
  }
  let newResult = [input];

  console.log('input :', input);
  console.log('items :', items);
  console.log('---------------------------');

  items.forEach(function (item: any) {
    const splitted = item.split("/");
    const loopOver = splitted[0];
    const name = splitted[1] || loopOver;
    const nR: any[] = [];

    console.log('splitted :', splitted);
    console.log('loopOver :', loopOver);
    console.log('name :', name);

    newResult.forEach(function (r) {
      r[loopOver].forEach(function (a: any) {
        const obj = {};

        // @ts-ignore
        obj[name] = a as string;
        nR.push(merge({}, r, obj, a));
      });
    });

    newResult = nR;
    console.log('---------------------------');
  });

  console.log('newResult :', newResult);
  return newResult;
}; */

const docxTemplaterOptions: DXT.ConstructorOptions = {
  modules: [new ImageModule(imageOptions), new SlideModule()],
  paragraphLoop: true,
  linebreaks: true,
  parser: getParser
};

const pptxFilePath: string = path.resolve(process.env.PWD || '', 'test-sample-1.pptx');
const fileContent: string = fs.readFileSync(pptxFilePath, 'binary');
const pizZip: PizZip = new PizZip(fileContent);
const document: Docxtemplater = new Docxtemplater(pizZip, docxTemplaterOptions);

// console.log(pizZip.files);
// console.log(pizZip.file('ppt/slides/slide1.xml'));
// console.log(pizZip.file('ppt/slides/slide2.xml'));
// console.log('------------------------------------------');

/* (async () => {
  await document.renderAsync({ buildingName: 'test 빌딩' });
})(); */
const testData1 = { buildingName: 'test 빌딩', address: '서울시 강남구 역삼동', roadNameAddress: '서울시 강남구 테헤란로 311' };
const testData2 = {
  slides: [
    {
      $slide: 1,
      buildingName: 'test 빌딩',
      address: '서울시 강남구 역삼동',
      roadNameAddress: '서울시 강남구 테헤란로 311'
    },
    {
      $slide: 2,
      buildingName: 'test 빌딩 - 2',
      address: '서울시 강남구 역삼동 - 2',
      roadNameAddress: '서울시 강남구 테헤란로 311 - 2'
    }
  ]
};
const testData3 = {
  buildingName: 'test 빌딩',
  address: '서울시 강남구 역삼동',
  roadNameAddress: '서울시 강남구 테헤란로 311',
  companies: [
    {
      name: "Ecorp",
      user: [
        { name: "John", salary: 20000 },
        { name: "Mary", salary: 25000 },
        { name: "Steve", salary: 30000 },
      ],
    },
    {
      name: "Fcorp",
      user: [
        { name: "Paul", salary: 45000 },
        { name: "Dominique", salary: 40000 },
      ],
    },
  ],
};


document.render(testData2);

const buffer: Buffer = document.getZip().generate({
  type: 'nodebuffer',
  compression: 'DEFLATE'
});

fs.writeFileSync(path.resolve(process.env.PWD || '', 'test-binded.pptx'), buffer);

console.log('----- Data Binding is completed. -----');

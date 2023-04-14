import * as fs from 'fs';
import * as path from 'path';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import PptxGenJS from 'pptxgenjs';
import { buildingInfoList } from './contants';

// common
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

const MAIN_COLOR: string = 'CF5C5C';
const slide1LeftColumnOptions: PptxGenJS.TableCellProps = {
  color: 'FFFFFF',
  fontFace: 'Noto Sans CJK KR Bold (제목)',
  bold: true,
  margin: 0,
  fill: {
    color: '808080',
  },
  border: [
    { type: 'none' },
    { type: 'none' },
    { type: 'solid', color: 'FFFFFF', pt: 0.75 },
    { type: 'none' }
  ],
};
const cmToInch = (cm: number) => {
  return Number((cm / 2.54).toFixed(4));
};

const buildingInfo = {
  ...buildingInfoList[0],

};

const pptxgen: PptxGenJS = new PptxGenJS();

pptxgen.defineLayout({
  name: 'RSQUARE_LAYOUT',
  width: cmToInch(27.52),
  height: cmToInch(19.05),
});
pptxgen.layout = 'RSQUARE_LAYOUT';

const slide1: PptxGenJS.Slide = pptxgen.addSlide();

slide1.addShape(pptxgen.ShapeType.rect, {
  h: cmToInch(0.4),
  w: cmToInch(27.52),
  x: 0,
  y: 0,
  fill: {
    color: MAIN_COLOR
  },
});

slide1.addShape(pptxgen.ShapeType.rtTriangle, {
  h: cmToInch(1.43),
  w: cmToInch(2),
  x: cmToInch(21.18),
  y: cmToInch(0.29),
  fill: {
    color: MAIN_COLOR
  },
  rotate: 180,
});

slide1.addShape(pptxgen.ShapeType.rect, {
  h: cmToInch(1.72),
  w: cmToInch(4.35),
  x: cmToInch(23.17),
  y: 0,
  fill: {
    color: MAIN_COLOR
  }
});

slide1.addImage({
  path: path.resolve(process.env.PWD || '', 'rsquare-logo.png'),
  h: cmToInch(1.5),
  w: cmToInch(2.5),
  x: cmToInch(0.5),
  y: cmToInch(0.5),
});

slide1.addText([
  { text: `${buildingInfo.buildingName} `, options: { fontSize: 20, color: '595959', bold: true } },
  { text: '개요', options: { fontSize: 14, color: 'C00000', bold: true } }
]);

slide1.addImage({
  path: buildingInfo.buildingImage,
  h: cmToInch(10),
  w: cmToInch(6.66),
  x: cmToInch(0.76),
  y: cmToInch(2.13),
});

slide1.addText('건물 개요', {
  h: cmToInch(0.5),
  w: cmToInch(8.4),
  x: cmToInch(7.95),
  y: cmToInch(2.16),
  color: 'FFFFFF',
  align: 'center',
  fontSize: 9,
  fill: {
    color: MAIN_COLOR,
  },
});

slide1.addTable([
  [
    { text: '위치', options: slide1LeftColumnOptions },
    {
      text: [
        { text: `${buildingInfo.address}\n` },
        { text: `(${buildingInfo.roadNameAddress})` },
      ]
    }
  ],
  [
    { text: '교통', options: slide1LeftColumnOptions },
    { text: buildingInfo.subwayStationInformation },
  ],
  [
    { text: '연면적', options: slide1LeftColumnOptions },
    { text: `${buildingInfo.totalAreaM2}㎡ (${buildingInfo.totalArea}평)` },
  ],
  [
    { text: '빌딩규모', options: slide1LeftColumnOptions },
    { text: `지상 $(buildingInfo.floorCount)층 / 지하 ${buildingInfo.basementCount}층` },
  ],
  [
    { text: '건축물 용도', options: slide1LeftColumnOptions },
    { text: buildingInfo.mainPurpose },
  ],
  [
    { text: '주 출입구 방향', options: slide1LeftColumnOptions },
    { text: buildingInfo.buildingDirection },
  ],
  [
    { text: '사용승인일자', options: slide1LeftColumnOptions },
    { text: `${dayjs(buildingInfo.rawCompletedConstructDate).format('YYYY-MM-DD')} ${Number(buildingInfo.remodelingYear) > 0 ? ' / ' + buildingInfo.remodelingYear + '년 리모델링' : ''}`.trim() }
  ]
]);
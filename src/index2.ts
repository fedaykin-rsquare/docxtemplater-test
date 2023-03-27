import * as fs from 'fs';
import * as path from 'path';
import PptxGenJS from 'pptxgenjs';

// common
const pixelToInch = (pixcel: number, dpi: number = 72): number => {
  return pixcel / dpi;
};
const cmToInch = (cm: number) => {
  return Number((cm / 2.54).toFixed(4));
};
const Main_Color: string = 'CF5C5C';

const outputFilePath: string = path.resolve(process.env.PWD || '', 'test-output-file.pptx');
const pptxgen: PptxGenJS = new PptxGenJS();

pptxgen.defineLayout({
  name: 'RSQUARE_LAYOUT',
  width: pixelToInch(780),
  height: pixelToInch(540),
});
pptxgen.layout = 'RSQUARE_LAYOUT';

const slide1: PptxGenJS.Slide = pptxgen.addSlide();

slide1.addShape(pptxgen.ShapeType.rect, {
  x: 0,
  y: 0,
  w: pixelToInch(780),
  h: pixelToInch(11),
  fill: {
    color: Main_Color
  },
});
slide1.addShape(pptxgen.ShapeType.rtTriangle, {
  x: pixelToInch(600),
  y: pixelToInch(8),
  w: pixelToInch(57),
  h: pixelToInch(41),
  fill: {
    color: Main_Color
  },
  rotate: 180,
});
slide1.addShape(pptxgen.ShapeType.rect, {
  x: pixelToInch(657),
  y: 0,
  w: pixelToInch(123),
  h: pixelToInch(49),
  fill: {
    color: Main_Color
  }
});
slide1.addImage({
  path: path.resolve(process.env.PWD || '', 'rsquare-logo.png'),
  sizing: {
    type: 'contain',
    w: pixelToInch(135),
    h: pixelToInch(28),
  },
  x: pixelToInch(644),
  y: pixelToInch(10),
  w: pixelToInch(135),
  h: pixelToInch(28),
});
slide1.addText([
  {
    text: '{buildingName}',
    options: {
      fontSize: 20,
      color: '595959',
      bold: true
    }
  },
  {
    text: ' ',
    options: {
      fontSize: 20,
      bold: true
    }
  },
  {
    text: '개요',
    options: {
      fontSize: 14,
      color: 'C00000',
      bold: true
    },
  }
], {
  x: pixelToInch(21.739055118110237),
  y: pixelToInch(23.77716535433071),
  w: pixelToInch(623.9974803149606),
  h: pixelToInch(25.097874015748033)
});
slide1.addText('{%buildingImage}', {
  x: pixelToInch(21.5),
  y: pixelToInch(60.34),
  w: pixelToInch(182),
  h: pixelToInch(29),
  fontSize: 18
});
slide1.addText('건물 개요', {
  x: pixelToInch(225),
  y: pixelToInch(60),
  w: pixelToInch(238),
  h: pixelToInch(14),
  color: 'FFFFFF',
  align: 'center',
  fontSize: 9,
  fill: {
    color: Main_Color
  }
});

const leftTableHeadColumnOptions: PptxGenJS.TableCellProps = {
  color: 'FFFFFF',
  fontSize: 9,
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

slide1.addTable([
  [
    {
      text: '위치',
      options: leftTableHeadColumnOptions
    },
    {
      text: [
        { text: '{address}\n' },
        { text: '({roadNameAddress})' }
      ]
    }
  ],
  [
    {
      text: '교통',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{subwayStationInformation}',
    }
  ],
  [
    {
      text: '연면적',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{totalAreaM2}㎡ ({totalArea}평)'
    }
  ],
  [
    {
      text: '빌딩 규모',
      options: leftTableHeadColumnOptions
    },
    {
      text: '지상 {floorCount}층 / 지하 {basementCount}층'
    }
  ],
  [
    {
      text: '건축물 용도',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{mainPurpose}'
    }
  ],
  [
    {
      text: '주 출입구 방향',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{buildingDirection}'
    }
  ],
  [
    {
      text: '사용승인일자',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{completedConstructDate}{#remodelingYear > 0} / {remodelingYear} 리모델링'
    }
  ],
  [
    {
      text: '전용률',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{exclusiveRate}%'
    }
  ],
  [
    {
      text: '기준층 임대 면적',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{standardLeasableAreaM2}㎡ ({standardLeasableArea}평)'
    }
  ],
  [
    {
      text: '기준층 전용 면적',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{standardNetLeasableAreaM2}㎡ ({standardNetLeasableArea}평)'
    }
  ],
  [
    {
      text: '엘리베이터',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{elevatorTotalCount}대 (일반 {public}대, 화물 {freight}대)'
    }
  ],
  [
    {
      text: '층당 화장실 개수',
      options: leftTableHeadColumnOptions
    },
    {
      text: ''
    }
  ],
  [
    {
      text: '총 주차 대수',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{totalParkingCount}대'
    }
  ],
  [
    {
      text: '무료 / 유료 주차',
      options: leftTableHeadColumnOptions
    },
    {
      text: '{freeParkingDetail} / {paidParkingDetail}'
    }
  ]
], {
  x: pixelToInch(225),
  y: pixelToInch(78),
  colW: [pixelToInch(64), pixelToInch(174)],
  rowH: [pixelToInch(21)],
  align: 'center',
  valign: 'middle',
  border: [{ type: 'none' }, { type: 'none' }, { type: 'dash', color: '808080', pt: 0.75 }, { type: 'none' }],
  fontSize: 8,
});

slide1.addText([
  {
    text: '공실 현황',
    options: {

    }
  },
  {
    text: ''
  }
]);
slide1.addText('공실 현황', {
  x: pixelToInch(225),
  y: pixelToInch(60),
  w: pixelToInch(238),
  h: pixelToInch(14),
  color: 'FFFFFF',
  align: 'center',
  fontSize: 9,
  fill: {
    color: Main_Color
  }
});

pptxgen.writeFile({
  fileName: outputFilePath,
  compression: true
});

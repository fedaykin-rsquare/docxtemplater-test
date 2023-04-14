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
  width: cmToInch(27.52),
  height: cmToInch(19.05),
});
pptxgen.layout = 'RSQUARE_LAYOUT';

const slide1: PptxGenJS.Slide = pptxgen.addSlide();

slide1.addShape(pptxgen.ShapeType.rect, {
  x: 0,
  y: 0,
  w: cmToInch(27.52),
  h: cmToInch(0.4),
  fill: {
    color: Main_Color
  },
});

slide1.addShape(pptxgen.ShapeType.rtTriangle, {
  x: cmToInch(21.18),
  y: cmToInch(0.29),
  w: cmToInch(2),
  h: cmToInch(1.43),
  fill: {
    color: Main_Color
  },
  rotate: 180,
});

slide1.addShape(pptxgen.ShapeType.rect, {
  x: cmToInch(23.17),
  y: 0,
  w: cmToInch(4.35),
  h: cmToInch(1.72),
  fill: {
    color: Main_Color
  }
});

slide1.addImage({
  path: path.resolve(process.env.PWD || '', 'rsquare-logo.png'),
  /* sizing: {
    type: 'contain',
    w: cmToInch(4.77),
    h: cmToInch(1),
  }, */
  x: cmToInch(22.72),
  y: cmToInch(0.36),
  w: cmToInch(4.77),
  h: cmToInch(1),
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
  x: cmToInch(0.77),
  y: cmToInch(0.84),
  w: cmToInch(22.01),
  h: cmToInch(0.89)
});

slide1.addText('{%buildingImage}', {
  x: cmToInch(0.76),
  y: cmToInch(2.13),
  w: cmToInch(6.66),
  h: cmToInch(10),
  fontSize: 18
});

slide1.addText('건물 개요', {
  x: cmToInch(7.95),
  y: cmToInch(2.16),
  w: cmToInch(8.4),
  h: cmToInch(0.5),
  color: 'FFFFFF',
  align: 'center',
  fontSize: 9,
  fill: {
    color: Main_Color
  }
});

const leftTableHeadColumnOptions: PptxGenJS.TableCellProps = {
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
      text: '{completedConstructDate}{#remodelingYear > 0} / {remodelingYear} 리모델링{/}'
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
  x: cmToInch(7.94),
  y: cmToInch(2.73),
  colW: [cmToInch(2.25), cmToInch(6.15)],
  rowH: [cmToInch(0.66)],
  align: 'center',
  valign: 'middle',
  border: [{ type: 'none' }, { type: 'none' }, { type: 'solid', color: '808080', pt: 0.75 }, { type: 'none' }],
  fontSize: 8,
});

slide1.addText('공실 현황', {
  x: cmToInch(16.86),
  y: cmToInch(2.13),
  w: cmToInch(9.9),
  h: cmToInch(0.5),
  color: 'FFFFFF',
  align: 'center',
  fontSize: 9,
  fill: {
    color: Main_Color
  }
});

slide1.addText('(단위: 원/3.3m², VAT별도)', {
  h: cmToInch(0.46),
  w: cmToInch(4.53),
  x: cmToInch(22.23),
  y: cmToInch(2.15),
  color: 'FFFFFF',
  align: 'right',
  fontSize: 6,
});

pptxgen.writeFile({
  fileName: outputFilePath,
  compression: true
});

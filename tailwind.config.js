/** @type {import('tailwindcss').Config} */
const length = {
  0.25: '0.0625rem', //1px
  0.5: '0.125rem', //2px
  0.75: '0.1875rem', //3px
  1.5: '0.375rem', //6px
  1.75: '0.4375rem', //7px
  3.75: '0.9375rem', //15px
  4.5: '1.125rem', //18px
  5.5: '1.375rem', //22px
  6: '1.5rem', //24px
  7.5: '1.875rem', //30px
  8.5: '2.125rem', //34px
  9.5: '2.375rem', //38px
  10.5: '2.625rem', //42px
  11.5: '2.875rem', // 46px
  12.5: '3.125rem', // 50px
  13: '3.25rem', //52px
  13.5: '3.375rem', //54px
  14.5: '3.625rem', //58px
  15: '3.75rem', //60px
  15.5: '3.875rem', //62px
  16: '4rem', //64px
  17: '4.25rem', //68px
  17.5: '4.375rem', //70px
  18: '4.5rem', //72px
  18.5: '4.625', //74px
  19: '4.75rem', //76px
  19.5: '4.875rem', // 78px
  21: '5.25rem', //84px
  22: '5.5rem', //88px
  23: '5.75rem', //92px
  25: '6.25rem', //100px
  30: '7.5rem', //120px
  31: '7.75rem', //124px
  31.5: '7.875rem', //126px
  32.5: '8.125rem', //130px
  33: '8.25rem', //132px
  34: '8.5rem', // 136px
  34.5: '8.625rem', //138px
  35: '8.75rem', //140px
  35.25: '8.8125rem', //141px
  36.5: '8.75rem', //146px
  37.5: '9.375rem', //150px
  38: '9.5rem', //152px
  40: '10rem', //160px
  41: '10.25rem', //164px
  42.25: '10.5625rem', // 169px
  45.5: '11.375rem', //182px
  46: '11.5rem', //184px
  47: '11.75rem', //188px
  47.75: '11.9375rem', //191px
  49: '12.25rem', //196px
  50: '12.5rem', //200px
  52: '13rem', //208px
  53: '13.25rem', //212px
  54: '13.5rem', //216px
  54.5: '13.625rem', //218px
  57: '14.25rem', //228px
  57.5: '14.375rem', //230px
  64: '16rem', // 256px
  65.5: '16.375rem', //262px
  71: '17.75rem', //284px
  72: '18rem', //288px
  84: '21rem', //336px
  85: '21.25rem', //340px
  88: '22rem', //352px
  90: '22.5rem', //360px
  92: '23rem', //368px
  100: '25rem', //400px
  101: '25.25rem', //404px
  160: '40rem', //640px
  240: '60rem', //960px
  //Screen Size
  outerframe: '1280px',
  innerframe: '1024px',
  laptop: '1024px',
  pc: '1154px',
};
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        8: ['0.5rem', '0.625rem'],
        9: ['0.5625rem', '0.75rem'],
        10: ['0.625rem', '0.875rem'],
        11: ['0.6875rem', '1rem'],
        12: ['0.75rem', '1.125rem'],
        13: ['0.8125rem', '1.125rem'],
        14: ['0.875rem', '1.25rem'],
        15: ['15px', '22px'],
        16: ['1rem', '1.5rem'],
        18: ['1.125rem', '1.75rem'],
        20: ['1.25rem', '1.875rem'],
        24: ['1.5rem', '2rem'],
        28: ['1.75rem', '2rem'],
        30: ['1.75rem', '2.625rem'],
        32: ['2rem', '3rem'],
        36: ['36px', '43.21px'],
      },
      colors: {
        'grey-0': '#FFFFFF' /*Renewal GRAYSCALE 0*/,
        'grey-10': '#F8F8F8' /*Renewal GRAYSCALE 10*/,
        'grey-20': '#F0F0F0' /*Renewal GRAYSCALE 20*/,
        'grey-30': '#E0E0E0' /*Renewal GRAYSCALE 30*/,
        'grey-40': '#C9C9C9' /*Renewal GRAYSCALE 40*/,
        'grey-50': '#AAAAAA' /*Renewal GRAYSCALE 50*/,
        'grey-60': '#808080' /*Renewal GRAYSCALE 60*/,
        'grey-70': '#5D5D5D' /*Renewal GRAYSCALE 70*/,
        'grey-80': '#444444' /*Renewal GRAYSCALE 80*/,
        'grey-90': '#242424' /*Renewal GRAYSCALE 90*/,
        'error-70': '#8e1200' /* Renewal Error 30 */,
        'error-60': '#B71700' /* Renewal Error 20*/,
        'error-50': '#E01C00' /* Renewal Error 10*/,
        'error-40': '#FF3A1E' /* Renewal Error */,
        'error-30': '#ff9384' /* Renewal Error -10*/,
        'error-20': '#FFB7AD' /* Renewal Error -20*/,
        'error-10': '#FFE8E5' /* Renewal Error -30*/,
        'success-70': '#005999' /* Renewal Success 30 */,
        'success-60': '#124dbft' /* Renewal Success 20*/,
        //'success-50': '#E01C00', /* Renewal Success 10*/
        'success-40': '#0094FF' /* Renewal Success */,
        //'success-30': '#ff9384', /* Renewal Success -10*/
        'success-20': '#bdd2f9' /* Renewal Success -20*/,
        'success-10': '#E5F4FF' /* Renewal Success -30*/,
        bronze: '#CF9B6A',
        silver: '#B2C4D1',
        gold: '#FDCB4B',
        platinum: '#68E5CF',
        dia: '#69DAE1',
        master: '#FF7E62',
        challenger: '#628EFF',
      },
      width: length,
      height: length,
      spacing: length,
      padding: length,
      margin: length,
    },
    borderRadius: {
      0: '0px',
      4: '4px',
      DEFAULT: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      15: '15px',
      16: '16px',
      full: '100%',
    },
    fontWeight: {
      'weight-100': 100,
      'weight-200': 200,
      'weight-300': 300,
      'weight-400': 400,
      'weight-500': 500,
      'weight-600': 600,
      'weight-700': 700,
      'weight-800': 800,
      'weight-900': 900,
    },
    screens: {
      sm: { max: '1023px' },
      lg: { max: '1279px' },
      laptop: { min: '1024px' }, //tablet
      pc: { min: '1280px' }, //laptop
    },
    variants: {
      lineClamp: ['responsive', 'hover'],
    },
  },
  plugins: [],
};

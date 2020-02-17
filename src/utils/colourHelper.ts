import * as chroma from 'chroma-js';

const GetMonochromaticPalette = (base: string) => {
    const _900 = chroma(base).darken(3).hex();
    const _800 = chroma(base).darken(2).hex();
    const _700 = chroma(base).darken(1.5).hex();
    const _600 = chroma(base).darken(1).hex();
    const _500 = base;
    const _400 = chroma(base).brighten(1).hex();
    const _300 = chroma(base).brighten(1.5).hex();
    const _200 = chroma(base).brighten(2).hex();
    const _100 = chroma(base).brighten(3).hex();

    return {
        '100': _100,
        '200': _200,
        '300': _300,
        '400': _400,
        '500': _500,
        '600': _600,
        '700': _700,
        '800': _800,
        '900': _900,
    };
};

export default GetMonochromaticPalette;

import * as React from 'react';

type Context = {
    base: string,
    palette: {
        '900': string,
        '800': string,
        '700': string,
        '600': string,
        '500': string,
        '400': string,
        '300': string,
        '200': string,
        '100': string
    },
    updateBase: (base: string) => void
}

export const AppContext = React.createContext<Context | undefined>(undefined);

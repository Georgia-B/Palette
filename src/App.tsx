import * as React from 'react';
import { AppContext } from './utils/contextHelper';
import GetMonochromaticPalette from './utils/colourHelper';
import Header from './components/Header/Header';
import Panel from './components/Panel/Panel';

class App extends React.Component<null, { base: string, palette: {} }> {
    state = {
        base: '#00FFFE',
        palette: {
            '900': '#006A6C',
            '800': '#00999A',
            '700': '#00B2B2',
            '600': '#00CBCB',
            '500': '#00FFFE',
            '400': '#72FFFF',
            '300': '#93FFFF',
            '200': '#B1FFFF',
            '100': '#EDFFFF',
        },
    };

    updateBase = (base: string) => {
        const palette = GetMonochromaticPalette(base);
        this.setState({
            base,
            palette
        });
    };

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                updateBase: this.updateBase
            }}>
                <Header />
                <Panel />
            </ AppContext.Provider>
        );
    }
}

export default App;
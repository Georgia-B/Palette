import * as React from 'react';
import { AppContext } from './utils/contextHelper';
import Header from './components/Header/Header';

class App extends React.Component {
    constructor(props: null) {
        super(props);
    }

    render() {
        return (
            <AppContext.Provider value={{
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
                }
            }}>
                <Header />
            </ AppContext.Provider>
        );
    }
}

export default App;
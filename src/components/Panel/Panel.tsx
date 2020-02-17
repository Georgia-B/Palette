import * as React from 'react';
import { AppContext } from '../../utils/contextHelper';
import { ColourPicker } from '../ColourPicker/ColourPicker';
import ColourSquare from '../ColourSquare/ColourSquare';
import './Panel.css';

class Panel extends React.Component {
    handleChange = (colour: any) => {
        this.context.updateBase(colour.hex);
    };

    render() {
        const { base, palette } = this.context;

        return (
            <div className="panel">
                <div className="content">
                    <h3 className="label-text" style={{ color: palette['900'] }}>
                        Select a base colour
                    </h3>
                    <ColourPicker
                        width="100%"
                        height="20px"
                        color={base}
                        pointer={CustomPointer}
                        onChangeComplete={this.handleChange}
                        onChange={this.handleChange}
                        className="hue-picker"
                    />
                    <div className="palette-container">
                        {
                            Object.keys(palette).map((key) => (
                                <ColourSquare colour={palette[key]} key={key} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const CustomPointer = () => {
    return (
        <div className="pointer"></div>
    );
};

Panel.contextType = AppContext;

export default Panel;

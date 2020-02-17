import * as React from 'react';
import './ColourSquare.css';

interface ColourSquareProps {
    colour: string
}

const ColourSquare = (props: ColourSquareProps) => {
    const { colour } = props;
    return (
        <div className="square-container">
            <div className="square" style={{ backgroundColor: colour }}>
            </div>
            <div className="square-label">{colour ? colour.toUpperCase() : colour}</div>
        </div>
    );
};

export default ColourSquare;

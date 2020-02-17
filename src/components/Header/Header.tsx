import * as React from 'react';
import { AppContext } from '../../utils/contextHelper';
import './Header.css';

const Header = () => {
    return (
        <AppContext.Consumer>
            {
                ({ palette, base }) => (
                    <div className="header" style={{ backgroundColor: base }}>
                        <h1 className="title" style={{ color: palette['900'] }}>
                            Palette
                        </h1>
                    </div>
                )
            }
        </AppContext.Consumer>

    );
};

export default Header;

import * as React from "react";
import './Main.css';

export interface MainProps { name: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return <h1 className="main">Hello from {this.props.name}!</h1>;
    }
}
import * as React from 'react';
import { HuePicker, HuePickerProps } from 'react-color';

export interface ColourPickerProps extends HuePickerProps {
    color?: string;
    pointer?: () => JSX.Element;
    onChange?: (color: any) => void,
    onChangeComplete?: (color: any) => void,
    className?: string
}

export class ColourPicker extends React.Component<ColourPickerProps> {
    render() {
        return <HuePicker {...this.props} />
    }
}
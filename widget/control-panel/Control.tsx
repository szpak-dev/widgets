import React from "react";
import Input from "./controls/Input";
import Select from "./controls/Select";
import Button from "./controls/Button";

export interface ControlProps {
    type: 'input' | 'select' | 'button';
    name: string;
    label: string;
    options: [string, string][];
}

export interface ControlInteractionProps extends ControlProps {
    onControlValueChange: (name: string, value: string) => void;
}

const Control: React.FC<ControlInteractionProps> = (props) => {
    const {type, onControlValueChange} = props;
    const onControlInteraction = ((name: string, value: string) => onControlValueChange(name, value));

    switch (type) {
        case 'input': return <Input {...props} onChange={onControlInteraction}/>;
        case 'select': return <Select {...props} onChange={onControlInteraction}/>;
        case 'button': return <Button {...props} onChange={onControlInteraction}/>;
    }

    throw new Error(`Unsupported type of Control: ${type}`);
}

export default Control;
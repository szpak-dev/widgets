import React from 'react';

export interface ButtonProps {
    name: string;
    label: string;
    onChange(name: string, value: string): void;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <label className={'button'}>
            <button name={props.name} onClick={() => props.onChange(props.name, props.label)}>
                {props.label}
            </button>
        </label>
    );
}

export default Button;

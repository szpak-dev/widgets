import React, {useState} from 'react';
import './Input.css';
import {Icon} from "../../../ui/ornaments";

export interface InputProps {
    name: string;
    label: string;
    onChange(name: string, value: string): void;
}

const Input: React.FC<InputProps> = (props) => {
    const initValue = '';
    const [value, setValue] = useState(initValue);
    const {name, label, onChange} = props;

    return (
        <label className={'input'}>
            <input
                name={name}
                type="text"
                placeholder={label}
                value={value}
                onChange={e => {
                    const val = e.target.value;
                    setValue(val);
                    onChange(name, val);
                }}
            />
            <Icon clicked={() => {
                setValue(initValue);
                onChange(name, initValue);
            }}/>
        </label>
    );
}

export default Input;

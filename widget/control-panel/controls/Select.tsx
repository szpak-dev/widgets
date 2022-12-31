import React from 'react';

export interface SelectProps {
    name: string;
    label: string;
    options: [string, string][];
    onChange(name: string, value: string): void;
}

const Select: React.FC<SelectProps> = (props) => {
    if (props.options.length === 0) {
        throw new Error(`Select Control must contain at least one option`);
    }

    const {name, label, options, onChange} = props;
    const opts = options.map((opt, i) => <option key={i} value={opt[0]}>{opt[1]}</option>);

    return (
        <label className={'select'}>
            {label}
            <select name={name} className={'select'} onChange={(e) => onChange(name, e.target.value)}>
                {opts}
            </select>
        </label>
    );
}

export default Select;

import React from "react";
import './ornaments.css';

interface IconProps {
    i?: number;
    clicked: () => void;
}

const Icon: React.FC<IconProps> = ({i = 0, clicked}) => {
    return (
        <i className={'i'} onClick={() => clicked()}/>
    );
}

export {
    Icon,
};
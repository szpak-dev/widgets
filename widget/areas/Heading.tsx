import React from 'react';

interface HeadingProps {
    value: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
    return (
        <header>
            <i className="ion ion-md-analytics"/>
            <h1>{props.value}</h1>
        </header>
    );
}

export default Heading;

import React from 'react';

interface ErrorListProps {
    messages: string[];
}

const ErrorList: React.FC<ErrorListProps> = (props) => {
    if (!props.messages.length) {
        return null;
    }

    return (
        <aside className={'errors'}>
            <ul>
                {props.messages && props.messages.map((message, idx) =>
                    <li key={idx}>{message}</li>
                )}
            </ul>
        </aside>
    );
}

export default ErrorList;

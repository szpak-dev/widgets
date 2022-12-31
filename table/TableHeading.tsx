import React from "react";

interface TableHeadingProps {
    values: string[];
}

const TableHeading: React.FC<TableHeadingProps> = (props) => {
    const headings = props.values.map((head, i) => <th key={i}>{head}</th>);

    return (
        <thead>
            <tr>{headings}</tr>
        </thead>
    );
}

export default TableHeading;
import React from "react";

interface TableCellProps {
    ord: number;
    value: string;
}

const TableCell: React.FC<TableCellProps> = (props) => {
    return (
        <td key={props.ord}>{props.value}</td>
    );
}

export default TableCell;
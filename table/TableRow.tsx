import React from "react";
import TableCell from "./TableCell";

export interface TableRowProps {
    ord: number;
    cells: string[];
}

const TableRow: React.FC<TableRowProps> = (props) => {
    return (
        <tr key={props.ord}>
            {props.cells.map((cellValue, i) => <TableCell key={i} ord={i} value={cellValue}/>)}
        </tr>
    );
}

export default TableRow;
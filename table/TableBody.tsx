import React from "react";
import TableRow from "./TableRow";

interface TableBodyProps {
    rows: string[][];
}

const TableBody: React.FC<TableBodyProps> = (props) => {
    return (
        <tbody>
            {props.rows.map((cells, i) => <TableRow key={i} ord={i} cells={cells}/>)}
        </tbody>
    );
}

export default TableBody;
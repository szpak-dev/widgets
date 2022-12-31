import React from "react";
import './Table.css';
import TableBody from "./TableBody";
import TableHeading from "./TableHeading";

interface TableProps {
    headers: string[];
    rows: string[][];
}

const Table: React.FC<TableProps> = (props) => {
    const {headers, rows} = props;

    // if (!headers.length || !rows.length) {
    //     throw new Error('Both headers and rows must have at least one element');
    // }
    //
    // if (headers.length !== rows[0].length) {
    //     throw new Error('Number of headers does not match number of cells');
    // }

    return (
        <table>
            <TableHeading values={headers}/>
            <TableBody rows={rows}/>
        </table>
    );
}

export default Table;
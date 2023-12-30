import React, { FC } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Data, Datum } from "../DatumSchema";

const columns = [
  {
    key: "_id",
    label: "ID",
  },
  {
    key: "data",
    label: "Data",
  },
];

interface DataTableProps {
  items: Data
}
const DataTable: FC<DataTableProps> = ({ items }) => {
  return (

    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      {
        items
          ? <TableBody items={items}>
            {(item: Datum) => (
              <TableRow key={item._id}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody >

          : <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      }

    </Table>

  );
}

export default DataTable
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const columns = [
  {
    key: "name",
    label: "id",
  },
  {
    key: "role",
    label: "content",
  },
];

// const PopulatedTable = (items: any) => {

//   return (
    
//   )
// }

// const EmptyTable = () => {
//   return ()
// }

export default function DataTable(data: any) {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      {
        data
          ? <TableBody items={data}>
            {(item: any) => (
              <TableRow key={item.key}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody >

          : <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      }

    </Table>
  );
}

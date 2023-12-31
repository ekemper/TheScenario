import { FC, useState } from "react";
import { Data, Datum } from "../DatumSchema";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue, Button } from "@nextui-org/react";
import React from "react";
import DeleteAction from "./DeleteAction";

const columns = [
  {
    uid: "_id",
    name: "ID",
  },
  {
    uid: "data",
    name: "Data",
  },
  {
    uid: "actions",
    name: "Actions",
  },
];

interface DataTableProps {
  items: Data
}
const DataTable: FC<DataTableProps> = ({ items }) => {

  interface RenderCellProps {
    columnKey: String
    item: Datum
  }

  const renderCell = React.useCallback(({ item, columnKey }: RenderCellProps) => {

    switch (columnKey) {
      case "_id":
        return item._id
      case "data":
        return item.data
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Delete Datum">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteAction columnKey={columnKey as String} item={item} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        console.error("wonky column key!!", columnKey) // TODO not for prod, handle with external service like sentry or similar
    }
  }, []);

  return (
    <Table className="mt-10" aria-label="Data Table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={"start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item._id}>
            {(columnKey) => <TableCell>{renderCell({ item, columnKey } as RenderCellProps)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable
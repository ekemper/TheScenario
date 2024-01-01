import { FC, use, useContext, useEffect, useState } from "react";
import { Datum } from "../DataSchema";
// import Loader from "./Loader";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from "@nextui-org/react";
import React from "react";
import DeleteAction from "./DeleteAction";
import { DataContext } from "../DataContext";
import Loader from "./Loader";

const columns = [
  // {
  //   uid: "_id",
  //   name: "ID",   // having the uuid in the table is handy for dev but in general, users don't need to see that
  // },
  {
    uid: "data",
    name: "Data",
  },
  {
    uid: "actions",
    name: "Actions",
  },
];

interface RenderCellProps {
  columnKey: String
  item: Datum
}

const DataTable: FC = () => {
  const { data, isLoading } = useContext(DataContext)


  const renderCell = React.useCallback(({ item, columnKey }: RenderCellProps) => {

    switch (columnKey) {
      // case "_id":
      //   return item._id      
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

  return (isLoading
    ? <Loader />
    : <>
      <Table className="mt-10 w-1/2" aria-label="Data Table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={"start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{renderCell({ item, columnKey } as RenderCellProps)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default DataTable
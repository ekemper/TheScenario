"use client";

import { useEffect, useState } from "react"
import DataTable from "./components/DataTable";
import { Data } from "./DatumSchema";
import { fetchAll } from "./DataObjectApi";

export default () => {

  const [dataObjects, setDataObjects] = useState<Data>([]);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {

    if (!loadData)
      return;

    setLoadData(false)

    fetchAll().then(data => {
      console.log({ data })
      return setDataObjects(data)
    })
  }, [])

  const containerClasses = ``
  //   fixed left-0 top-0 flex w-full justify-center 
  //   border-b border-gray-300 
  //   bg-gradient-to-b from-zinc-200 
  //   pb-6 pt-8 
  //   backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
  //   lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30
  // `


  // const rows = [
  //   {
  //     id: "1",
  //     content: "Tony Reichert",
  //   },
  //   {
  //     id: "2",
  //     content: "Zoey Lang",
  //   },
  //   {
  //     id: "3",
  //     content: "Jane Fisher",
  //   },
  //   {
  //     id: "4",
  //     content: "William Howard",
  //   },
  // ];



  return (
    <main className="dark flex flex-col items-center justify-between p-24">

      <div className="max-w-5xl w-full items-center justify-between lg:flex">
        <h1 className={containerClasses}>
          Here is a list of Data Objects!
        </h1>
        {/* <ul>
          <li>Tailwind CSS - https://tailwindcss.com/</li>
          <li>Nextui - </li>
          <li>Formik - </li>
        </ul> */}




      </div>
      {/* {state && <DataTable items={state}/>} */}

    </main>
  )
}

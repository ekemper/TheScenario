"use client";

import { useEffect, useState } from "react"
import { Data } from "./DatumSchema";
import { fetchAll } from "./DatumApi";
import Loader from "./components/Loader";
import Create from "./components/Create";
import DataTable from "./components/DataTable";

export default () => {

  const [dataObjects, setDataObjects] = useState<Data>([]);
  const [loadData, setLoadData] = useState<Boolean>(true);
  const [ isLoading, setIsLoading ] = useState<boolean>(true)

  useEffect(() => {

    if (!loadData)
      return;

    setLoadData(false)

    try {
      setIsLoading(true)
      fetchAll().then((data: Data) => {
        setDataObjects(data)
        setIsLoading(false)
        return
      })
    } catch (e) {
      console.log({ e }) // TODO : not for prod, need to handle fe errors gracefully
    }

  }, [])

  return (
    <main className="dark p-24">
      {isLoading
        ? <Loader />
        : <>
          <p className="text-2xl mb-10 uppercase">Data!</p>
          <Create setIsLoading={setIsLoading}/>
          {dataObjects && <DataTable items={dataObjects} />}
        </>
      }
    </main>
  )
}

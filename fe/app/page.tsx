"use client";

import { createContext, useContext, useEffect, useState } from "react"
import { Data } from "./DatumSchema";
import { fetchAll } from "./DataObjectApi";
import Loader from "./components/Loader";
import MainContent from "./components/MainContent";
import { LoaderContext, LoaderContextProvider } from "./LoaderContextProvider";

export default () => {

  const [dataObjects, setDataObjects] = useState<Data>([]);
  const [loadData, setLoadData] = useState(true);
  const {isLoading, setIsLoading} = useContext(LoaderContext)

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
    <LoaderContextProvider>
      <main className="dark p-24">

        {isLoading
          ? <Loader />
          : <MainContent dataObjects={dataObjects}/>
        }
      </main>
    </LoaderContextProvider>
  )
}

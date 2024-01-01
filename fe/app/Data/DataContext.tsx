import React, { createContext, useEffect, useRef, useState } from 'react';
import { Data } from './DataSchema';
import { fetchAll } from './DataApi';

type DataContextType = {
 data: Data;
 refreshData?: () => Promise<void>;
 setData: any;
 setIsLoading: any;
 isLoading: Boolean
}

const initialvalue: DataContextType = {
  data: [],
  refreshData: async () => {},
  isLoading: false,
  setData: () => {},
  setIsLoading: () => {}
}

export const DataContext = createContext<DataContextType>(initialvalue);

export const DataProvider = ({ children }: any) => {
  const [loadData, setLoadData] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const [data, setData] = useState([]);
  // const dataRef = useRef([]);
  // dataRef.current = data

  const refreshDataFunc = async () => {
    console.log('called refresh data')
    setIsLoading(true)
    const newData = await fetchAll()
    console.log({newData})
    setData(newData)
    setIsLoading(false)
    return
  };

  useEffect(() => {

    if (!loadData) return;
    setLoadData(false)

    try {
      refreshDataFunc().then(() => {
        console.log('in then after init refresh data call')
      })
      return

    } catch (e) {
      console.log({ e }) // TODO : not for prod, need to handle fe errors gracefully
    }
  }, [])

  return (
    <DataContext.Provider value={{ data, setData, isLoading, setIsLoading}}>
      {children}
    </DataContext.Provider>
  );
};

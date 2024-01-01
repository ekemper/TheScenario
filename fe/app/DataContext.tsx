import React, { createContext, useEffect, useRef, useState } from 'react';
import { Data } from './DataSchema';
import { fetchAll } from './DataApi';

type DataContextType = {
 data: Data;
 refreshData: () => void;
 isLoading: Boolean
}

const initialvalue: DataContextType = {
  data: [],
  refreshData: () => {},
  isLoading: false
}

export const DataContext = createContext<DataContextType>(initialvalue);

export const DataProvider = ({ children }: any) => {
  const [loadData, setLoadData] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const [data, setData] = useState([]);
  const dataRef = useRef([]);
  dataRef.current = data

  const refreshData = async () => {
    console.log('called refresh data')
    setIsLoading(true)
    const newData = await fetchAll()
    console.log({newData})
    setData(newData)
    setIsLoading(false)
  };

  useEffect(() => {

    if (!loadData) return;
    setLoadData(false)

    try {
      refreshData()
      return

    } catch (e) {
      console.log({ e }) // TODO : not for prod, need to handle fe errors gracefully
    }
  }, [])

  return (
    <DataContext.Provider value={{ data, refreshData, isLoading}}>
      {children}
    </DataContext.Provider>
  );
};

import React, { createContext, useEffect, useRef, useState } from 'react';
import { Data } from './DataSchema';
import { fetchAll } from './DataApi';

type DataContextType = {
 data: Data;
 refreshData: () => Promise<void>;
 isLoading: boolean
}

const initialvalue: DataContextType = {
  data: [],
  refreshData: async () => {},
  isLoading: false,
}

export const DataContext = createContext<DataContextType>(initialvalue);

export const DataProvider = ({ children }: any) => {
  const [loadData, setLoadData] = useState<Boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [data, setData] = useState([]);

  const refreshDataFunc = async () => {
    setIsLoading(true)
    const newData = await fetchAll()
    setData(newData)
    setIsLoading(false)
    return
  };

  useEffect(() => {

    if (!loadData) return;
    setLoadData(false)

    try {
      refreshDataFunc().then(() => {})
      return
    } catch (e) {
      console.log({ e }) // TODO : not for prod, need to handle fe errors gracefully
    }
  }, [])

  return (
    <DataContext.Provider value={{ data, refreshData: refreshDataFunc, isLoading}}>
      {children}
    </DataContext.Provider>
  );
};

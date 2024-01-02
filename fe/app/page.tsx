"use client";

import { DataProvider } from "./Data/DataContext";
import Create from "./components/Create";
import DataTable from "./components/DataTable";

export default () => {

  return (
    <main className="dark p-24 md:mx-48 flex flex-col h-screen">
      <p className="text-2xl mb-10 uppercase">Data!</p>
      <DataProvider>
        <Create />
        <DataTable />
      </DataProvider>
    </main>
  )
}

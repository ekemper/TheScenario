"use client";

import { DataContext, DataProvider } from "./DataContext";
import Create from "./components/Create";
import DataTable from "./components/DataTable";
import { useEffect, useState } from "react";
import { Data } from "./DataSchema";
import { fetchAll } from "./DataApi";

export default () => {



  return (
    <main className="dark p-24">
          <p className="text-2xl mb-10 uppercase">Data!</p>
          <Create />
          <DataProvider>
            <DataTable/>
          </DataProvider>
    </main>
  )
}

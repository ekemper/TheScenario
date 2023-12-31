import DataTable from "./DataTable";
import Create from "./Create";
import { Data } from "../DatumSchema";
import { FC } from "react";

interface MainContentProps {
    dataObjects: Data
}

const MainContent: FC<MainContentProps> = ({ dataObjects }) => {
    return (<>
        <p className="text-2xl mb-10 uppercase">Data!</p>
        <Create />
        {dataObjects && <DataTable items={dataObjects} />}
    </>)
}

export default MainContent
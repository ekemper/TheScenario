
import { deleteById } from "../Data/DataApi";
import { FC, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Datum } from "../Data/DataSchema";
import { Button } from "@nextui-org/react";
import { DataContext } from "../Data/DataContext";

interface DeleteActionProps {
    columnKey: String
    item: Datum
}

const DeleteAction: FC<DeleteActionProps> = ({ columnKey, item }) => {
    const {refreshData} = useContext(DataContext)
    const [showCofirmation, setShowConfirmation] = useState(false)

    const handleDelete = async (e: any, item: Datum) => { // TODO : need correct type
        await deleteById(item._id)
        await refreshData()
    }

    return (
        <div className="flex">
            {showCofirmation
                ? <div className="flex flex-row gap-x-2">
                    <p className="text-xs my-1">Danger!</p>
                    <Button
                        className="h-6"
                        color="danger"
                        onClick={event => handleDelete(event, item)}>
                        Delete
                    </Button>
                    <Button
                        className="h-6"
                        color="primary"
                        onClick={() => setShowConfirmation(false)}>
                        Nvm
                    </Button>
                </div>

                : <FontAwesomeIcon
                    className="opacity-40 hover:opacity-100"
                    icon={faCircleXmark}
                    onClick={() => setShowConfirmation(true)} />
            }
        </div>
    )
}


export default DeleteAction
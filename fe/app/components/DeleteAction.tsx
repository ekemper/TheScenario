
import { deleteById } from "../DataApi";
import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Datum } from "../DataSchema";
import { Button } from "@nextui-org/react";

interface DeleteActionProps {
    columnKey: String
    item: Datum
}

const DeleteAction: FC<DeleteActionProps> = ({ columnKey, item }) => {

    const [showCofirmation, setShowConfirmation] = useState(false)

    const handleDelete = (e: any, item: Datum) => { // TODO : need correct type
        const _id = item._id
        console.log({ _id })

        deleteById(_id).then((resp: unknown) => { // TODO : need correct type
            console.log({ resp })
            debugger
        })
    }

    return (
        <div className="flex">
            {showCofirmation
                ? <div className="flex gap-x-2">
                    <p className="text-xs ">Danger!</p>
                    <Button
                        className="h-6"
                        color="danger"
                        onClick={event => handleDelete(event, item)}>
                        Delete
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
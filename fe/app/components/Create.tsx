import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import CreateDatumForm from "./CreateDatumForm";
import { Button } from "@nextui-org/react";
import { FC } from 'react';

const Create: FC = () => {
    return (
        <>
            <Button color="primary" variant="bordered" className="justify-end h-auto w-auto p-2">
                <div className="flex row  justify-between">
                    <FontAwesomeIcon className="h-10" icon={faCirclePlus} />
                    <h2 className="uppercase ">Create</h2>
                </div>
            </Button>

            <CreateDatumForm />
        </>
    )
} 

export default Create
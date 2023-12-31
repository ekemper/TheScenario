import React, { FC } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Datum } from "../DatumSchema";

interface DeleteModalProps {
    item: Datum;
}

const DeleteModal:FC<DeleteModalProps> = ({item}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const HandleDelete = () => {
    alert('delete need implementation')
  }

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Danger!</ModalHeader>
              <ModalBody>
                
                <pre>
                    {JSON.stringify(item,null,4)}
                </pre>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={HandleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteModal
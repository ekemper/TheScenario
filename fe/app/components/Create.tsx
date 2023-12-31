import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";
import { Button } from "@nextui-org/react";
import { FC } from 'react';

interface CreateProps {
    setIsLoading: any
}

const Create: FC<CreateProps> = ({setIsLoading}) => {
    return (
        <>
            <Button color="primary" variant="bordered" className="justify-end h-auto w-auto p-2">
                <div className="flex row  justify-between">
                    <FontAwesomeIcon className="h-10" icon={faCirclePlus} />
                    <h2 className="uppercase ">Create</h2>
                </div>
            </Button>


        {/* TODO: Accessibility for form! */}

            <div>
                <Formik
                    initialValues={{ name: "", email: "" }}
                    onSubmit={async (values) => {
                        setIsLoading(true)
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        setIsLoading(false)
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        <Field name="name" type="text" />
                        <Field name="email" type="email" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Create
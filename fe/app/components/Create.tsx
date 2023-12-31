import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";
import { FC } from 'react';

interface CreateProps {
    setIsLoading: any
}

const Create: FC<CreateProps> = ({ setIsLoading }) => {
    return (
        <>
            {/* TODO: Accessibility for form! */}
            <div>
                <Formik
                    initialValues={{ data: "" }}
                    onSubmit={async (values) => {
                        setIsLoading(true)
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        setIsLoading(false)
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form className='flex'>
                        <Field 
                            className="h-12 mr-4 p-2 rounded-xl" 
                            name="data" 
                            type="text" 
                            placeholder="new datum"/>

                        <button type="submit" className="rounded-full ">
                            <FontAwesomeIcon className="h-10 " icon={faCirclePlus} />
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Create
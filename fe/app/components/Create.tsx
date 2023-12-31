import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";
import { FC } from 'react';
import { create } from '../DatumApi';

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
                    onSubmit={async (value) => {
                        setIsLoading(true)
                        await create(value.data)
                        setIsLoading(false) // TODO ; this sort of boilerplate can be avoided with react-query, but doing it explicitly is fine here
                    }}
                >
                    <Form className='flex'>


                    {/* TODO: ADD VALIDATION for string length, and not js */}
                    {/* handle validation errors gracefully with user facing message on how to fix  */}

                        <Field 
                            className="h-12 mr-4 py-2 px-4 rounded-xl" 
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
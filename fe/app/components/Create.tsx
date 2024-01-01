import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";
import { FC, useContext } from 'react';
import { create } from '../DataApi';
import { DataContext } from '../DataContext';

const Create: FC = () => {
    const { refreshData } = useContext(DataContext);

    const handleSubmit = async (value: any) => { // TODO get correct type here
        await create(value.data)
        console.log('calling refresh in create handler')
        await refreshData()
        console.log('returned from refresh data in create handler')

    }

    return (
        <>
            {/* TODO: Accessibility for form! */}
            <div>
                <Formik
                    initialValues={{ data: "" }}
                    onSubmit={handleSubmit}
                >
                    <Form className='flex'>

                        {/* TODO: ADD VALIDATION for string length, and not js */}
                        {/* AND handle validation errors gracefully with user facing message on how to fix  */}

                        <Field
                            className="h-12 mr-4 py-2 px-4 rounded-xl"
                            name="data"
                            type="text"
                            placeholder="new datum" />

                        <button type="submit" className="rounded-full ">
                            <FontAwesomeIcon className="h-10" icon={faCirclePlus} />
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Create
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, Form } from "formik";
import { FC, useContext } from 'react';
import { create } from '../Data/DataApi';
import { DataContext } from '../Data/DataContext';
import * as Yup from 'yup'

const Create: FC = () => {
    
    const { refreshData } = useContext(DataContext);

    const handleSubmit = async (value: any, { resetForm }: any) => { // TODO get correct type here
        await create(value.data)
        await refreshData()
        resetForm()
    }

    const maxChars = 30

    const datumFormSchema = Yup.object().shape({
        data: Yup.string().max(maxChars, `Too Long! Maximum number of characters is ${maxChars}`)
    })

    return (
        <>
            {/* TODO: Accessibility for form! */}
            <div>
                <Formik
                    initialValues={{ data: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={datumFormSchema}
                    validateOnChange
                >
                    {({ errors, touched, handleChange }) => (

                        <Form className='flex'>
                            <Field
                                className="h-12 w-80 mr-4 py-2 px-4 rounded-xl"
                                name="data"
                                type="text"
                                placeholder="new datum"
                                onChange={(e:any) => handleChange(e)} />

                            
                            <button type="submit" className="rounded-full ">
                                <FontAwesomeIcon className="h-10" icon={faCirclePlus} />
                            </button>

                            {errors.data && touched.data
                            ? <div className='mx-12 my-2'>{errors.data}</div>
                            : null}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Create
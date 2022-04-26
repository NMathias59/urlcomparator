import React, { useState } from 'react'

import { Formik, Form } from 'formik'
import * as Yup from "yup";

//components
import TextField from './TextField'
import Result from './Result';

export default function FormUrl() {


    const [valid, setValid] = useState(false)
    const [url, setUrl] = useState({
        url1: "",
        url2: ""
    })

    const switchValueState = () => {
        setValid(true)
    }


    const validate = Yup.object({
        url1: Yup.string().required().url().defined(),
        url2: Yup.string().required().url().defined()
    })
    return (
        <Formik
            initialValues={{
                url1: "",
                url2: "",
            }}
            validationSchema={validate}
            onSubmit={
                values => {
                    setValid(true)
                    setUrl(values)
                }
            }


        >
            {formik => (
                <div className='container'>
                    <h1 className=' row justify-content-md-center'> past your urls </h1>
                    {/* {console.log(formik.values)} */}

                    <Form className='row'>
                        <TextField type="text" label="url1" name="url1" />
                        <TextField type="text" label="url2" name="url2" />
                        <div className='container row justify-content-md-center'>
                            <button type='submit' className='btn btn-primary col col-lg-2' >
                                validate
                            </button>
                            {valid ? <p className='col col-lg-2'><Result url1={url.url1} url2={url.url2}  /></p> : <p className='col col-lg-2'>nope</p>}

                        </div>
                    </Form>

                </div>
            )
            }
        </Formik>
    )
}

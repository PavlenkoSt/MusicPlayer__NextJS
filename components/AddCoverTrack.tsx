import { Field, Form, Formik } from 'formik'
import React from 'react'
import s from '../styles/AddCoverTrack.module.scss'


interface IFormFields {
    cover?: any
}

const AddCoverTrack = () => {
    return (
        <div>
            <Formik
                initialValues={{ cover: '' }}
                validate={values => {
                    const errors: IFormFields = {};
                    if (!values.cover) {
                        errors.cover = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
            >
            {({ isSubmitting, errors }) => (
                <Form className={s.form}>
                    <h2 className='header'>Upload track cover</h2>
                    <Field type="file" name="cover" placeholder="Upload a track cover" className={`${s.field} ${errors.cover ? s.err : ''}`} />
                    <button type="submit" disabled={isSubmitting} className={s.btn} >
                        Ok
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default AddCoverTrack

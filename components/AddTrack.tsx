import { Field, Form, Formik } from 'formik'
import React from 'react'
import s from '../styles/AddTrack.module.scss'


interface IFormFields {
    track?: any
}

const AddTrack = () => {
    return (
        <div>
            <Formik
                initialValues={{ track: '' }}
                validate={values => {
                    const errors: IFormFields = {};
                    if (!values.track) {
                        errors.track = 'Required';
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
                    <h2 className='header'>Upload track</h2>
                    <Field type="file" name="track" placeholder="Upload a track" className={`${s.field} ${errors.track ? s.err : ''}`} />
                    <button type="submit" disabled={isSubmitting} className={s.btn} >
                        Ok
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default AddTrack

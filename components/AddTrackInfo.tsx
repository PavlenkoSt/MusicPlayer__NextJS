import { Field, Form, Formik } from 'formik'
import React from 'react'
import s from '../styles/AddTrackInfo.module.scss'


interface IFormFields {
    name?: string
    artist?: string
    text?: string
}

const AddTrackInfo = () => {
    return (
        <div>
            <Formik
                initialValues={{ name: '', artist: '', text: '' }}
                validate={values => {
                    const errors: IFormFields = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.artist) {
                        errors.artist = 'Required';
                    }
                    if (!values.text) {
                        errors.text = 'Required';
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
                    <Field type="text" name="name" placeholder="Track name" className={`${s.field} ${errors.name ? s.err : ''}`} />
                    <Field type="text" name="artist" placeholder="Track artist" className={`${s.field} ${errors.text ? s.err : ''}`} />
                    <Field type="text" name="text" placeholder="Track text" as='textarea'  className={`${s.field} ${errors.text ? s.err : ''}`} />
                    <button type="submit" disabled={isSubmitting} className={s.btn} >
                        Save
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default AddTrackInfo

import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import s from '../styles/AddComments.module.scss';

interface IFormFields {
    name?: string
    text?: string
}

const AddComment = () => {
    return (
        <div className={s.main}>
            <h2 className={s.header}>Add comment</h2>
            <Formik
                initialValues={{ name: '', text: '' }}
                validate={values => {
                    const errors: IFormFields = {};
                    if (!values.name) {
                        errors.name = 'Required';
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
                    <Field type="text" name="name" placeholder="Your name" className={`${s.field} ${errors.name ? s.err : ''}`} />
                    <Field type="text" name="text" placeholder="Comment" className={`${s.field} ${errors.text ? s.err : ''}`} />
                    <button type="submit" disabled={isSubmitting} className={s.btn} >
                        Send
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default AddComment;
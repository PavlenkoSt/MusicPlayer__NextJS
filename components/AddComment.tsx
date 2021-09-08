import React from 'react';
import s from '../styles/AddComments.module.scss';



const AddComment = () => {
    return (
        <div className={s.main}>
            <h2 className={s.header}>Add comment</h2>
            <div className={s.form}>
                <input type="text" name="name" placeholder="Your name" className={s.field} />
                <input type="text" name="text" placeholder="Comment" className={s.field} />
                <button type="submit" className={s.btn} >
                    Send
                </button>
            </div>
        </div>
    )
}

export default AddComment;
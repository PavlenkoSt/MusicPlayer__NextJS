import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { FC } from 'react'
import useInput from '../hooks/useInput'
import s from '../styles/AddComments.module.scss'
import { ITrack } from '../types/track'


type AddCommentPropsType = {
    track: ITrack
    setTrack: Function
}

const AddComment: FC<AddCommentPropsType> = ({ track, setTrack }) => {

    const router = useRouter()

    const username = useInput('')
    const text = useInput('')

    const submitHandler = async () => {
        try{
            const comment = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: router.query.id?.toString()
            })

            setTrack({ ...track, comments: [ ...track.comments, comment.data ]})
        }catch(e){
            console.log(e)
        }
    }

    return (
        <div className={s.main}>
            <h2 className={s.header}>Add comment</h2>
            <div className={s.form}>
                <input type="text" name="name" placeholder="Your name" className={s.field} {...username} />
                <input type="text" name="text" placeholder="Comment" className={s.field} {...text} />
                <button type="submit" className={s.btn} onClick={submitHandler} >
                    Send
                </button>
            </div>
        </div>
    )
}

export default AddComment
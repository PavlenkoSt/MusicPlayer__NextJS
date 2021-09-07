import React, { FC } from 'react'
import { UseInputType } from '../hooks/useInput'
import s from '../styles/AddTrackInfo.module.scss'


type AddTrackInfoPropsType = {
    name: UseInputType
    artist: UseInputType
    text: UseInputType
}

const AddTrackInfo: FC<AddTrackInfoPropsType> = ({ name, artist, text }) => {
    return (
        <div>
            <div className={s.form}>
                <h2 className='header'>Upload track info</h2>
                <input type="text" name="name" placeholder="Track name" className={s.field} {...name} />
                <input type="text" name="artist" placeholder="Track artist" className={s.field} {...artist} />
                <textarea name="text" placeholder="Track text" className={s.field} {...text} />
            </div>
        </div>
    )
}

export default AddTrackInfo

import React, { ChangeEventHandler, FC } from 'react'
import s from '../styles/TrackPlayer.module.scss'


interface ITrackProgressPropsType {
    current: number
    max: number
    onChange: ChangeEventHandler<HTMLInputElement>
    time?: boolean
}

const TrackProgress: FC<ITrackProgressPropsType> = ({ current, max, onChange, time=false }) => {

    const addZero = (num: number) => {
        if(num <= 9){
            return `0${num}`
        }
        return num
    }

    const toTime = (num: number) => {
        const date = new Date(0)
        date.setSeconds(num)
        return `${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    }

    return (
        <div className={s.progress}>
            <input
                type='range'
                min={0}
                max={max}
                value={current}
                onChange={onChange}
            />
            <div className={s.nums} >
                <span>{ time ? toTime(current) : current }</span> \ <span>{ time ? toTime(max) : max }</span>
            </div>
        </div>
    )
}

export default TrackProgress

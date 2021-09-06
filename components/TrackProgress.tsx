import React, { ChangeEventHandler, FC } from 'react'
import s from '../styles/TrackPlayer.module.scss'


interface ITrackProgressPropsType {
    current: number
    max: number
    onChange: ChangeEventHandler<HTMLInputElement>
}

const TrackProgress: FC<ITrackProgressPropsType> = ({ current, max, onChange }) => {
    return (
        <div className={s.progress}>
            <input
                type='range'
                min={current}
                max={max}
                value={current}
                onChange={onChange}
            />
            <div>
                { current } \ {max}
            </div>
        </div>
    )
}

export default TrackProgress

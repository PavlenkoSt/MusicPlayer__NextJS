import Image from 'next/image'
import React, { FC, useState } from 'react'
import s from '../styles/TrackItem.module.scss'
import play from '../public/play.svg'
import pause from '../public/pause.svg'


interface ITrackItemProps {
    name: string
    artist: string
    picture: string
    id: string
}

const TrackItem: FC<ITrackItemProps> = ({ name, artist, picture, id }) => {

    const [ playStatus, setPlayStatus ] = useState(false);

    return (
        <div className={s.item}>
            <div className={s.play} onClick={() => setPlayStatus(prev => !prev)} >
                <Image
                    src={ playStatus ? pause : play}
                    width={20}
                    height={20}
                />
            </div>
            <div className={s.pic}>
                <Image
                    src={picture}
                    width={60}
                    height={60}
                />
            </div>
            <div>
                <div className={s.name}>{ name }</div>
                <div className={s.artist}>{ artist }</div>
            </div>
            <div className={s.del}></div>
        </div>
    )
}

export default TrackItem

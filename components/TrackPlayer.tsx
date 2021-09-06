import React, { useState } from 'react'
import s from '../styles/TrackPlayer.module.scss'
import Image from 'next/image'
import play from '../public/play.svg'
import pause from '../public/pause.svg'
import TrackProgress from './TrackProgress'


const TrackPlayer = () => {
    const track = {_id: '1', name: 'name', artist: 'artist', audio: '/Galaxy.mp3', picture: '/1.jpg', comments: [], listens: 0, text: 'text'}

    const [ playStatus, setPlayStatus ] = useState(false)
        
    return (
        <div className={s.player}>
            <div className={s.main}>
                <div className={s.play} onClick={() => setPlayStatus(prev => !prev)} >
                    <Image
                        src={ playStatus ? pause : play}
                        width={20}
                        height={20}
                    />
                </div>
                <div>
                    <div className={s.name}>{ track.name }</div>
                    <div className={s.artist}>{ track.artist }</div>
                </div>
            </div>
            <div className={s.time}>
                <TrackProgress
                    current={0}
                    max={100}
                    onChange={() => ({})}
                />
            </div>
            <div className={s.vol}>
                <Image
                    src='/volume.svg'
                    width={20}
                    height={20}
                />
                <TrackProgress
                    current={0}
                    max={100}
                    onChange={() => ({})}
                />
            </div>
        </div>
    )
}

export default TrackPlayer

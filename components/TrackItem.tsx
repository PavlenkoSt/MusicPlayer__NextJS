import Image from 'next/image'
import React, { FC } from 'react'
import s from '../styles/TrackItem.module.scss'
import playIcon from '../public/play.svg'
import { useRouter } from 'next/dist/client/router'
import useActions from '../hooks/useActions'
import { ITrack } from '../types/track'


interface ITrackItemProps {
    track: ITrack
}

const TrackItem: FC<ITrackItemProps> = ({ track }) => {
    const router = useRouter()

    const { setTrack, pause } = useActions()

    const playHandler = () => {
        pause()
        setTrack(track)
    }


    return (
        <div className={s.item}>
            <div className={s.play} onClick={playHandler} >
                <Image
                    src={playIcon}
                    width={20}
                    height={20}
                />
            </div>
            <div className={s.info} onClick={() => router.push(`/track-list/${track._id}`)}>
                <div className={s.pic}>
                    <Image
                        src={track.picture}
                        width={60}
                        height={60}
                    />
                </div>
                <div>
                    <div className={s.name}>{ track.name }</div>
                    <div className={s.artist}>{ track.artist }</div>
                </div>
            </div>
            <div className={s.del}>
                <Image
                    src='/delete.svg'
                    width={20}
                    height={20}
                />
            </div>
        </div>
    )
}

export default TrackItem

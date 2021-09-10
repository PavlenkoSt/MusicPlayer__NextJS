import Image from 'next/image'
import React, { FC } from 'react'
import s from '../styles/TrackItem.module.scss'
import playIcon from '../public/play.svg'
import { useRouter } from 'next/dist/client/router'
import useActions from '../hooks/useActions'
import { ITrack } from '../types/track'
import { useDispatch } from 'react-redux'
import { NetxThunkDispatch } from '../store'
import tracksActions from '../store/actions/tracks'


interface ITrackItemProps {
    track: ITrack
}

const TrackItem: FC<ITrackItemProps> = ({ track }) => {
    const router = useRouter()

    const { setTrack, pause } = useActions()
    const dispatch = useDispatch() as NetxThunkDispatch

    const playHandler = () => {
        pause()
        setTrack(track)
    }

    const deleteHandler = () => dispatch(tracksActions.deleteTracks(track._id))

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
                        src={ `http://localhost:5000/${track.picture}` }
                        width={60}
                        height={60}
                        objectFit='cover'
                    />
                </div>
                <div>
                    <div className={s.name}>{ track.name }</div>
                    <div className={s.artist}>{ track.artist }</div>
                </div>
            </div>
            <div className={s.del} onClick={deleteHandler} >
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

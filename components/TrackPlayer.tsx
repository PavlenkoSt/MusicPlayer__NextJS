import React, { ChangeEvent, useEffect } from 'react'
import s from '../styles/TrackPlayer.module.scss'
import Image from 'next/image'
import playIcon from '../public/play.svg'
import pauseIcon from '../public/pause.svg'
import TrackProgress from './TrackProgress'
import useTypedSelector from '../hooks/useTypedSelector'
import useActions from '../hooks/useActions'


let audio: any

const TrackPlayer = () => {

    const { currentTime, duration, pauseStatus, track, volume } = useTypedSelector(state => state.player)
    const { play, pause, setTrack, setDuration, setCurrentTime, setVolume } = useActions()

    const iconHandler = () => {
        if(pauseStatus){
            play()
            audio.play()
        }else{
            pause()
            audio.pause()
        }
    }

    const volumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVolume(+e.target.value)
        audio.volume = +e.target.value / 100
    }

    const currentTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentTime(+e.target.value)
        audio.currentTime = +e.target.value
    }

    const setAudio = () => {
        if(track){
            audio.src = `http://localhost:5000/${track?.audio}`
            audio.volume = volume / 100
            
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }

            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    useEffect(() => {
        if(!audio){
            audio = new Audio()
        }else{
            setAudio()
            iconHandler()
        }
    }, [track])

    if(!track){
        return <></>
    }
        
    return (
        <div className={s.player}>
            <div className={s.main}>
                <div className={s.play} onClick={iconHandler} >
                    <Image
                        src={ !pauseStatus ? pauseIcon : playIcon}
                        width={20}
                        height={20}
                    />
                </div>
                <div>
                    <div className={s.name}>{ track?.name }</div>
                    <div className={s.artist}>{ track?.artist }</div>
                </div>
            </div>
            <div className={s.time}>
                <TrackProgress
                    current={currentTime}
                    max={duration}
                    onChange={currentTimeChange}
                />
            </div>
            <div className={s.vol}>
                <Image
                    src='/volume.svg'
                    width={20}
                    height={20}
                />
                <TrackProgress
                    current={volume}
                    max={100}
                    onChange={volumeChange}
                />
            </div>
        </div>
    )
}

export default TrackPlayer

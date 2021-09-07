import { ITrack } from './../../types/track'

export type PlayerState = {
    track: null | ITrack
    pauseStatus: boolean
    duration: number
    currentTime: number
    volume: number
}

export enum playerActionTypes {
    SET_TRACK = 'SET_TRACK',
    SET_DURATION = 'SET_DURATION',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME',
    PAUSE = 'PAUSE',
    PLAY = 'PLAY',
}

type setTrackType = {
    type: playerActionTypes.SET_TRACK,
    payload: ITrack | null
}

type setPause = {
    type: playerActionTypes.PAUSE
}

type setPlay = {
    type: playerActionTypes.PLAY
}

type setCurrentTime = {
    type: playerActionTypes.SET_CURRENT_TIME
    payload: number
}

type setDuration = {
    type: playerActionTypes.SET_DURATION
    payload: number
}

type setVolume = {
    type: playerActionTypes.SET_VOLUME
    payload: number
}

export type playerActionCreatorTypes = 
    setTrackType |
    setPause | 
    setPlay | 
    setCurrentTime |
    setDuration |
    setVolume
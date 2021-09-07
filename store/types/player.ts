import { ITrack } from './../../types/track'

export type PlayerState = {
    track: null | ITrack
    pause: boolean
    duration: number
    currentTime: number
    volume: number
}

export enum playerActionTypes {
    SET_TRACK = 'SET_TRACK'
}

type setTrackType = {
    type: playerActionTypes.SET_TRACK,
    payload: ITrack
}

export type playerActionCreatorTypes = 
    setTrackType 
import { ITrack } from './../../types/track'


export enum playerActionTypes {
    SET_TRACK = 'SET_TRACK'
}

type setTrackType = {
    type: playerActionTypes.SET_TRACK,
    payload: ITrack
}

export type playerActionCreatorTypes = 
    setTrackType 
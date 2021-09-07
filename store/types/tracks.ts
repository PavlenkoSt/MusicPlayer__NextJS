import { ITrack } from './../../types/track';


export type TrackState = {
    tracks: ITrack[],
    error: string
}

export enum TracksActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR'
}

type FetchTracks = {
    type: TracksActionTypes.FETCH_TRACKS,
    payload: ITrack[]
}

type FetchTracksError = {
    type: TracksActionTypes.FETCH_TRACKS_ERROR,
    payload: string
}

export type TracksActions = FetchTracks | FetchTracksError
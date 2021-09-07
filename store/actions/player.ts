import { playerActionCreatorTypes } from './../types/player'
import { playerActionTypes } from '../types/player'
import { ITrack } from './../../types/track'


const playerActions = {
    setTrack: (payload: ITrack | null): playerActionCreatorTypes => ({ type: playerActionTypes.SET_TRACK, payload }),
    play: (): playerActionCreatorTypes => ({ type: playerActionTypes.PLAY }),
    pause: (): playerActionCreatorTypes => ({ type: playerActionTypes.PAUSE }),
    setDuration: (payload: number): playerActionCreatorTypes => ({ type: playerActionTypes.SET_DURATION, payload }),
    setCurrentTime: (payload: number): playerActionCreatorTypes => ({ type: playerActionTypes.SET_CURRENT_TIME, payload }),
    setVolume: (payload: number): playerActionCreatorTypes => ({ type: playerActionTypes.SET_VOLUME, payload }),
}

export default playerActions
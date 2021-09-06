import { playerActionTypes } from '../types/player'
import { ITrack } from './../../types/track'


const playerActions = {
    setTrack: (payload: ITrack | null) => ({ type: playerActionTypes.SET_TRACK, payload })
}

export default playerActions
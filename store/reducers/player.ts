import { playerActionCreatorTypes, playerActionTypes, PlayerState } from '../types/player'
import { ITrack } from './../../types/track'


const initialState: PlayerState = {
    track: null as null | ITrack,
    pause: false,
    duration: 0,
    currentTime: 0,
    volume: 0
}

const player = (state = initialState, action: playerActionCreatorTypes): PlayerState => {
    switch(action.type){
        case playerActionTypes.SET_TRACK: {
            return {
                ...state, 
                track: action.payload
            }
        }

        default: return state
    }
}


export default player
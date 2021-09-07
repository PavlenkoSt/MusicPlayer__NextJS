import { playerActionCreatorTypes, playerActionTypes, PlayerState } from '../types/player'
import { ITrack } from './../../types/track'


const initialState: PlayerState = {
    track: null as null | ITrack,
    pauseStatus: true,
    duration: 0,
    currentTime: 0,
    volume: 50
}

const player = (state = initialState, action: playerActionCreatorTypes): PlayerState => {
    switch(action.type){
        case playerActionTypes.SET_TRACK: 
            return { ...state, track: action.payload }
        
        case playerActionTypes.PLAY:
            return { ...state, pauseStatus: false }

        case playerActionTypes.PAUSE: 
            return { ...state, pauseStatus: true }

        case playerActionTypes.SET_VOLUME: 
            return { ...state, volume: action.payload }
        
        case playerActionTypes.SET_CURRENT_TIME: 
            return { ...state, currentTime: action.payload }

        case playerActionTypes.SET_DURATION: 
            return { ...state, duration: action.payload }

        default: 
            return state
    }
}


export default player
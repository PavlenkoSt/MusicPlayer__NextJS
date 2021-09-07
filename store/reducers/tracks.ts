import { TracksActions, TracksActionTypes, TrackState } from "../types/tracks"


const initialState: TrackState = {
    tracks: [],
    error: ''
}

const tracks = (state = initialState, action: TracksActions): TrackState => {
    switch(action.type){
        case TracksActionTypes.FETCH_TRACKS: 
            return { ...state, error: '', tracks: action.payload }

        case TracksActionTypes.FETCH_TRACKS_ERROR: 
            return { ...state, error: action.payload }

        default:
            return state
    }
}

export default tracks
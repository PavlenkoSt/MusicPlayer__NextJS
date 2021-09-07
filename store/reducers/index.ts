import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import player from "./player"
import tracks from "./tracks"


const combinedReducer = combineReducers({
    player,
    tracks
})

const rootReducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, 
            ...action.payload, 
        }
        if (state.count) nextState.count = state.count 
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export type rootReducerType = ReturnType<typeof combinedReducer>

export default rootReducer
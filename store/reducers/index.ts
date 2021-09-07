import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import player from "./player"


const combinedReducer = combineReducers({
    player
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
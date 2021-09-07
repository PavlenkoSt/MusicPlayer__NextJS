import {AnyAction, applyMiddleware, createStore, Store} from 'redux'
import {createWrapper, Context, MakeStore} from 'next-redux-wrapper'
import rootReducer, { rootReducerType } from './reducers'
import thunk, { ThunkDispatch } from 'redux-thunk'


const makeStore: MakeStore<Store<rootReducerType>> = (context: Context) => createStore(rootReducer, applyMiddleware(thunk))

export const wrapper = createWrapper<Store<rootReducerType>>(makeStore, {debug: true})

export type NetxThunkDispatch = ThunkDispatch<rootReducerType, void, AnyAction>
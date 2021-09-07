import {createStore, Store} from 'redux'
import {createWrapper, Context, MakeStore} from 'next-redux-wrapper'
import rootReducer, { rootReducerType } from './reducers'


const makeStore: MakeStore<Store<rootReducerType>> = (context: Context) => createStore(rootReducer)

export const wrapper = createWrapper<Store<rootReducerType>>(makeStore, {debug: true})
import { TracksActions, TracksActionTypes } from './../types/tracks'
import { Dispatch } from "react"
import axios from 'axios'


const tracksActions = {
    fetchTracks: () => async (dispatch: Dispatch<TracksActions>) => {
        try{
            const tracks = await axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TracksActionTypes.FETCH_TRACKS,
                payload: tracks.data
            })
        }catch(e){
            dispatch({
                type: TracksActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Ошибка подгрузки треков на этапе запроса'
            })
        }
    },
    searchTracks: (query: string) => async (dispatch: Dispatch<TracksActions>) => {
        try{
            const tracks = await axios.get(`http://localhost:5000/tracks/search?query=${query}`)
            dispatch({
                type: TracksActionTypes.FETCH_TRACKS,
                payload: tracks.data
            })
        }catch(e){
            dispatch({
                type: TracksActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Ошибка подгрузки треков на этапе поиска'
            })
        }
    },
    deleteTracks: (id: string) => async (dispatch: Dispatch<TracksActions>) => {
        try{
            await axios.delete(`http://localhost:5000/tracks/${id}`)
            const tracks = await axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TracksActionTypes.FETCH_TRACKS,
                payload: tracks.data
            })
        }catch(e){
            dispatch({
                type: TracksActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Ошибка удаления трека'
            })
        }
    }
} 

export default tracksActions
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUploadTrackState {
    picture: File | null,
    audio: File | null
}

const initialState: IUploadTrackState = {
    picture: null,
    audio: null
}

export const uploadTrackSlice = createSlice({
    name: 'uploadTrack',
    initialState,
    reducers: {
        setPicture: (state, payload: PayloadAction<File>) => {
            state.picture = payload.payload
        },
        setAudio: (state, payload: PayloadAction<File>) => {
            state.audio = payload.payload
        }
    },
})

export const { setPicture } = uploadTrackSlice.actions

export default uploadTrackSlice.reducer
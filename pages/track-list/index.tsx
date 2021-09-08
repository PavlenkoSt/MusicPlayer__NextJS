import React, { ChangeEvent, useEffect, useState } from 'react'
import TrackItem from '../../components/TrackItem'
import MainLayout from '../../layouts/MainLayout'
import s from '../../styles/TrackListPage.module.scss'
import useTypedSelector from '../../hooks/useTypedSelector'
import { NetxThunkDispatch, wrapper } from '../../store'
import tracksActions from '../../store/actions/tracks'
import { useDispatch } from 'react-redux'

const index = () => {

    const { tracks, error } = useTypedSelector(state => state.tracks)

    const [ query, setQuery ] = useState('')
    const [ timer, setTimer ] = useState(null as any)

    const dispatch = useDispatch() as NetxThunkDispatch

    const searchInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)

        if(timer){
            clearTimeout(timer)
        }
        
        setTimer(
            setTimeout( async () => {
                await dispatch(await tracksActions.searchTracks(query))
            }, 500)
        )
    }

    const renderTracks = tracks.map(track => <TrackItem
        key={track._id}
        track={track}
    />)

    if(error){
        return (
            <MainLayout title='Track List' >
                <h1 className={s.err} >{ error }</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout title='Track List'>
            <input type='text' placeholder='Search' value={query} onChange={searchInputHandler} />
            <div className={s.list}>
                { renderTracks }
            </div>
        </MainLayout>
    )
}

export default index

export const getServerSideProps = wrapper.getServerSideProps( store => async (): Promise<any> => {
    const dispatch = store.dispatch as NetxThunkDispatch
    await dispatch(await tracksActions.fetchTracks())
})
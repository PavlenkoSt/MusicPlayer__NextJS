import React, { useEffect } from 'react'
import TrackItem from '../../components/TrackItem'
import MainLayout from '../../layouts/MainLayout'
import s from '../../styles/TrackListPage.module.scss'
import useTypedSelector from '../../hooks/useTypedSelector'
import { NetxThunkDispatch, wrapper } from '../../store'
import tracksActions from '../../store/actions/tracks'

const index = () => {

    const { tracks, error } = useTypedSelector(state => state.tracks)

    const renderTracks = tracks.map(track => <TrackItem
        key={track._id}
        track={track}
    />)

    if(!tracks || !tracks.length){
        return (
            <MainLayout title='Track List' >
                <h1 className={s.err} >{ error }</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout title='Track List'>
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
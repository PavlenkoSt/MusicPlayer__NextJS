import React from 'react'
import TrackItem from '../../components/TrackItem'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'
import s from '../../styles/TrackListPage.module.scss'

const index = () => {

    const tracks: ITrack[] = [
        {_id: '1', name: 'name', artist: 'artist', audio: '/Galaxy.mp3', picture: '/1.jpg', comments: [], listens: 0, text: 'text'},
        {_id: '2', name: 'name 2', artist: 'artist 2', audio: '/Galaxy.mp3', picture: '/1.jpg', comments: [], listens: 3, text: 'text 2'},
        {_id: '3', name: 'name 3', artist: 'artist 3', audio: '/Galaxy.mp3', picture: '/1.jpg', comments: [], listens: 2, text: 'text 3'},
    ]

    const renderTracks = tracks.map(track => <TrackItem
        key={track._id}
        track={track}
    />)

    return (
        <MainLayout title='Track List'>
            <div className={s.list}>
                { renderTracks }
            </div>
        </MainLayout>
    )
}

export default index

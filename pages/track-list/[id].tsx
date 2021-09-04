import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AddComment from '../../components/AddComment'
import MainLayout from '../../layouts/MainLayout'
import s from '../../styles/TrackPage.module.scss'


const TrackPage = () => {

    const track = {_id: '1', name: 'name', artist: 'artist', audio: '/Galaxy.mp3', picture: '/1.jpg', comments: [], listens: 0, text: 'text'}

    return (
        <MainLayout title='Track'>
                <div className={s.btn}>
                    <Link href='/track-list'>Back to track list</Link>
                </div>
                <div className={s.body}>
                    <div className={s.main}>
                        <div className={s.pic}>
                            <Image
                                src={track.picture}
                                width={130}
                                height={130}
                            />
                        </div>
                        <div className={s.mainInfo}>
                            <div className={s.artist}>Artist: <b>{ track.artist }</b></div>
                            <div className={s.name}>Name: <b>{ track.name }</b></div>
                            <div className={s.listens}>Listens: <b>{ track.listens }</b></div>
                        </div>
                    </div>
                    <div className={s.secondary}>
                        <h2 className={s.textHead}>Text</h2>
                        <div className={s.text}>{ track.text }</div>
                    </div>
                </div>
                <AddComment/>
        </MainLayout>
    )
}

export default TrackPage

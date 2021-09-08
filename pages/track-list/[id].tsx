import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import AddComment from '../../components/AddComment'
import MainLayout from '../../layouts/MainLayout'
import s from '../../styles/TrackPage.module.scss'
import { ITrack } from '../../types/track'


type TrackPagePropsType = {
    serverTrack: ITrack
}

const TrackPage: FC<TrackPagePropsType> = ({ serverTrack }) => {
    const [ track, setTrack ] = useState<ITrack>(serverTrack)

    const renderComments = track.comments.map(comment => <div key={comment._id} >
        <div>Author: { comment.username }</div>
        <div>Text: { comment.text }</div>
    </div>)

    return (
        <MainLayout title={`Track | ${track.artist} - ${track.name}`}>
                <div className={s.btn}>
                    <Link href='/track-list'>Back to track list</Link>
                </div>
                <div className={s.body}>
                    <div className={s.main}>
                        <div className={s.pic}>
                            <Image
                                objectFit='cover'
                                src={`http://localhost:5000/${track.picture}`}
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
                    <div>
                        <h2>Comments</h2>
                        { renderComments.length ? renderComments : <div>
                            Be the first to comment
                        </div> }
                    </div>
                </div>
                <AddComment
                    track={track}
                    setTrack={setTrack}
                />
        </MainLayout>
    )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const responce = await axios.get(`http://localhost:5000/tracks/${params?.id}`)

    return {
        props: {
            serverTrack: responce.data
        }
    }
}
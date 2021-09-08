import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import AddCoverTrack from '../../components/AddCoverTrack'
import AddTrack from '../../components/AddTrack'
import AddTrackInfo from '../../components/AddTrackInfo'
import StepWrapper from '../../components/StepWrapper'
import useInput from '../../hooks/useInput'
import MainLayout from '../../layouts/MainLayout'
import s from '../../styles/UploadPage.module.scss'

const Upload = () => {
    const router = useRouter()

    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')

    const [ picture, setPicture ] = useState(null as unknown as File) 
    const [ audio, setAudio ] = useState(null as unknown as File)

    useEffect(() => {
        console.log(picture);
        
    }, [picture])

    const [ step, setStep ] = useState(0)

    const prev = () => setStep(prev => prev - 1)
    const next = () => {
        if(step !== 2){
            setStep(prev => prev + 1)
        }else{
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('artist', artist.value)
            formData.append('text', text.value)
            formData.append('picture', picture)
            formData.append('audio', audio)
            axios.post('http://localhost:5000/tracks', formData)
                .then(() => router.push('/track-list'))
                .catch(e => console.log(e))
        }
    }

    return (
        <MainLayout title='upload'>
            <StepWrapper step={step}>
                { step === 0 && <AddTrackInfo
                    name={name}
                    artist={artist}
                    text={text}
                /> }
                { step === 1 && <AddCoverTrack
                    setPicture={setPicture}
                /> }
                { step === 2 && <AddTrack
                    setAudio={setAudio}
                /> }
                <div className={s.btnContainer}>
                    <button onClick={prev} disabled={step === 0} className={s.btn}>Previous</button>
                    <button onClick={next} className={s.btn}>Next</button>
                </div>
            </StepWrapper>
        </MainLayout>
    )
}

export default Upload

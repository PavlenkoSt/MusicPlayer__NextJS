import React, { useState } from 'react'
import AddCoverTrack from '../../components/AddCoverTrack'
import AddTrack from '../../components/AddTrack'
import AddTrackInfo from '../../components/AddTrackInfo'
import StepWrapper from '../../components/StepWrapper'
import MainLayout from '../../layouts/MainLayout'
import s from '../../styles/UploadPage.module.scss'

const Upload = () => {

    const [ step, setStep ] = useState(0)

    const prev = () => setStep(prev => prev - 1)
    const next = () => setStep(prev => prev <= 2 ? prev + 1 : prev )

    return (
        <MainLayout title='upload'>
            <StepWrapper step={step}>
                { step === 0 && <AddTrackInfo/> }
                { step === 1 && <AddCoverTrack/> }
                { step === 2 && <AddTrack/> }
                <div className={s.btnContainer}>
                    <button onClick={prev} disabled={step === 0} className={s.btn}>Previous</button>
                    <button onClick={next} className={s.btn}>Next</button>
                </div>
            </StepWrapper>
        </MainLayout>
    )
}

export default Upload

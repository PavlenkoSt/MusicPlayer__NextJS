import React, { FC } from 'react'
import FileUploader from './FileUploader'


type AddTrackPropsType = {
    setAudio: Function
}

const AddTrack: FC<AddTrackPropsType> = ({ setAudio }) => {
    return (
        <div className='card'>
            <h2 className='header'>Upload track</h2>
            <FileUploader 
                accept='audio/*'
                setFile={setAudio}
            >
                <button>Upload a track</button>
            </FileUploader>
        </div>
    )
}

export default AddTrack

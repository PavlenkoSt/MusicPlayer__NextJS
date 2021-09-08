import React, { FC } from 'react'
import FileUploader from './FileUploader'


type AddCoverTrackPropsType = {
    setPicture: Function
}

const AddCoverTrack: FC<AddCoverTrackPropsType> = ({ setPicture }) => {
    return (
        <div className='card'>
            <h2 className='header'>Upload track cover</h2>
            <FileUploader
                accept='image/*'
                setFile={setPicture}
            >
                <button>Upload a track cover</button>
            </FileUploader>
        </div>
    )
}

export default AddCoverTrack

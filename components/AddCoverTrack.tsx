import React from 'react'
import FileUploader from './FileUploader'


const AddCoverTrack = () => {

    return (
        <div className='card'>
            <h2 className='header'>Upload track cover</h2>
            <FileUploader
                accept='image/*'
                setFile={() => ({})}
            >
                <button>Upload a track cover</button>
            </FileUploader>
        </div>
    )
}

export default AddCoverTrack

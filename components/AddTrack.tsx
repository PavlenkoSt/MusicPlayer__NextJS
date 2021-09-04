import React from 'react'
import FileUploader from './FileUploader'


const AddTrack = () => {
    return (
        <div className='card'>
            <h2 className='header'>Upload track</h2>
            <FileUploader 
                accept='audio/*'
                file=''
                setFile={() => ({})}
            >
                <button>Upload a track</button>
            </FileUploader>
        </div>
    )
}

export default AddTrack

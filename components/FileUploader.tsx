import React, { FC, useRef } from 'react'


interface IFileUploaderPropsType {
    accept: string
    file: any
    setFile: Function
}

const FileUploader:FC<IFileUploaderPropsType> = ({ accept, file, setFile, children }) => {

    const ref = useRef<any>()
    
    return (
        <div onClick={() => ref.current.click()} >
            <input
                type='file'
                accept={accept}
                ref={ref}
                style={{display: 'none'}}
            />
            { children }
        </div>
    )
}

export default FileUploader

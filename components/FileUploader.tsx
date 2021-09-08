import React, { ChangeEvent, FC, useRef } from 'react'

interface IFileUploaderPropsType {
    accept: string
    setFile: Function
}

const FileUploader:FC<IFileUploaderPropsType> = ({ accept, setFile, children }) => {

    const ref = useRef<any>()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.files && e.target.files[0]){
            setFile(e.target.files[0]);
        }
    }
    
    return (
        <div onClick={() => ref.current.click()} >
            <input
                type='file'
                accept={accept}
                ref={ref}
                style={{display: 'none'}}
                onChange={onChange}
            />
            { children }
        </div>
    )
}

export default FileUploader

import { ChangeEvent, useState } from 'react'

const useInput = (initialValue: any) => {
    const [ value, setValue ] = useState(initialValue)
    const onChange = (e: any) => { setValue(e.target.value) }

    return { value, onChange }
}

export type UseInputType = { 
    value: any
    onChange: (e: any) => void    
}

export default useInput
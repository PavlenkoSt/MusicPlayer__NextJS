import React, { FC } from 'react'
import Image from 'next/image'
import s from '../styles/StepWrapper.module.scss';

interface IStepProps {
    step: number
    cur: number
}

const Step: FC<IStepProps> = ({ step, cur }) => {
    return (
        <>
            { 
                step >= cur 
                ? <Image
                    src='/check.svg'
                    width={50}
                    height={50}
                /> 
                : <div className={s.step}>{ cur }</div> 
            }   
        </>
    )
}

export default Step

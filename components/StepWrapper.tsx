import React, { FC } from 'react';
import s from '../styles/StepWrapper.module.scss';
import Image from 'next/image';
import Step from './Step';


interface StepWrapperPropsType {
    step: number;
}

const StepWrapper: FC<StepWrapperPropsType> = ({ step, children }) => {
    return (
        <>
            <div className={s.stepContainer}>
                <Step step={step} cur={1} />
                <Step step={step} cur={2} />
                <Step step={step} cur={3} />
            </div>
            <div className={s.content}>
                { children }
            </div>
        </>
    )
}

export default StepWrapper;

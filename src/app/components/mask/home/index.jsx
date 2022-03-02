import React from 'react';
import style from './index.scss'

const Home = ({ step }) => {
    return (
        <div className={style.home}>
            {step === 0 && '神秘的面具(MASK)'}
            {step === 5 && 'THANKS'}
        </div>
    )
}

export default Home
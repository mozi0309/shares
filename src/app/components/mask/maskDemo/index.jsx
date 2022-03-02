import React from 'react';

import style from './index.scss'

const MaskDemo = ({ step }) => {
    return (
        <div className={style.maskDemo}>
            <div className={style.demos}>
                <div className={style.still}></div>
                <div className={style.active}></div>
            </div>
            {step === 2 && <div className={style.desc}>
                <div className={style.stillDesc}></div>
                <div className={style.activeDesc}></div>
            </div>}
        </div>
    )
}

export default MaskDemo

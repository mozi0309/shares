import React from 'react';

import style from './index.scss'

// 生成长度为30的数组
const danmakuArr = () => Array.from({ length: 30 }, (o, i) => i)

const Danmaku = ({ step }) => {
    return (
        <div className={style.danmaku}>
            <div className={style.danmakuDemo}>
                <div className={style.still}>
                    <div className={style.danmakusContainer}>
                        {danmakuArr().map((i) => (
                            <span key={i} className={style.danmakuSpan}>太胖会被杀掉喔</span>
                        ))}
                    </div>
                </div>
                <div className={style.active}>
                    <div className={style.danmakusContainer}>
                        {danmakuArr().map((i) => (
                            <span key={i} className={style.danmakuSpan}>6666666666</span>
                        ))}
                    </div>
                </div>
            </div>
            {step === 4 && <div className={style.danmakuDesc}></div>}
        </div>
    )
}

export default Danmaku

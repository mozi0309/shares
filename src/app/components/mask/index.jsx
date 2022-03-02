import React from 'react';
import { ForwardOutlined, BackwardOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import style from './index.scss'

import Home from './home'
import MaskDemo from './maskDemo'
import Danmaku from './danmaku'

class Mask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 0, // 0为标题，1,2为mask图片demo及解释，3为弹幕demo，4为弹幕代码, 5为结束
            showDesc: false
        }
    }

    next() {
        const { step } = this.state
        let ss = step
        ss++
        if (ss > 5) {
            return
        }
        this.setState({
            step: ss
        })
    }

    back() {
        const { step } = this.state
        let ss = step
        ss--
        if (ss < 0) {
            return
        }
        this.setState({
            step: ss
        })
    }

    render() {
        const { step, showDesc } = this.state
        return (
            <div style={{ height: 'calc(100vh - 60px)' }}>
                {(step === 0 || step === 5) && <Home step={step} />}
                {(step === 1 || step === 2) && <MaskDemo step={step} />}
                {(step === 3 || step === 4) && <Danmaku step={step} />}
                {step !== 5 && <Button
                    ghost
                    onClick={() => {
                        this.next()
                    }}
                    className={style.nextBtn}
                    style={{ border: 'none' }}
                    icon={<ForwardOutlined style={{ color: '#000', fontSize: '50px' }} />}
                ></Button>}
                {step !== 0 && <Button
                    ghost
                    onClick={() => {
                        this.back()
                    }}
                    className={style.backBtn}
                    style={{ border: 'none' }}
                    icon={<BackwardOutlined style={{ color: '#000', fontSize: '50px' }} />}
                ></Button>}
            </div>
        )
    }
}

export default Mask
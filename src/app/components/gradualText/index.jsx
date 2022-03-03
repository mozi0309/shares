import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.scss'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const GradualText = () => {
    const textArr = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipisicing','elit.','Mollitia','nostrum', 'placeat','consequatur','deserunt','velit','ducimus','possimus','commodi','temporibus','debitis','quam.']
    return (
       <div className={style.gradualText}>
            <div className={style.button}>Button</div>
            <p>
                {textArr.map((i, index) => (
                    <span data-text={i} className={style.gradualTextSpan} key={index}>{i}</span>
                ))}
                {/* <span data-text="Lorem">Lorem</span>
                <span data-text="ipsum">ipsum</span>
                <span data-text="dolor">dolor</span>
                <span data-text="sit">sit</span>
                <span data-text="amet">amet</span>
                <span data-text="consectetur">consectetur</span>
                <span data-text="adipisicing">adipisicing</span> 
                <span data-text="elit.">elit.</span>
                <span data-text="Mollitia">Mollitia</span>
                <span data-text="nostrum">nostrum</span>
                <span data-text="placeat">placeat</span>
                <span data-text="consequatur">consequatur</span>
                <span data-text="deserunt">deserunt</span>
                <span data-text="velit">velit</span>
                <span data-text="ducimus">ducimus</span>
                <span data-text="possimus">possimus</span>
                <span data-text="commodi">commodi</span>
                <span data-text="temporibus">temporibus</span>
                <span data-text="debitis">debitis</span>
                <span data-text="quam.">quam.</span> */}
            </p>
        </div>
    )
}

export default withRouter(GradualText)
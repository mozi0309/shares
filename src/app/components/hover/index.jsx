import React from 'react';
import { withRouter } from 'react-router-dom'
import style from './index.scss'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Hover = ({ history }) => {
    return (
        <div className={style.hover_container}>
            <h1 className={style.hover_title}>Windows 10 Button & Grid Hover Effect</h1>
            <div className={style.hover_btn_content}>
                {[1,2,3,4,5,6].map(() => (
                    <div
                        className={style.hover_btn}
                        onMouseLeave={(e) => {
                            e.target.style.background = "black";
                            e.target.style.borderImage = null;
                        }}
                        onMouseMove={(e) => {
                            const rect = e.target.getBoundingClientRect();
                            console.log(e.clientX,rect);
                            const x = e.clientX - rect.left; 
                            const y = e.clientY - rect.top; 
                            e.target.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
                            e.target.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
                            
                        }}
                    >This is a windows hoverable item inside windows grid</div>
                ))}
            </div>
        </div>
    )
    
    
}
export default withRouter(Hover)
import React from 'react';
import { withRouter } from 'react-router-dom'
import style from './index.scss'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const cssMenu = (
    <Menu>
        <Menu.Item>
            <a onClick={() => {
                props.history.push('/mask')
            }}>
                Mask
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Coupon
        </a>
        </Menu.Item>
    </Menu>
);

const Header = ({ history }) => {
    return (
        <div className={style.header}>
            <div className={style.header_container}>
                <div className={style.peach} onClick={() => { history.push('/') }} >桃ちゃん🍑</div>
                <Dropdown
                    overlay={() => (
                        <Menu>
                            <Menu.Item>
                                <a onClick={() => {
                                    history.push('/mask')
                                }}>
                                    Mask
                        </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a onClick={() => {
                                    history.push('/coupon')
                                }}>
                                    Coupon
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a onClick={() => {
                                    history.push('/hover')
                                }}>
                                    Hover
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a onClick={() => {
                                    history.push('/threeD')
                                }}>
                                    threeD
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                                <a onClick={() => {
                                    history.push('/gradualText')
                                }}>
                                    gradualText
                                </a>
                            </Menu.Item>
                        </Menu>
                    )}
                >
                    <a
                        className="ant-dropdown-link"
                        onClick={e => e.preventDefault()}
                        style={{ margin: '0 20px' }}
                    >
                        CSS <DownOutlined />
                    </a>
                </Dropdown>
                <Dropdown
                    overlay={() => (
                        <Menu>
                            <Menu.Item>
                                <a onClick={() => {
                                    // history.push('/mask')
                                }}>
                                    npm
                                </a>
                            </Menu.Item>
                        </Menu>
                    )}
                >
                    <a
                        className="ant-dropdown-link"
                        onClick={e => e.preventDefault()}
                        style={{ margin: '0 20px' }}
                    >
                        JS <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

export default withRouter(Header)
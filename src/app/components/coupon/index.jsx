import React, { useState } from 'react';
import style from './index.scss'
import { Button } from 'antd'

const Coupon = () => {
    let [page, setPage] = useState(1)
    return (
        <div className={style.coupon}>
            {page === 1 &&
                <>
                    <p>实现这些👇优惠券的几种方式</p>
                    <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d740ae184484a968bbb00ed6f5ef21b~tplv-k3u1fbpfcp-zoom-1.image" alt="" />
                    <Button
                        onClick={() => { setPage(2) }}
                    >走起</Button>
                </>
            }
            {page === 2 &&
                <>
                    <div className={style.coupon_content}>
                        <div className={style.first}>
                            <div className={style.first_coupon}>
                            </div>
                        </div>
                        <div className={style.sec}>
                            <div className={style.sec_normal}>
                                <div className={style.sec_coupon}> </div>
                            </div>
                            <div className={style.sec_update}>
                                <div className={style.sec_coupon}> </div>
                            </div>
                        </div>
                        <div className={style.trd}>
                            <div className={style.trd_normal}>
                                <div className={style.trd_coupon}> </div>
                            </div>
                            <div className={style.trd_update}>
                                <div className={style.trd_coupon}> </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.core_code}>
                        <img src="https://assets.2dfire.com/frontend/16015cf8048af9ea53d85d83f7bb03bd.png" alt="" />
                        <img src="https://assets.2dfire.com/frontend/693236efa23960a392e6faf2b5918f8b.png" alt="" />
                    </div>
                </>
            }
        </div>
    )
}

export default Coupon
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import Mask from './components/mask/index'
import Header from './components/header'
import WelCome from './components/welcome'
import Coupon from './components/coupon'
import Hover from './components/hover'
import threeDText from './components/3dText'
import gradualText from './components/gradualText'
import threeD from './components/threeD'

class App extends React.Component {

    render() {
        return (
            <div
                style={{
                    backgroundColor: 'rgb(242,242,242)'
                }}
            >
                <Header />
                <Switch>
                    <Route path='/' exact component={WelCome} />
                    <Route path='/mask' exact component={Mask} />
                    <Route path='/coupon' exact component={Coupon} />
                    <Route path='/hover' exact component={Hover} />
                    <Route path='/3dText' exact component={threeDText} />
                    <Route path='/gradualText' exact component={gradualText} />
                    <Route path='/threeD' exact component={threeD} />
                </Switch>
            </div>
        )
    }
}

export default hot(App)
import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route } from 'react-router-dom'
import Mask from './components/mask/index'
import Header from './components/header'
import WelCome from './components/welcome'
import Coupon from './components/coupon'
import Hover from './components/hover'
import threeDText from './components/3dText'
import GradualText from './components/gradualText'
import ThreeD from './components/threeD'
import CanvasList from './components/canvasList'

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
                    <Route path='/' exact component={() => <WelCome/>} />
                    <Route path='/mask' exact component={() => <Mask/>} />
                    <Route path='/coupon' exact component={()=> <Coupon/>} />
                    <Route path='/hover' exact component={() => <Hover/>} />
                    <Route path='/3dText' exact component={() => <threeDText/>} />
                    <Route path='/gradualText' exact component={() => <GradualText/>} />
                    <Route path='/canvas' exact component={() => <CanvasList/>} />
                    {/* <Route path='/threeD' exact component={ThreeD} /> */}
                </Switch>
            </div>
        )
    }
}

export default hot(App)
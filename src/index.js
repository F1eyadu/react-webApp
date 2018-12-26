import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Tabbar from './components/tabbar/index'
import './app.scss'
import './assets/js/rem'
import '../src/assets/css/reset.css'
import Index from './pages/Home/index'
import Order from './pages/Order/index'
import My from './pages/My/index'
import ClassIfy from './pages/classify/index'
import Evaluation from './pages/evaluation/index'
import Sale from './pages/sale/index'
import { Route, BrowserRouter } from 'react-router-dom'
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Sale/>
                    {/* <div>
                        <Route path="/" exact component={Index}></Route>
                        <Route path="/home" exact component={Index}></Route>
                        <Route path="/order" exact component={Order}></Route>
                        <Route path="/my" exact component={My}></Route>
                        <Tabbar />
                    </div> */}
                </BrowserRouter>
            </Provider>
        )
    }
}
render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept()
}
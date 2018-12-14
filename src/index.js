import React from 'react'
import {render} from 'react-dom'
import {Provider } from 'react-redux'
import store from './store/index'
class App extends React.Component{
    render(){
        return(
           <Provider store={store}>
                <div>21321</div>
           </Provider>
        )
    }
}
render(<App/>, document.getElementById('root'))
if(module.hot){
    module.hot.accept()
}
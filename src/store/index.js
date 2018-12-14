import {createStore, applyMiddleware} from 'redux'
import thunk from 'react-thunk'
import reducer from './reducer'
const store = createStore(reducer, applyMiddleware(thunk))
export default store
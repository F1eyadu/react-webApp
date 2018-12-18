import { fromJS} from 'immutable'
import { GET_ORDER_LIST} from './actionTypes'
const defaultState = fromJS({
    list:[]
})

export default (state = defaultState, action) =>  {
    switch(action.type){
        case GET_ORDER_LIST:
            return state.set('list', state.get('list').concat(fromJS(action.list)))
        default:
            return state
    }
}
import { fromJS} from 'immutable'
import { SET_HOME_DATA, GET_MORE_DATA} from './actionTypes'
const defaultState = fromJS({
    cateGory: [],
    lists:[]
})

export default (state = defaultState, action) => {
    switch (action.type){
        case SET_HOME_DATA:
            return state.merge({
                cateGory: fromJS(action.cateGory),
                lists: fromJS(action.lists)
            })
        case GET_MORE_DATA:
            return state.set('lists', state.get('lists').concat(action.lists))
        default:
            return state
    }
}
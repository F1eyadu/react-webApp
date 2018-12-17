import { fromJS} from 'immutable'
import { SET_HOME_DATA} from './actionTypes'
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
        default:
            return state
    }
}
import { fromJS} from 'immutable'
import {IS_LOAD} from './actionTypes'
const defaultStore = fromJS({
    isLoad: false
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case IS_LOAD:
            return state.set('isLoad', action.flag)
        default:
            return state
    }
}
import { fromJS} from 'immutable'
import {CHANGE_TYPE} from './actionTypes'
const defaultStore = fromJS({
    tabs: [{
        name: '首页',
        key: 'home'
    },
    {
        name: '订单',
        key: 'order'
    },
    {
        name: '我的',
        key: 'my'
    }],
    selectKey: 'home'
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case CHANGE_TYPE:
            return state.set('selectKey', action.selectKey)
        default:
            return state
    }
}
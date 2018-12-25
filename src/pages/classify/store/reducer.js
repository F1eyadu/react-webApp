import { fromJS, toJS} from 'immutable'
import{ CHANGE_TAB, GET_FILTER_DATA, CHANGE_FILTER} from './actionTypes'
let tabs = {}
tabs['cate'] = {
    key: 'cate',
    text: '全部分类',
    obj: {}
}
tabs['type'] = {
    key: 'type',
    text: '综合排序',
    obj: {}
}
tabs['filter'] = {
    key: 'filter',
    text: '筛选',
    obj: {}
}
const defaultState = fromJS({
    tabs: tabs,
    activeKey: 'cate',
    filterData:{},
    closePanel: true
})

export default (state = defaultState, action) => {
    switch(action.type){
        case CHANGE_TAB:
            return state.merge({
                activeKey: action.key,
                closePanel: action.closePanel
            })
        case GET_FILTER_DATA:
            return state.set('filterData', fromJS(action.data))
        case CHANGE_FILTER:
            let data = state.get('tabs').toJS()
            const item = action.item.toJS()
            data[action.key] = {
                key: action.key,
                text: item.name,
                obj: item
            }
        return state.merge({
            tabs: fromJS(data),
            closePanel: true
        })
        default:
            return state
    }
}
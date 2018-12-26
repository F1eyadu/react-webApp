import { fromJS, toJS } from 'immutable'
import { CHANGE_TAB, SET_FOOD, CHENG_INDEX, ADD_SELECT_ITEM, MINE_SELECT_ITEM, SET_SHOW_CONTENT } from './actionTypes'
const defaultState = fromJS({
    tabs: [
        {
            name: '点菜',
            key: 'menu'
        },
        {
            name: '评价',
            key: 'comment'
        },
        {
            name: '商家',
            key: 'restanurant'
        }
    ],
    activeKey: 'menu',
    listData: [],
    shipping_fee:0,
    currentLeftIndex: 0,
    showChooseContent: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return state.set('activeKey', action.key)
        case SET_FOOD:
            return state.merge({
                listData: fromJS(action.result.food_spu_tags),
                shipping_fee: action.result.poi_info?action.result.poi_info.shipping_fee:0
            })
        case CHENG_INDEX:
            return state.set('currentLeftIndex', action.index)
        case ADD_SELECT_ITEM:
            let currentLeftIndex = state.get('currentLeftIndex')
            let listData = state.get('listData').toJS()
            let currentItem = listData[currentLeftIndex]
            currentItem.spus[action.index].chooseCount++
            let _listData = JSON.parse(JSON.stringify(listData))
            return state.set('listData', fromJS(_listData))
        case MINE_SELECT_ITEM:
            let currentLeftIndexs = state.get('currentLeftIndex')
            let listDatas = state.get('listData').toJS()
            let currentItems = listDatas[currentLeftIndexs]
            currentItems.spus[action.index].chooseCount--
            let _listDatas = JSON.parse(JSON.stringify(listDatas))
            return state.set('listData', fromJS(_listDatas))
        case SET_SHOW_CONTENT:
            return state.set('showChooseContent', !state.get('showChooseContent'))
        default:
            return state
    }
}
import { fromJS, toJS } from 'immutable'
import { CHANGE_TAB, SET_FOOD, CHENG_INDEX, ADD_SELECT_ITEM, MINE_SELECT_ITEM, SET_SHOW_CONTENT, CLEAR_CAR, GET_COMMENT_DATA, GET_RESTANURANT_INFO } from './actionTypes'
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
    shipping_fee: 0,
    currentLeftIndex: 0,
    showChooseContent: false,
    comments:{},
    commentList: [],
    restanurant: {}
})

const dealWithSelectItem = (state, action, type) => {
    let currentLeftIndex = state.get('currentLeftIndex')
    let listData = state.get('listData').toJS()
    let currentItem = listData[action._index.outIndex || currentLeftIndex]
    let _index = typeof (action._index) == "number" ? action._index : action._index.index
    if(type === ADD_SELECT_ITEM) currentItem.spus[_index].chooseCount++
    else currentItem.spus[_index].chooseCount --
    let _listData = JSON.parse(JSON.stringify(listData))
    return _listData
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return state.set('activeKey', action.key)
        case SET_FOOD:
            return state.merge({
                listData: fromJS(action.result.food_spu_tags),
                shipping_fee: action.result.poi_info ? action.result.poi_info.shipping_fee : 0
            })
        case CHENG_INDEX:
            return state.set('currentLeftIndex', action.index)
        case ADD_SELECT_ITEM:
            return state.set('listData', fromJS(dealWithSelectItem(state, action, ADD_SELECT_ITEM)))
        case MINE_SELECT_ITEM:
            return state.set('listData', fromJS(dealWithSelectItem(state, action, MINE_SELECT_ITEM)))
        case SET_SHOW_CONTENT:
            return state.set('showChooseContent', !state.get('showChooseContent'))
        case CLEAR_CAR:
        let listData = state.get('listData').toJS()
        listData.map((item)=>{
            let lists = item.spus
            lists.map((list)=>{
                list.chooseCount = 0
            })
        })
        return state.merge({
            listData: fromJS(listData),
            showChooseContent: false
        })
        case GET_COMMENT_DATA:
            return state.merge({
                comments: fromJS(action.result),
                commentList:state.get('commentList').concat(fromJS(action.result.comments))
            })
        case GET_RESTANURANT_INFO:
            return state.set('restanurant', fromJS(action.result))
        default:
            return state
    }
}
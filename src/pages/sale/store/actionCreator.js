import {CHANGE_TAB, SET_FOOD, CHENG_INDEX, ADD_SELECT_ITEM, MINE_SELECT_ITEM, SET_SHOW_CONTENT} from './actionTypes'
import axios from 'axios'
export const changeTab = (key) =>({
    type: CHANGE_TAB,
    key
})

const setFood = (result) => ({
    type: SET_FOOD,
    result
})
export const getFood = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/food')
        .then((res) => {
            if(res.status === 200){
                let result = res.data
                dispatch(setFood(result))
            }
        })
    }
}

export const changeIndex = (index) =>({
    type: CHENG_INDEX,
    index
})


export const addSelectItem = (index) => ({
    type: ADD_SELECT_ITEM,
    index
})
export const mineSelectItem = (index) => ({
    type: MINE_SELECT_ITEM,
    index
})

export const setShowContent = () => ({
    type: SET_SHOW_CONTENT
})
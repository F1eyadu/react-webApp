import {CHANGE_TAB, SET_FOOD, CHENG_INDEX, ADD_SELECT_ITEM, MINE_SELECT_ITEM, SET_SHOW_CONTENT, CLEAR_CAR, GET_COMMENT_DATA, GET_RESTANURANT_INFO} from './actionTypes'
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


export const addSelectItem = (_index) => ({
    type: ADD_SELECT_ITEM,
    _index
})
export const mineSelectItem = (_index) => ({
    type: MINE_SELECT_ITEM,
    _index
})

export const setShowContent = () => ({
    type: SET_SHOW_CONTENT
})

export const clearCar = ()=>({
    type: CLEAR_CAR
})

const commentData = (result)=>({
    type: GET_COMMENT_DATA,
    result
})

export const getCommentLists = () => {
    return (dispatch) =>{
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/comment')
        .then((res) =>{
            if(res.status === 200){
                dispatch(commentData(res.data))
            }
        })
    }
}

const restanurantinfo = (result) =>({
    type: GET_RESTANURANT_INFO,
    result
})

export const getRestanurantinfo = () =>{
    return (dispatch) =>{
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/restanurant')
        .then((res) =>{
            if(res.status === 200){
                dispatch(restanurantinfo(res.data))
            }
        })
    }
}
import { SET_HOME_DATA, GET_MORE_DATA} from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'


const setHomeData = (result)=>({
    type: SET_HOME_DATA,
    cateGory: result.primary_filter,
    lists: result.poilist
})

export const getHomeData = () =>{
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/food/home')
        .then((res) => {
           if(res.status === 200){
               let result = res.data
               dispatch(setHomeData(result))
           }
        })
    }
}


const setMoreData = (result, page) => ({
    type: GET_MORE_DATA,
    lists: fromJS(result.poilist),
    page
})
export const getMoreData = (page) =>{
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/homeList?page='+ page)
        .then((res) => {
           if(res.status === 200){
               let result = res.data
               dispatch(setMoreData(result, page))
           }
        })
    }
}
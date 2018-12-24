import{ CHANGE_TAB, GET_FILTER_DATA, CHANGE_FILTER} from './actionTypes'
import axios from 'axios'
export const changeTable = (key, closePanel) =>({
    type: CHANGE_TAB,
    key,
    closePanel
})

const filterData = (data) => ({
    type: GET_FILTER_DATA,
    data
})

export const getFilterDate = () => {
    return (dispatch) =>{
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/filter')
        .then((res) =>{
            if(res.status === 200){
                dispatch(filterData(res.data))
            }
        })
    }
}

export const changeFilter = (item, key) =>({
    type: CHANGE_FILTER,
    item,
    key
})
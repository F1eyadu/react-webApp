import { GET_ORDER_LIST} from './actionTypes'
import axios from 'axios'

const getOrderList = (result) =>({
    type: GET_ORDER_LIST,
    list: result.digestlist
})
export const getList = () =>{
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5c00d11fb5ca4f6a533ac6dd/bicycleApi/orders')
        .then((res) => {
            if(res.status === 200){
                let result = res.data
                dispatch(getOrderList(result))
            }
        })
    }
}
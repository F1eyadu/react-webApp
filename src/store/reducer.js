import {combineReducers} from 'redux-immutable'
import TabbarReducer from '../components/tabbar/store/reducer'
import HomeReducer from '../pages/Home/store/reducer'
import OrderReducer from '../pages/Order/store/reducer'
import CateReducer from '../pages/classify/store/reducer'
import SaleReducer from '../pages/sale/store/reducer'
import ScrollReducer from '../components/scrollView/store/reducer'
export default combineReducers({
    tabbar: TabbarReducer,
    home: HomeReducer,
    order: OrderReducer,
    cate: CateReducer,
    sale: SaleReducer,
    scroll: ScrollReducer
})
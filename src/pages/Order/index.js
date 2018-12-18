import React from 'react'
import './index.scss'
import OrderItem from './components/orderItem'
import ScrollView from '@/components/scrollView'
import { connect } from 'react-redux'
import { getList } from './store/actionCreator'
class Orders extends React.Component {
    constructor(props) {
        super(props)
        this.props.getOrderList(this.page)
        this.page = 0
        this.state = {
            isend: false
        }
    }
    loadPage(){
        this.page++
        if (this.page > 3) {
            this.setState({
                isend: true
            })
        } else {
            this.props.getOrderList(this.page)
        }
    }
    renderItem() {
        let list = this.props.orderList
        return list.map((item, index) => {
            return <OrderItem key={index} listItem={item} />
        })
    }
    render() {
        return (
            <div className="order">
                <div className="header">订单</div>
                <div className="order-list">
                    <ScrollView dis="order" loadCallback={this.loadPage.bind(this)} isend={this.state.isend}>
                        {
                            this.renderItem()
                        }
                    </ScrollView>
                </div>
            </div>
        )
    }
}
const mapState = (state) => ({
    orderList: state.getIn(['order', 'list'])
})
const mapDispatch = (dispatch) => ({
    getOrderList() {
        dispatch(getList())
    }
})
export default connect(mapState, mapDispatch)(Orders)
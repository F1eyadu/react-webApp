import React from 'react'
import '../../index.scss'
import { connect} from 'react-redux'
import { setShowContent} from '../../store/actionCreator'
class ShopBar extends React.Component{
    getTotalPrice(){
        const { listData} = this.props
        let totalPrice = 0
        let dotNum = 0
        let chooseList = []
        listData.map((item, i)=>{
            let lists = item.get('spus')
            lists.map((list, j) =>{
                let chooseCount = list.get('chooseCount')
                if(chooseCount > 0){
                    dotNum += chooseCount
                    list.set('_index', j)
                    list.set('_outIndex', i)
                    chooseList.push(list)
                    totalPrice +=chooseCount * list.get('min_price')
                }
            })
        })
        return{
            totalPrice,
            dotNum,
            chooseList
        }
    }
    renderChooseItem(chooseList){
        let list = chooseList || []
        return list.map((item, index)=> {
            return (
                <div key={index} className="choose-item">
                    <div className="item-name">{item.get('name')}</div>
                    <div className="price">{item.get('min_price') * item.get('chooseCount')}</div>
                    <div className="select-content">
                        <div onClick={()=> this.props.minusSelectItem(item)}  className="minus"></div>
                        <div className="count">{item.get('chooseCount')}</div>
                        <div onClick={()=> this.props.addSelectItem(item)} className="plus"></div>
                    </div>
                </div>
            )
        })
    }
    render(){
        const { shipping_fee} = this.props
        let {totalPrice, dotNum, chooseList} = this.getTotalPrice()
        return(
            <div className="shop-bar">
                {this.props.showChooseContent?
                <div className="choose-content">
                    <div className="content-top">
                        <div className="clear-car">清空购物车</div>
                    </div>
                    {this.renderChooseItem(chooseList)}
                </div>:null}
                <div className="bottom-content">
                    <div className="shop-icon" onClick ={()=> this.props.openChooseContent()}>
                        {dotNum > 0?<div className="dot-num">{dotNum}</div>:null}
                    </div>
                    <div className="price-content">
                        <p className="total-price">￥{totalPrice}</p>
                        <p className="other-price">另需配送 ￥{shipping_fee}</p>
                    </div>
                    <div className="submit-btn">去结算</div>
                </div>
            </div>
        )
    }
}
const mapState = (state) =>({
    shipping_fee: state.getIn(['sale', 'shipping_fee']),
    listData: state.getIn(['sale', 'listData']),
    showChooseContent:state.getIn(['sale', 'showChooseContent'])
})

const mapDispatch = (dispatch) =>({
    openChooseContent(){
        dispatch(setShowContent())
    },
    minusSelectItem(item){

    },  
    addSelectItem(item){
        console.log(item.isMap())
        // console.log(item.get('_index'))
        // console.log(item.get('_outIndex'))
    }
})

export default connect(mapState, mapDispatch)(ShopBar)
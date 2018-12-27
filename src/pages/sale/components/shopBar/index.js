import React from 'react'
import '../../index.scss'
import { connect} from 'react-redux'
import { toJS} from 'immutable'
import { setShowContent, addSelectItem, mineSelectItem, clearCar} from '../../store/actionCreator'
class ShopBar extends React.Component{
    getTotalPrice(){
        const { listData} = this.props
        let totalPrice = 0
        let dotNum = 0
        let chooseList = []
        listData.map((item, i)=>{
            let lists = item.spus
            lists.map((list, j) =>{
                let chooseCount = list.chooseCount
                if(chooseCount > 0){
                    dotNum += chooseCount
                    list._index= j
                    list._outIndex= i
                    chooseList.push(list)
                    totalPrice +=chooseCount * list.min_price
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
        let lists = chooseList || []
        return lists.map((item, index)=> {
            return (
                <div key={index} className="choose-item">
                    <div className="item-name">{item.name}</div>
                    <div className="price">{item.min_price * item.chooseCount}</div>
                    <div className="select-content">
                        <div onClick={()=> this.props.minus(item)}  className="minus"></div>
                        <div className="count">{item.chooseCount}</div>
                        <div onClick={()=> this.props.add(item)} className="plus"></div>
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
                        <div className="clear-car" onClick={()=> this.props.clearCar()}>清空购物车</div>
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
    listData: state.getIn(['sale', 'listData']).toJS(),
    showChooseContent:state.getIn(['sale', 'showChooseContent'])
})

const mapDispatch = (dispatch) =>({
    openChooseContent(){
        dispatch(setShowContent())
    },
    minus(item){
        dispatch(mineSelectItem({
            index: item._index,
            outIndex: item._outIndex
        }))
    },  
    add(item){
        dispatch(addSelectItem({
            index: item._index,
            outIndex: item._outIndex
        }))
    },
    clearCar(){
        dispatch(clearCar())
    }
})

export default connect(mapState, mapDispatch)(ShopBar)
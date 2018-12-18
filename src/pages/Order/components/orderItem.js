import React from 'react'
import './../index.scss'
class OrderItem extends React.Component {
    renderProduct(listItem) {
        let list = listItem.get('product_list')
        return list.map((item, index) => {
            return <div className="product-item" key={index}>{item.get('product_name')}<div className="p-count">x{item.get('product_count')}</div></div>
        })
    }
    renderComment(listItem) {
        let evaluation = !listItem.get('is_comment')
        if(evaluation){
            return (
                <div className="evaluation clearfix">
                    <div className="evaluation-btn">评价</div>
                </div>
            )
        }
    }
    render() {
        let { listItem } = this.props
        return (
            <div className="order-item">
                <div className="order-item-inner">
                    <img className="item-img" src={listItem.get('poi_pic')} />
                    <div className="item-right">
                        <div className="item-top">
                            <p className="order-name one-line">{listItem.get('poi_name')}</p>
                            <div className="arraw"></div>
                            <div className="order-state">{listItem.get('status_description')}</div>
                        </div>
                        <div className="order-bottom">
                            {this.renderProduct(listItem)}
                        </div>
                        <div className="product-item"><span>...</span><div className="p-total-count">总计{listItem.get('product_count')}个菜,实付<span className="total-price">￥{listItem.get('total')}</span></div></div>
                    </div>
                </div>
                {this.renderComment(listItem)}
            </div>
        )
    }
}

export default OrderItem
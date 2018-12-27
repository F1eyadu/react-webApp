import React from 'react'
import './index.scss'
import Star from '../star/index'
export default class ListItem extends React.Component {
    // 渲染是否是新到或品牌
    renderBrand(listItem) {
        if (listItem.get('brand_type')) {
            return <div className="brand brand-pin">品牌</div>
        } else {
            return <div className="brand brand-xin">新到</div>
        }
    }
    renderMounthNum(listItem) {
        let num = listItem.get('month_sale_num')
        if (num > 999) {
            return '999+'
        } else {
            return num
        }
    }
    renderMeituanFlag(listItem) {
        let type = listItem.get('delivery_type')
        if (type) {
            return <div className="item-meituan-flag">美团专送</div>
        } else {
            return null
        }
    }
    renderOthers(listItem) {
        let array = listItem.get('discounts2')
        return array.map((item, index) => {
            return (
                <div className="other-info" key={index}>
                    <img src={item.get('icon_url')} className="other-tag" />
                    <div className="other-content">{item.get('info')}</div>
                </div>
            )
        })

    }
    render() {
        const listItem = this.props.itemData
        return (
            <div className="item-content scale-1px">
                <img className="item-img" src={listItem.get('pic_url')} />
                {this.renderBrand(listItem)}
                <div className="item-info-content">
                    <p className="item-title">{listItem.get('name')}</p>
                    <div className="item-desc clearfix">
                        <Star score={listItem.get('wm_poi_score')}/>
                        {/* <div className="item-score">{this.renderScore(listItem)}</div> */}
                        <div className="item-count">月售{this.renderMounthNum(listItem)}</div>
                        <div className="item-distance">&nbsp;{listItem.get('distance')}</div>
                        <div className="item-time">{listItem.get('mt_delivery_time')}&nbsp;</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">{listItem.get('min_price_tip')}</div>
                        {this.renderMeituanFlag(listItem)}
                    </div>
                    <div className="item-others">
                        {this.renderOthers(listItem)}
                    </div>
                </div>
            </div>
        )
    }
}
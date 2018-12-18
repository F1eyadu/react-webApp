import React from 'react'
import './index.scss'
export default class ListItem extends React.Component {
    // 渲染是否是新到或品牌
    renderBrand(listItem) {
        if (listItem.get('brand_type')) {
            return <div className="brand brand-pin">品牌</div>
        } else {
            return <div className="brand brand-xin">新到</div>
        }
    }
    // 渲染评分
    renderScore(listItem) {
        let wm_poi_score = listItem.get('wm_poi_score') || ''
        let score = wm_poi_score.toString()
        let scroeArray = score.split('.')
        let fullStar = parseInt(scroeArray[0])
        let halfStar = parseInt(scroeArray[1]) >= 5 ? 1 : 0
        let nullstar = 5 - fullStar - halfStar
        let starJsx = []
        for (let i = 0; i < fullStar; i++) {
            starJsx.push(<div key={i + 'full'} className="star fullstar"></div>)
        }
        if (halfStar) {
            for (let m = 0; m < halfStar; m++) {
                starJsx.push(<div key={m + 'half'} className="star halfstar"></div>)
            }
        }
        if (nullstar) {
            for (let k = 0; k < nullstar; k++) {
                starJsx.push(<div key={k + 'null'} className="star nullstar"></div>)
            }
        }
        return starJsx
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
                        <div className="item-score">{this.renderScore(listItem)}</div>
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
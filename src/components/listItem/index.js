import React from 'react'
import './index.scss'
export default class ListItem extends React.Component{
    // 渲染是否是新到或品牌
    renderBrand(listItem){
        if(listItem.get('brand_type')){
            return <div className="brand brand-pin">品牌</div>
        }else{
            return <div className="brand brand-xin">新到</div>
        }
    }
    // 渲染评分
    renderScore(listItem){

    }
    render(){
        const listItem = this.props.itemData     
        return (
            <div className="item-content scale-1px">
                <img className="item-img" src={listItem.get('pic_url')}/>
                {this.renderBrand(listItem)}
                <div className="item-info-content">
                    <p className="item-title">{listItem.get('name')}</p>
                    <div className="item-desc clearfix">
                        <div className="item-score">{this.renderScore(listItem)}</div>
                        <div className="item-count">xxx</div>  
                        <div className="item-distance">xxx</div>
                        <div className="item-time">xxx</div>
                    </div>
                    <div className="item-price">
                        <div className="item-pre-price">111</div>
                    </div>
                    <div className="item-others">
                        <div className="other-info">
                            <img src="" className="pther-tag"/>
                            <div className="other-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'
import '../../index.scss'
import { connect } from 'react-redux'
import { addSelectItem, mineSelectItem } from '../../store/actionCreator'
class MenuItem extends React.Component {
    render() {
        const { item, _index, add, mine } = this.props
        return (
            <div className="menu-item">
                <img className="img" src={item.get('picture')} />
                <div className="menu-item-right">
                    <p className="item-title">{item.get('name')}</p>
                    <p className="item-desc two-line">{item.get('description')}</p>
                    <p className="item-zan">{item.get('praise_content')}</p>
                    <p className="item-price">￥{item.get('min_price')}<span className="unit">/{item.get('unit')}</span></p>
                </div>
                <div className="select-content">
                    {item.get('chooseCount') > 0 ? <div onClick={() =>mine(_index)} className="minus"></div> : null}
                    {item.get('chooseCount') > 0 ? <div className="count">{item.get('chooseCount')}</div> : null}
                    <div className="plus" onClick={() => add(_index)}></div>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    add(_index) {
        dispatch(addSelectItem(_index))
    },
    mine(_index) {
        dispatch(mineSelectItem(_index))
    }
})
export default connect(null, mapDispatch)(MenuItem)
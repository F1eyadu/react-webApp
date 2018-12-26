import React from 'react'
import '../../index.scss'
import { connect } from 'react-redux'
import { changeIndex } from '../../store/actionCreator'
import MenuItem from '../menuItem/index'
import ShopBar from '../shopBar/index'
class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    renderLeft() {
        const { listData, currentLeftIndex, itemClick } = this.props
        return listData.map((item, index) => {
            let cls = 'left-item'
            if (index === currentLeftIndex) {
                cls += ' active'
            }
            return (
                <div onClick={() => itemClick(index)} className={cls} key={index}>
                    <div className="item-text">{item.get('icon') ? <img className="item-icon" src={item.get('icon')} /> : null}{item.get('name')}</div>
                </div>
            )
        })
    }
    renderRight() {
        let { listData, currentLeftIndex } = this.props
        let currentItem = listData.get(currentLeftIndex)
        if (currentItem) {
            let title = <p key={1} className="right-title">{currentItem.get('name')}</p>
            return [
                title,
                <div key={2} className="right-list">
                    <div className="right-list-item">{this.renderRightList(currentItem.get('spus'))}</div>
                </div>
            ]
        } else {
            return null
        }
    }
    renderRightList(lists) {
        let _lists = lists || []
        return _lists.map((item, index) => {
            if (!item.get('chooseCount')) {
                item.set('chooseCount', 0)
            }
            return <MenuItem key={index} item={item} _index={index}></MenuItem>
        })
    }
    render() {
        return (
            <div>
                <div className="menu-inner">
                    <div className="left-bar">
                        <div className="left-bar-inner">
                            {this.renderLeft()}
                        </div>
                    </div>
                    <div className="right-content">
                        {this.renderRight()}
                    </div>
                </div>
                <ShopBar />
            </div>
        )
    }
}
const mapState = (state) => ({
    listData: state.getIn(['sale', 'listData']),
    currentLeftIndex: state.getIn(['sale', 'currentLeftIndex'])
})
const mapDispatch = (dispatch) => ({
    itemClick(index) {
        dispatch(changeIndex(index))
    }
})
export default connect(mapState, mapDispatch)(Menu)
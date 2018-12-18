import React, { Component } from 'react'
import './index.scss'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getChangeType} from './store/actionCreator'
class Tabbar extends Component{
    constructor(props){
        super(props)
    }
    renderItems(){
        let {selectKey, tabs, changeTab} = this.props
       return tabs.map((item, index) => {
            let cls = item.get('key') + ' btn-item';
            if(item.get('key') === selectKey){
                cls +=' active'
            }
            return (
                <NavLink  to={`/${item.get('key')}`} onClick={()=> changeTab(item.get('key'))} key={index} className={cls}>
                    <div className="tab-icon"></div>
                    <div className="btn-name">{item.get('name')}</div>
                </NavLink>
            )
        })
    }
    render(){
        return(
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}

const mapState = (state) => ({
    tabs: state.getIn(['tabbar', 'tabs']),
    selectKey: state.getIn(['tabbar', 'selectKey'])
})
const mapDispatch = (dispatch) => ({
    changeTab(item){
        dispatch(getChangeType(item))
    }
})
export default connect(mapState, mapDispatch)(Tabbar)
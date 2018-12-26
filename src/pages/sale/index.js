import React from 'react'
import './index.scss'
import { connect} from 'react-redux'
import Header from '../../components/header/index'
import Menu from './components/menu/index'
import Comment from './components/comment/index'
import Detail from './components/detail/index'
import { changeTab, getFood} from './store/actionCreator'
class Sale extends React.Component{
    componentDidMount(){
        this.props.getFood()
    }
    renderTabs(){
        const {tabs, activeKey, changeTab} = this.props
        return tabs.map((item)=>{
            let cls = 'tab-item'
            if(item.get('key') === activeKey){
                cls +=' active'
            }
            return <div onClick={()=>changeTab(item.get('key'))} className={cls} key={item.get('key')}>{item.get('name')}</div>
        })
    }
    renderDiv(){
        let activeKey = this.props.activeKey
        if(activeKey === 'menu'){
        return <Menu/>
        }else if(activeKey === 'comment'){
           return <Comment/>
        }else if(activeKey === 'restanurant'){
           return <Detail/>
        }
    }
    render(){
        
        return(
            <div className="detail">
                <Header title="详情"/>
                <div className="tab-bar">
                    {this.renderTabs()}
                </div>
                {
                    this.renderDiv()
                }
            </div>
        )
    }
}
const mapState = (state) =>({
    tabs: state.getIn(['sale', 'tabs']),
    activeKey: state.getIn(['sale', 'activeKey'])
})

const mapDispatch = (dispatch) =>({
    changeTab(key){
        dispatch(changeTab(key))
    },
    getFood(){
        dispatch(getFood())
    }
})
export default connect(mapState, mapDispatch)(Sale)

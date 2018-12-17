import React from 'react'
import Header from './components/Header'
import CateGory from './components/category'
import List from './components/list'
import { connect} from 'react-redux'
import {getHomeData} from './store/actionCreator'
class Home extends React.Component{
    componentDidMount(){
        this.props.homeData()
    }
    render(){
        const { category, list} = this.props
        return(
            <div>
                <Header/>
                <CateGory lists = {category}/>
                <List lists={list}/>
            </div>
        )
    }
}

const mapState = (state)=> ({
    category: state.getIn(['home','cateGory']),
    list: state.getIn(['home', 'lists'])
})
const mapDispatch = (dispatch) =>({
    homeData(){
        dispatch(getHomeData())
    }
})
export default connect(mapState,mapDispatch)(Home)
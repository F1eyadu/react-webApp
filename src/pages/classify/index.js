import React from 'react'
import Header from '../../components/header/index'
import Nav from './components/Nav/index'
import ContentList from './components/contentList/index'
import { connect} from 'react-redux'
import {getHomeData} from '../Home/store/actionCreator'
class Classify extends React.Component {
    componentDidMount(){
        this.props.homeData()
    }
    render() {
        return (
            <div>
                <Header title="分类" />
                <Nav />
                <ContentList list={this.props.list}/>
            </div>
        )
    }
}
const mapState = (state)=> ({
    list: state.getIn(['home', 'lists']),
})
const mapDispatch = (dispatch) =>({
    homeData(){
        dispatch(getHomeData())
    }
})
export default connect(mapState,mapDispatch)(Classify)
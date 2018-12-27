import React from 'react'
import { connect } from 'react-redux'
import CommentItem from '../commentItem/index'
import ScrollView from '@/components/scrollView/index'
import { getCommentLists} from '../../store/actionCreator'
class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.page = 0
        this.state = {
            isend: false
        }
        this.onLoadPage = this.onLoadPage.bind(this)
    }
    componentDidMount(){
        const {commentList, getCommentLists} = this.props
        if(commentList.size ===0){
           getCommentLists()
        }
    }
    onLoadPage() {
        this.page++
        if (this.page > 3) {
            this.setState({
                isend: true
            })
        } else {
            this.props.getCommentLists()
        }
    }
    renderList() {
        let list = this.props.commentList
        return list.map((item, index) => {
            return <CommentItem key={index} item={item} />
        })
    }
    render() {
        return (
            <div className="comment-list">
                <ScrollView dis="content" loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {this.renderList()}
                </ScrollView>
            </div>
        )
    }
}

const mapState = (state) => ({
    commentList: state.getIn(['sale', 'commentList'])
})
const mapDispatch = (dispatch) =>({
    getCommentLists(){
        dispatch(getCommentLists())
    }
})
export default connect(mapState, mapDispatch)(CommentList)
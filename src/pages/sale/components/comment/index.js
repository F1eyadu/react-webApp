import React from 'react'
import '../../index.scss'
import Star from '@/components/star/index'
import { connect} from 'react-redux'
import CommentList from '../commentList/index'
class Comment extends React.Component {
    render() {
        const { comments} = this.props
        return (
            <div className="comment-inner">
                <div className="comment-score">
                    <div className="mail-score-content">
                        <div className="mail-score">{comments.get('comment_score')}</div>
                        <div className="mail-text">商家评价</div>
                    </div>
                    <div className="other-score-content">
                        <div className="taste-score">
                            <div className="taste-text">口味</div>
                            <div className="taste-star-wrap">
                                <Star score={comments.get('food_score')}/>
                            </div>
                            <div className="taste-score-text">{comments.get('food_score')}</div>
                        </div>
                        <div className="package-score">
                            <div className="package-text">包装</div>
                            <div className="package-star-wrap">
                                <Star score={comments.get('pack_score')}/>
                            </div>
                            <div className="package-score-text">{comments.get('pack_score')}</div>
                        </div>
                    </div>
                    <div className="send-score-content">
                        <div className="send-score">{comments.get('delivery_score')}</div>
                        <div className="send-text">配送评价</div>
                    </div>
                </div>
                <CommentList/>
            </div>
        )
    }
}

const mapState = (state) => ({
    comments: state.getIn(['sale', 'comments'])
})
export default connect(mapState, null)(Comment)
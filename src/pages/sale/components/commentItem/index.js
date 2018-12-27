import React from 'react'
import Stat from '@/components/star/index' 
class CommentItem extends React.Component{
    renderImg(item){
        let imgs = item.get('comment_pics') || []
        if(imgs.size > 0){
            return (
                <div className="img-content clearfix">
                    { imgs.map((item)=>{
                        let src = item.get('url')
                        let style = {
                            backgroundImage: 'url('+ src + ')'
                        }
                        return <div className="img-item" style={style}></div>
                    })}
                </div>
            )
        }else{
            return null
        }
    }
    renderTags(label){
        return label.map((item) =>{
            return item.get('content') + ', '
        })
    }
    formatTime(time){
        let date = new Date(Number(time + '000'))
        return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    }
    render(){
        const item =  this.props.item
        return(
            <div className="comment-item">
                <div className="comment-time">{this.formatTime(item.get('comment_time'))}</div>
                <img className="avatar" src={item.get('user_pic_url') || 'http://xs01.meituan.net/waimai_i/img/default-avatar.c4e0230d.png'}/>
                <div className="item-right">
                    <p className="nickname">{item.get('user_name')}</p>
                    <div className="star-and-time">
                        <div className="star-content">
                            <Stat score={item.get('order_comment_score')}/>
                        </div>
                        <div className="send-time">{item.get('ship_time') + '分钟送达'}</div>
                    </div>
                    <div className="comment-text">{item.get('comment')}</div>
                    {this.renderImg(item)}
                    {item.get('praise_food_tip')?<div className="like-info">{item.get('praise_food_tip')}</div>:null}
                    {item.get('comment_labels').size > 0?<div className="tag-info">{this.renderTags(item.get('comment_labels'))}</div>:null}
                </div>
            </div>
        )
    }
}

export default CommentItem
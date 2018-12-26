import React from 'react'
import './index.scss'
import Header from '../../components/header/index'
export default class Evaluation extends React.Component{
    constructor(props){
        super(props)
        this.maxCount = 140
        this.state = {
            count: this.maxCount,
            startIndex:4
        }
    }
    componentDidMount(){
        this.refs.commentInput.addEventListener('compositionstart', ()=>{
            this.chineseInputing = true
        })
        this.refs.commentInput.addEventListener('compositionend', (e)=>{
            this.chineseInputing = false
            this.outInput(e.target.value)
        })
    }

    renderStar(){
        let array = []
        for(let i=0;i<=5; i++){
            let cls = i >=this.state.startIndex?'star-item':'star-item light'
            array.push(<div onClick = {()=> this.doEva(i)} key={i} className={cls}></div>)
        }
        return array
    }
    doEva(index){
        this.setState({
            startIndex: index +1
        })
    }
    outInput(e){
        let num = e.length
        if(!this.chineseInputing){
            this.setState({
                count: this.maxCount - num
            })
        }
    }
    render(){
        return(
            <div className="content">
                <Header title="评价"/>
                <div className="eva-content">
                    <div className="star-area">
                        {
                            this.renderStar()
                        }
                    </div>
                    <div className="comment">
                        <textarea ref="commentInput"  onChange={(e)=> this.outInput(e.target.value)} maxLength="140" placeholder="" className="comment-input"></textarea>
                        <p className="count">{this.state.count}</p>
                    </div>
                    <p className="pro-name one-line">香辣口水鸡</p>
                </div>
                <div className="submit">提交</div>
            </div>
        )
    }
}
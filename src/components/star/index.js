import React from 'react'
import './index.scss'
export default class Star extends React.Component {

    // 渲染评分
    renderScore(scores) {
        let wm_poi_score = scores|| ''
        let score = wm_poi_score.toString()
        let scroeArray = score.split('.')
        let fullStar = parseInt(scroeArray[0])
        let halfStar = parseInt(scroeArray[1]) >= 5 ? 1 : 0
        let nullstar = 5 - fullStar - halfStar
        let starJsx = []
        for (let i = 0; i < fullStar; i++) {
            starJsx.push(<div key={i + 'full'} className="star fullstar"></div>)
        }
        if (halfStar) {
            for (let m = 0; m < halfStar; m++) {
                starJsx.push(<div key={m + 'half'} className="star halfstar"></div>)
            }
        }
        if (nullstar) {
            for (let k = 0; k < nullstar; k++) {
                starJsx.push(<div key={k + 'null'} className="star nullstar"></div>)
            }
        }
        return starJsx
    }

    render() {
        const score = this.props.score
        return (
            <div className="star-content">
                <div className="item-score">{this.renderScore(score)}</div>
            </div>
        )
    }
}
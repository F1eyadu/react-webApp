import React from 'react'
import './index.scss'
class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="back-icon"></div>
                <div className="title">{this.props.title}</div>
            </div>
        )
    }
}

export default Header
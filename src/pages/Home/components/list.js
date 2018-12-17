import React from 'react'
import '../index.scss'
import ListItem from '../../../components/listItem/index'
export default class List extends React.Component{
    render(){
        const { lists} = this.props
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                {
                    lists.map((item, index) => {
                        return <ListItem key={index} itemData = {item}></ListItem>
                    })
                }
            </div>
        )
    }
}
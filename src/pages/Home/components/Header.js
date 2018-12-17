import React from 'react'
import '../index.scss'
import SearchBar from './searchBar'
export default class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <SearchBar/>
                <img className="banner-img" src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg"/>
            </div>
        )
    }
}
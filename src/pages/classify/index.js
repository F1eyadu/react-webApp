import React from 'react'
import Header from '../../components/header/index'
import Nav from './components/Nav/index'
class Classify extends React.Component {
    render() {
        return (
            <div>
                <Header title="分类" />
                <Nav />
            </div>
        )
    }
}

export default Classify
import React from 'react'
import '../index.scss'
import ListItem from '@/components/listItem/index'
import ScrollView from '@/components/scrollView/index'
import { connect } from 'react-redux'
import { getMoreData } from '../store/actionCreator'
class List extends React.Component {
    constructor(props) {
        super(props)
        this.page = 0
        this.state = {
            isend: false
        }
        this.onLoadPage = this.onLoadPage.bind(this)
    }

    onLoadPage() {
        this.page++
        if (this.page > 3) {
            this.setState({
                isend: true
            })
        } else {
            this.props.fetchData(this.page)
        }
    }

    render() {
        const { lists } = this.props
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>
                </h4>
                <ScrollView dis="content" loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {
                        lists.map((item, index) => {
                            return <ListItem key={index} itemData={item}></ListItem>
                        })
                    }
                </ScrollView>


            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    fetchData(page) {
        dispatch(getMoreData(page))
    }
})
export default connect(null, mapDispatch)(List)
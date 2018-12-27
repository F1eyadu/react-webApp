import React from 'react'
import '../../index.scss'
import ListItem from '@/components/listItem/index'
import ScrollView from '@/components/scrollView/index'
import { connect } from 'react-redux'
import { getMoreData } from '../../../Home/store/actionCreator'
class ContentList extends React.Component{
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
    render(){
        return(
            <div className="ContentList-wrapper">
                <ScrollView dis="content" loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                    {
                        this.props.list.map((item, index) => {
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
export default connect(null, mapDispatch)(ContentList)
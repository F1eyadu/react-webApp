import React from 'react'
import Loading from '@/components/loding/index'
import { connect} from 'react-redux'
class scrollView extends React.Component{
    constructor(props){
        super(props)
        this.onLoadPage = this.onLoadPage.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onLoadPage)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.onLoadPage)
    }
    onLoadPage() {
        let clientHeight = document.documentElement.clientHeight
        let scrollHeight = document.documentElement.scrollHeight
        let scrollTop = document.documentElement.scrollTop
        const proLoadDis = 30
        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            if(!this.props.isend && !this.props.isLoad){
                this.props.loadCallback && this.props.loadCallback()
            }            
        }
    }
    render(){
        return(
            <div className="scrollView">
                {this.props.children}
                <Loading isend = {this.props.isend}/>
                <div style={{height: 52}}></div>
            </div>
        )
    }
}

const mapState = (state) =>({
    isLoad: state.getIn(['scroll', 'isLoad'])
})

export default connect(mapState, null)(scrollView)
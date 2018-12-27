import React from 'react'
import '../../index.scss'
import { connect} from 'react-redux'
import { getRestanurantinfo} from '../../store/actionCreator'
class Detail extends React.Component{
    componentDidMount(){
        const { restanurant, getInfo} =this.props
        if(restanurant.size === 0){
            getInfo()
        }
    }
    renderPayType(types){
        let array = types || [];
        return array.map((item, index)=>{
            return <p key={index} className="restanurant-pay-type res-section"><img className="icon" src={item.get('icon_url')}/>{item.get('info')}</p>
        });
    }
    render(){
        const data = this.props.restanurant
        return(
            <div className="restanurant-content">
                <div className="restanurant-basic">
                    <p className="restanurant-tel res-section">{data.get('call_center')}</p>
                    <p className="restanurant-addr res-section">
                        <div className="addr-wrap">
                            <div className="addr-name">商家地址: </div>
                            <p className="addr-text">{data.get('address')}</p>
                        </div>
                    </p>
                </div>
                <div className="restanurant-basic">
                    <p className="restanurant-send-time res-section">配送时间: {data.get('shipping_time')}</p>
                    <p className="restanurant-send-type res-section">配送服务: {data.get('delivery_type') === 1 ? <span><span className="meituan-send">美团专送</span>提供高质量配送服务</span> : '商家配送'}</p>
                </div>
                <div className="restanurant-basic">
                    {this.renderPayType(data.get('discounts2'))}
                </div>
            </div>
        )
    }
}
const mapDispatch = (dispatch) =>({
    getInfo(){
        dispatch(getRestanurantinfo())
    }
})
const mapState = (state) =>({
    restanurant: state.getIn(['sale', 'restanurant'])
})
export default connect(mapState, mapDispatch)(Detail)
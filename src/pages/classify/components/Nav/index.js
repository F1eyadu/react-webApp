import React from 'react'
import '../../index.scss'
import { connect } from 'react-redux'
import { changeTable, getFilterDate, changeFilter } from '../../store/actionCreator'
class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.props.FilterData()
    }
    changeTab(key){
        let closePanel = false
        if(this.props.activeKey === key && !this.props.closePanel){
            closePanel = true
        }
        this.props.changeTab(key, closePanel)
    }
    renderTabs() {
        let { tabs, activeKey} = this.props
        let array = []
        tabs.map((item) => {
            let cls = item.get('key') + ' item'
            if (item.get('key') === activeKey && !this.props.closePanel) {
                cls += ' current'
            }
            array.push(<div className={cls} key={item.get('key')} onClick={() => this.changeTab(item.get('key'))}>{item.get('text')}</div>)
        })
        return array
    }
    renderContent() {
        let { tabs, activeKey } = this.props
        let array = []
        tabs.map((item) => {
            let cls = item.get('key') + '-panel'
            if (item.get('key') === activeKey) {
                cls += ' current'
            }
            if(item.get('key') === 'cate'){
                array.push(
                    <ul key={item.get('key')} className={cls}>
                        {this.renderCateContent()}
                    </ul>
                )
            }else if(item.get('key') === 'type'){
                array.push(
                    <ul key={item.get('key')} className={cls}>
                        {this.renderTypeContent()}
                    </ul>
                )
            }else if(item.get('key') === 'filter'){
                array.push(
                    <ul key={item.get('key')} className={cls}>
                        {this.renderFilterContent()}
                    </ul>
                )
            }
        })
        return array
    }
    renderCateContent(){
    const { filterData} = this.props
        let cateList = filterData.get('category_filter_list') || []
        return cateList.map((item, index) => {
            return (
                <li className="cate-item" key={index}>
                    <p className="item-title">{item.get('name')}<span className="item-count">{item.get('quantity')}</span></p>
                    <div className="item-contents clearfix">
                        {this.renderCateInnerContent(item, cateList)}
                    </div>
                </li>
            )
        })
    }
    renderCateInnerContent(item, cateList){
        let sub_category_list = item.get('sub_category_list')
        return sub_category_list.map((item, index)=>{
            let cls = item.get('active')?'cate-box-inner active' : 'cate-box-inner'
            return(
                <div onClick={()=> this.changeDoFilter(item, 'cate', cateList)} key={index} className="cate-box">
                    <div className={cls}>
                        {item.get('name')}({item.get('quantity')})
                    </div>
                </div>
            )
        })
    }
    renderTypeContent(){
        let typeList = this.props.filterData.get('sort_type_list') || []
        return typeList.map((item, index) => {
            let cls = item.get('active')?"type-item active" : "type-item"
            return(
                <li onClick={()=> this.changeDoFilter(item, 'type', typeList)} key={index} className={cls}>
                    {item.get('name')}
                </li>
            )
        })
    }
    renderFilterContent(){
        let filterList = this.props.filterData.get('activity_filter_list')|| []
        return filterList.map((item, index) => {
            return (
                <li key={index} className="filter-item">
                    <p className="filter-title">{item.get('group_title')}</p>
                    <div className="item-contents clearfix">
                        {this.renderFilterInnerContent(item.get('items'), filterList)}
                    </div>
                </li>
            )
        })
    }
    renderFilterInnerContent(items, filterList){
        return items.map((item, index)=>{
            let cls = item.get('icon')? 'cate-box-inner has-icon' : 'cate-box-inner'
            if(item.get('active')){
                cls +=' active'
            }
            return (
                <div onClick={()=> this.changeDoFilter(item, 'filter', filterList)} key={index} className="cate-box">
                    <div className={cls}>
                        {item.get('icon')?<img src={item.get('icon')}/>:null}{item.get('name')}
                    </div>
                </div>
            )
        })
    }
    changeDoFilter(item, key, dataList){
        this.revertActive(dataList)
        item.set('active', true)
        this.props.changeFilter(item, key)
    }
    revertActive(dataList){
        dataList.map((item)=>{
            item.set('actie', false)
        })
    }
    render() {
            let cls = 'panel'
            if(!this.props.closePanel) cls +=' show'
            else cls ='panel'
        return (
            <div className="Nav">
                <div className="Nav-top">
                    {this.renderTabs()}
                </div>
                <div className={cls}>
                    <div className="panel-inner">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    tabs: state.getIn(['cate', 'tabs']),
    activeKey: state.getIn(['cate', 'activeKey']),
    filterData: state.getIn(['cate', 'filterData']),
    closePanel: state.getIn(['cate', 'closePanel'])
})

const mapDispatch = (dispatch) => ({
    changeTab(key, closePanel) {
        dispatch(changeTable(key, closePanel))
    },
    FilterData() {
        dispatch(getFilterDate())
    },
    changeFilter(item, key){
        dispatch(changeFilter(item, key))
    }
})

export default connect(mapState, mapDispatch)(Nav)
import React from 'react'
import '../index.scss'
class CateGory extends React.Component {
    render() {
        const { lists } = this.props
        return (
            <div className="category-content clearfix">
                {
                    lists.map((item, index) => {
                        if (index < 8) {
                            return <div key={item.get('code')} className="category-item">
                                <img className="item-icon" src={item.get('url')} />
                                <p className="item-name">{item.get('name')}</p>
                            </div>
                        }
                    })
                }
            </div>
        )
    }
}
export default CateGory
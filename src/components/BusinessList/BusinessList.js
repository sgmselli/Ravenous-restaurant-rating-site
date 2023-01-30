import React from 'react';

import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map((business, uuidv4) => {
                    return <Business business={business} key={uuidv4}/>
                })}
            </div>
        )
    }
}

export default BusinessList;
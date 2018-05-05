import React from 'react';
import ReactDOM from 'react-dom';

import SearchHotels from './search-hotels.jsx';
import SearchDetails from './search-details.jsx';
import HotelList from './hotel-list.jsx';

class Hotels extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: null
        }

        this._onClickSearchFilter = this._onClickSearchFilter.bind(this);
    }

    render () {
        return (<div>
            <SearchHotels onClickSearchFilter={this._onClickSearchFilter}/>
            {this.state.filter ?
                <div>
                    <SearchDetails searchedDetails={this.state.filter}/>
                    <HotelList filter={this.state.filter} />
                </div>
            : null}
        </div>);
    }

    _onClickSearchFilter (filter) {
        this.setState({filter});
    }
}

module.exports = Hotels;

import React from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';

class SearchDetails extends React.Component {
    constructor() {
        super();
    }

    render () {
        const { searchedDetails } = this.props;
        return (<div>
            <h1>Searched Result</h1>
            <div>
                <input
                    disabled={true}
                    placeholder="Location..."
                    value={searchedDetails.location} />
                <input
                    type='date'
                    disabled={true}
                    placeholder="Check In"
                    value={searchedDetails.checkInDate}/>
                <input
                    type='date'
                    disabled={true}
                    placeholder="Check Out"
                    value={searchedDetails.checkOutDate}/>
                <input
                    type='number'
                    disabled={true}
                    placeholder="Guests"
                    value={searchedDetails.guestCount}/>
            </div>
        </div>);
    }
}

SearchDetails.propTypes = {
    searchedDetails: PropTypes.func
}

module.exports = SearchDetails;

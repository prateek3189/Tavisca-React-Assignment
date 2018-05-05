import React from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';
import GoogleMaps from '@google/maps';

const googleMapsClient = GoogleMaps.createClient({
    key: 'AIzaSyBdVl-cTICSwYKrZ95SuvNw7dbMuDt1KG0'
});


class SearchHotels extends React.Component {
    constructor() {
        super();

        this.state = {};

        this._onClickSearch = this._onClickSearch.bind(this);
    }

    render () {
        return (<div>
            <h1>Search From Page</h1>
            <div>
                <input
                    ref={node => this.searchLocationNode = node}
                    placeholder="Location..." />
                <input
                    type='date'
                    ref={node => this.searchCheckInNode = node}
                    placeholder="Check In" />
                <input
                    type='date'
                    ref={node => this.searchCheckOutNode = node}
                    placeholder="Check Out" />
                <input
                    type='number'
                    ref={node => this.searchGuestCountNode = node}
                    placeholder="Guests" />
                <button onClick={this._onClickSearch}>Search</button>
            </div>
        </div>);
    }

    _onClickSearch() {
        const location = this.searchLocationNode.value,
            checkInDate = this.searchCheckInNode.value,
            checkOutDate = this.searchCheckOutNode.value,
            guestCount = this.searchGuestCountNode.value;
        if(
            location === '' ||
            checkInDate === '' ||
            checkOutDate === '' ||
            guestCount === ''
        ) {
            swal('Oops...', 'Please enter all search fields', 'error');
            return;

        }

        // Get Latitude longitude data
        googleMapsClient.geocode({
          address: this.searchLocationNode.value //'1600 Amphitheatre Parkway, Mountain View, CA'
      }, (err, response) => {
            // if (!err) {
            // console.log(response.json.results);
            // }
            const latitude = '37.4224082',
                longitude = '-122.0856086';

            this.props.onClickSearchFilter({
                location,
                checkInDate,
                checkOutDate,
                guestCount,
                latitude,
                longitude
            });

        });

    }

}

SearchHotels.propTypes = {
    onClickSearchFilter: PropTypes.func
}

module.exports = SearchHotels;

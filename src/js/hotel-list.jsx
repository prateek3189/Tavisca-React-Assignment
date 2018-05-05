import React from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';
import axios from 'axios';
import dateFormat from 'dateFormat';

var initServiceData = require('./server/init.json');


class SearchHotels extends React.Component {
    constructor() {
        super();
        this.state = {
            hotels: []
        };
    }

    componentDidMount () {
        const { filter } = this.props;
        // Latitude and longitudes are static right now because the googlee apli needs a paid key

        const checkInDate = dateFormat(new Date(filter.checkInDate), "mm-dd-yyyy"),
            checkOutDate = dateFormat(new Date(filter.checkOutDate), "mm-dd-yyyy");

        const updatedData = {
            bounds: {
                circle: {
                    center: {
                        lat: filter.latitude,
                        long: filter.longitude
                    },
                    radiusKm: 50.5
                }
            }
        };
        const postData = Object.assign(initServiceData, updatedData);

        // Adding request data based on filter
        axios({
            method:'post',
            url:'https://public-be.oski.io/hotel/v1.0/search/init',
            data: postData,
            headers: {
                    'oski-tenantId': 'Demo',
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                // Will call status API based on session id
                // based on second response will get list of hotels
            });
    }

    render () {
        return (<div>
            {this.state.hotels.length ?
                this.getHotelsList()
                : 'Loading...'}
        </div>);
    }

    getHotelsList() {
        const { hotels } = this.state;
        let hotelHTML = [];
        hotels && hotels.length && hotels.forEach(hotel => {
            hotelHTML.push(<tr>
                <td><img src={hotels[0].image} width="100" /></td>
                <td>{hotel.rating}</td>
                <td>{hotel.address}</td>
            </tr>);
        });

        return (
            <table>
                <tbody>
                    {hotelHTML}
                </tbody>
            </table>
        );
    }
}

SearchHotels.propTypes = {
    onClickSearchFilter: PropTypes.func,
    filter: PropTypes.object
}

module.exports = SearchHotels;

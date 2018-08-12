import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ bookingId, country, city, name, region, iata }) => (
    <div>
        <span>{`Booking Id: ${bookingId}`}</span>
        <span>{`Country: ${country}`}</span>
        <span>{`Name: ${name}`}</span>
        {city ? <span>{`City: ${city}`}</span> : null}
        {region ? <span>{`Region: ${region}`}</span> : null}
        {iata ? <span>{`iata: ${iata}`}</span> : null}
    </div>
);

Result.propTypes = {
    bookingId: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string,
    region: PropTypes.string,
    iata: PropTypes.string
};

Result.defaultProps = {
    iata: null,
    city: null,
    region: null
};

export default Result;

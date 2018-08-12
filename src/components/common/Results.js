import React from 'react';
import PropTypes from 'prop-types';

import Result from './Result';

const Results = ({ resultsList }) => (
    <ul className="results">
        {resultsList.map(result => (
            <li className="results__item" key={result.bookingId}>
                <Result {...result} />
            </li>
        ))}
    </ul>
);

Results.propTypes = {
    resultsList: PropTypes.arrayOf(
        PropTypes.shape({
            bookingId: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            city: PropTypes.string,
            name: PropTypes.string.isRequired,
            region: PropTypes.string,
            iata: PropTypes.string
        })
    ).isRequired
};

export default Results;

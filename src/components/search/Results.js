import React from 'react';
import PropTypes from 'prop-types';

import Result from './Result';

const Results = ({ numFound, resultsList }) => {
    if (numFound === 0) {
        return <span className="results__none-found">No Results Found</span>;
    }

    return (
        <ul className="results">
            {resultsList.map(result => (
                <li className="results__item" key={result.bookingId}>
                    <Result {...result} />
                </li>
            ))}
        </ul>
    );
};

Results.propTypes = {
    numFound: PropTypes.number.isRequired,
    resultsList: PropTypes.arrayOf(
        PropTypes.shape({
            bookingId: PropTypes.string
        })
    ).isRequired
};

export default Results;

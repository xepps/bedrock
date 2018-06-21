import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ match }) => (
    <header>
        <h1>{match.params.project}</h1>
    </header>
);

Header.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            project: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Header;

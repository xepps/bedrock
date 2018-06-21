import React from 'react';
import PropTypes from 'prop-types';

const IndexPage = ({ match }) => <div>{`Index for ${match.params.project}`}</div>;

IndexPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            project: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default IndexPage;

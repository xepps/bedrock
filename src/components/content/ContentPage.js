import React from 'react';
import PropTypes from 'prop-types';

const ContentPage = ({ match }) => (
    <div>
        <h2>{`Content for ${match.params.project}`}</h2>
        <p>{`Article on ${match.params.slug} on ${match.params.zid}`}</p>
    </div>
);

ContentPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            project: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default ContentPage;

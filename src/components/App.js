import React from 'react';
import PropTypes from 'prop-types';

const App = ({ match, children }) => (
    <div className={`bedrock bedrock--${match.params.project}`}>
        <header>
            <h1>{match.params.project}</h1>
        </header>
        <main>{children}</main>
        <footer>
            <h6>Footer</h6>
        </footer>
    </div>
);

App.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            project: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    children: PropTypes.element.isRequired
};

export default App;

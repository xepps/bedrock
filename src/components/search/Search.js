import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

        this.updateOnSearch = this.updateOnSearch.bind(this);
    }

    updateOnSearch(e) {
        this.props.searchUpdated(e.target.value);
    }

    render() {
        return (
            <div className="search">
                <label className="search__label" htmlFor="search-location">
                    Pick-up location
                </label>
                <input
                    id="search-location"
                    className="search__input"
                    placeholder="city, airport, station, region and district..."
                    onChange={this.updateOnSearch}
                />
            </div>
        );
    }
}

Search.propTypes = {
    searchUpdated: PropTypes.func.isRequired
};

export default Search;

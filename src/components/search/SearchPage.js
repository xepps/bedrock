import 'whatwg-fetch';
import React, { Component } from 'react';

import Search from '../common/Search';
import Results from '../common/Results';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: null
        };

        this.searchUpdated = this.searchUpdated.bind(this);
    }

    searchUpdated(value) {
        if (value.length > 1) {
            fetch(
                `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${value}`
            )
                .then(res => res.json())
                .then(res => res.results.docs)
                .then(searchResults => this.setState({ searchResults }));
        } else {
            this.setState({ searchResults: null });
        }
    }

    render() {
        return (
            <div className="search-page">
                <h1 className="search-page__header">Where are you going?</h1>
                <Search searchUpdated={this.searchUpdated} />
                {this.state.searchResults ? <Results resultsList={this.state.searchResults} /> : null}
            </div>
        );
    }
}

export default SearchPage;

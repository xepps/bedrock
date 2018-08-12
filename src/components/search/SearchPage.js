import 'whatwg-fetch';
import React, { Component } from 'react';

import Search from './Search';
import Results from './Results';

import './search.css';

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
                .then(res => res.results)
                .then(res => this.setState({ searchResults: res.docs, numFound: res.numFound }));
        } else {
            this.setState({ searchResults: null });
        }
    }

    render() {
        return (
            <div className="search-page">
                <h2 className="search-page__title">Where are you going?</h2>
                <Search searchUpdated={this.searchUpdated} />
                {this.state.searchResults ? (
                    <Results numFound={this.state.numFound} resultsList={this.state.searchResults} /> 
                ) : null}
            </div>
        );
    }
}

export default SearchPage;

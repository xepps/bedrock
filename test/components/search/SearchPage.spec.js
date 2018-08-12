import React from 'react';
import { mount } from 'enzyme';

import fetchMock from 'fetch-mock';

import SearchPage from '../../../src/components/search/SearchPage';
import Search from '../../../src/components/search/Search';
import Results from '../../../src/components/search/Results';

import requestResponse from '../../__mocks__/man.json';

describe('The search page', () => {
    let searchPage;

    beforeEach(() => {
        fetchMock.mock(
            'begin:https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=',
            {
                status: 200,
                body: requestResponse
            }
        );

        searchPage = mount(<SearchPage />);
    });

    afterEach(() => {
        fetchMock.restore();
    });

    it('should have a header', () => {
        expect(searchPage.find('.search-page__header').text()).toEqual('Where are you going?');
    });

    it('should contain the search box', () => {
        expect(searchPage.find(Search).exists()).toBeTruthy();
    });

    it('should call the rentalcars endpoint on change with 2 or more characters and display results', () => {
        searchPage.find('.search__input').simulate('change', { target: { value: 'ma' } });

        expect(
            fetchMock.called(
                'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=ma'
            )
        ).toBeTruthy();

        searchPage.update();
        expect(searchPage.find(Results)).toBeTruthy();
    });

    it('should not call the rentalcars endpoint with less than 2 characters and not display results', () => {
        searchPage.find('.search__input').simulate('change', { target: { value: 'm' } });

        expect(
            fetchMock.called(
                'https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=m'
            )
        ).toBeFalsy();

        searchPage.update();
        expect(searchPage.find(Results).exists()).toBeFalsy();
    });
});

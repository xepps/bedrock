import React from 'react';
import { mount } from 'enzyme';

import Results from '../../../src/components/common/Results';
import Result from '../../../src/components/common/Result';

import resultsList from '../../__mocks__/man.json';

describe('A results list', () => {
    let results;

    beforeEach(() => {
        results = mount(<Results resultsList={resultsList.results.docs} />);
    });

    it('should create a list of results from an array of results passed to it', () => {
        expect(results.find(Result)).toHaveLength(6);
    });

    it('should pass all the relevant data down to the Result', () => {
        expect(
            results
                .find(Result)
                .first()
                .props()
        ).toMatchObject({
            bookingId: 'airport-38566',
            city: 'Manchester',
            country: 'United Kingdom',
            iata: 'MAN',
            name: 'Manchester Airport',
            region: 'Greater Manchester'
        });
    });
});

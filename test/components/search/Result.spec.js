import React from 'react';
import { shallow } from 'enzyme';

import Result from '../../../src/components/search/Result';

import resultsList from '../../__mocks__/man.json';

describe('A result', () => {
    let result;

    beforeEach(() => {
        result = shallow(<Result {...resultsList.results.docs[0]} />);
    });

    it('should dump out all data passed to it that it can', () => {
        expect(result.text()).toEqual(
            'Booking Id: airport-38566Country: United KingdomName: Manchester AirportCity: ManchesterRegion: Greater Manchesteriata: MAN'
        );
    });
});

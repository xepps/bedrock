import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../src/components/common/Header';

describe('The header', () => {
    let header;

    beforeEach(() => {
        header = shallow(<Header />);
    });

    it('should have some header text', () => {
        expect(header.text()).toEqual('Search component for rentalcars');
    });
});

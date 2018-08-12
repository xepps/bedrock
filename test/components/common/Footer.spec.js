import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../../src/components/common/Footer';

describe('The footer', () => {
    let footer;

    beforeEach(() => {
        footer = shallow(<Footer />);
    });

    it('should have some header text', () => {
        expect(footer.text()).toEqual('By Kristian Epps');
    });
});

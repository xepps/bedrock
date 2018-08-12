import React from 'react';
import { mount } from 'enzyme';

import NotFoundPage from '../../../src/components/error/NotFoundPage';

describe('The error page', () => {
    let errorPage;

    beforeEach(() => {
        errorPage = mount(<NotFoundPage />);
    });

    it('should say 404', () => {
        expect(errorPage.text()).toEqual('404');
    });
});

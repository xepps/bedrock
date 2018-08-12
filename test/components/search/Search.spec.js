import React from 'react';
import { shallow } from 'enzyme';

import Search from '../../../src/components/search/Search';

describe('The search widget', () => {
    let search;
    const updatedWith = jest.fn();

    beforeEach(() => {
        search = shallow(<Search searchUpdated={updatedWith} />);
    });

    it('should contain a search box', () => {
        expect(search.find('.search__input')).toBeDefined();
    });

    it('should have a label for the search box to describe it', () => {
        expect(search.find('.search__label').text()).toEqual('Pick-up location');
        expect(search.find('.search__label').prop('htmlFor')).toEqual(search.find('.search__input').prop('id'));
    });

    it('should have placeholder text', () => {
        expect(search.find('.search__input').prop('placeholder')).toEqual(
            'city, airport, station, region and district...'
        );
    });

    it(`should notify it's owner when it's updated`, () => {
        search.find('.search__input').simulate('change', { target: { value: 'hello' } });
        expect(updatedWith).toHaveBeenCalledWith('hello');
    });
});

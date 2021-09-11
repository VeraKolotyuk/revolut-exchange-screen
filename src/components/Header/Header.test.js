import Header from './Header';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});
describe('Header tests', () => {
    test('Header buy text', () => {
        const wrapper = mount(
            <Header inputFromValue={10.56} currency={'USD'} />
        );
        const p = wrapper.find('h1');
        expect(p.text()).toBe('Buy USD');
    });

    test('Header sell text', () => {
        const wrapper = mount(
            <Header inputFromValue={-10.34} currency={'GBP'} />
        );
        const p = wrapper.find('h1');
        expect(p.text()).toBe('Sell GBP');
    });
});
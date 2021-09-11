import UserBalance from './UserBalance';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import currencyToSymbolMap from 'currency-symbol-map';

configure({adapter: new Adapter()});
describe('UserBalance tests', () => {
    test('UserBalance text', () => {
        const wrapper = mount(
            <UserBalance balance={'200.34'} currency={'USD'} />
        );
        const p = wrapper.find('.user-balance-msg');
        expect(p.text()).toBe(`Balance: ${currencyToSymbolMap('USD')}200.34`);
    });
});
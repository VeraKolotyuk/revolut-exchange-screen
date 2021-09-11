import FXRate from './FXRate';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import currencyToSymbolMap from 'currency-symbol-map';

configure({adapter: new Adapter()});
describe('FXRate tests', () => {
    test('FXRate text', () => {
        const wrapper = mount(
            <FXRate currencyFrom={'USD'} currencyTo={'GBP'} rate={0.724} />
        );
        const p = wrapper.find('.fx-rate');
        expect(p.text())
            .toBe(`${currencyToSymbolMap('USD')}1 = ${currencyToSymbolMap('GBP')}0.724`);
    });
});
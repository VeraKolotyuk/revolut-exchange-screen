import ExchangeButton from './ExchangeButton';
import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});
describe('ExchangeButton tests', () => {
    test('ExchangeButton buy text', () => {

        const wrapper = mount(
            <ExchangeButton inputFromValue={10}
                            currencyFromValue={'USD'}
                            currencyToValue={'GBP'}
                            disabled={false}
                            exchange={jest.fn()}
            />
        );
        const p = wrapper.find('button');
        expect(p.text()).toBe('Buy USD with GBP');
    });

    test('ExchangeButton sell text', () => {

        const wrapper = mount(
            <ExchangeButton inputFromValue={-10}
                            currencyFromValue={'USD'}
                            currencyToValue={'GBP'}
                            disabled={false}
                            exchange={jest.fn()}
            />
        );
        const p = wrapper.find('button');
        expect(p.text()).toBe('Sell USD for GBP');
    });
});
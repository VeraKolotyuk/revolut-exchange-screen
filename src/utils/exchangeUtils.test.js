import {formatValue, getExchangeFromToMsg, isExchangeDisabled} from './exchangeUtils';
import currencyToSymbolMap from 'currency-symbol-map';

test('formatValue with float number', () => {
    expect(formatValue(2.45565)).toBe(2.46);
});

test('formatValue with not a number', () => {
    expect(formatValue('string')).toBe('');
});

test('exchange disabled for dot', () => {
    expect(isExchangeDisabled('.', '1')).toBe(true);
    expect(isExchangeDisabled('12.4', '.')).toBe(true);
});

test('exchange disabled for number', () => {
    expect(isExchangeDisabled('1.98', '2.56')).toBe(false);
});

// test('form to message for buy', () => {
//     const msg = `${currencyToSymbolMap('USD')}15 to ${currencyToSymbolMap('GBP')}10`;
//     expect(getExchangeFromToMsg('USD', 'GBP', 10, -15))
//         .toBe(msg);
// });


import {formatValue,
    getCurrencyRate,
    getExchangeFromToMsg,
    isExchangeDisabled,
    getPrepForExchangedValue,
    getOperationName,
    updateWallet,
    getCurrentBalance,
    checkBalanceExceeds
} from './exchangeUtils';
import currencyToSymbolMap from 'currency-symbol-map';
import {CURRENCY} from './constants';


//formatValue tests
describe('formatValue tests', () => {
    test('formatValue with float number', () => {
        expect(formatValue(2.45565)).toBe(2.46);
    });

    test('formatValue with not a number', () => {
        expect(formatValue('string')).toBe('');
    });
});

//isExchangeDisabled tests
describe('isExchangeDisabled tests', () => {
    test('exchange disabled for dot', () => {
        expect(isExchangeDisabled('.', '1')).toBe(true);
        expect(isExchangeDisabled('12.4', '.')).toBe(true);
    });

    test('exchange disabled for number', () => {
        expect(isExchangeDisabled('1.98', '2.56')).toBe(false);
    });
});

//getExchangeFromToMsg tests
describe('getExchangeFromToMsg tests', () => {
    test('form to message for buy', () => {
        const msg = `${currencyToSymbolMap('USD')}15 to ${currencyToSymbolMap('GBP')}10`;
        expect(getExchangeFromToMsg('USD', 'GBP', 10, -15))
            .toBe(msg);
    });

    test('form to message for sell', () => {
        const msg = `${currencyToSymbolMap('GBP')}10 to ${currencyToSymbolMap('USD')}15`;
        expect(getExchangeFromToMsg('USD', 'GBP', -10, 15))
            .toBe(msg);
    });
});

//getCurrencyRate tests
const ratesMock = {'USD': 1, 'EUR': 0.845185, 'GBP': 0.724022};
describe('getCurrencyRate tests', () => {
    test('get currency rate for USD and GBP', () => {
        expect(getCurrencyRate(ratesMock, CURRENCY.USD, CURRENCY.GBP)).toBe(1.3812);
    });

    test('get currency rate for GBP and EUR', () => {
        expect(getCurrencyRate(ratesMock, CURRENCY.GBP, CURRENCY.EUR)).toBe(0.8566);
    });
});

//getPrepForExchangedValue tests
describe('getPrepForExchangedValue tests', () => {
    test('prep for sell operation', () => {
        expect(getPrepForExchangedValue(-10.23)).toBe('for');
    });

    test('prep for sell operation', () => {
        expect(getPrepForExchangedValue(10.23)).toBe('with');
    });
});

//getOperationName tests
describe('getOperationName tests', () => {
    test('prep for sell operation', () => {
        expect(getOperationName(-10.23)).toBe('Sell');
    });

    test('prep for sell operation', () => {
        expect(getOperationName(10.23)).toBe('Buy');
    });
});

describe('wallet balance tests', () => {
    const mockWallet = [
        {'currency': CURRENCY.EUR, 'balance': 126000.25},
        {'currency': CURRENCY.USD, 'balance': 6000.00},
        {'currency': CURRENCY.GBP, 'balance': 135.50}
    ];
    //checkBalanceExceeds tests
    test('balance exceeds', () => {
        expect(checkBalanceExceeds(7000, mockWallet, CURRENCY.USD)).toBe(false);
        expect(checkBalanceExceeds(-7000, mockWallet, CURRENCY.USD)).toBe(true);
    });

    //getCurrentBalance tests
    test('get current balance in currency', () => {
        expect(getCurrentBalance(mockWallet, CURRENCY.EUR)).toBe(126000.25);
        expect(getCurrentBalance(mockWallet, CURRENCY.USD)).toBe(6000.00);
        expect(getCurrentBalance(mockWallet, 'RUB')).toBe(0);
    });

    //updateWallet tests
    test('update wallet', () => {
        const updatedWallet = [
            {'currency': CURRENCY.EUR, 'balance': 126008.9131},
            {'currency': CURRENCY.USD, 'balance': 5989.75},
            {'currency': CURRENCY.GBP, 'balance': 135.50}
        ];
        expect(updateWallet(-10.25, CURRENCY.USD, 8.6631, CURRENCY.EUR, mockWallet))
            .toMatchObject(updatedWallet);
    });
});
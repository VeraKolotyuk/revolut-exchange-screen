import {useEffect} from 'react';
import {POLL_RATES_INTERVAL, RATE_PRECISION} from './constants';
import currencyToSymbolMap from 'currency-symbol-map';

export function usePollExchangeRates (fetchRatesCallback) {
    useEffect(() => {
        fetchRatesCallback();
        const interval = setInterval(() => {
            fetchRatesCallback();
        }, POLL_RATES_INTERVAL);
        return () => clearInterval(interval);
    }, [fetchRatesCallback]);
}

export function getCurrencyRate (rates, currencyToValue, currencyFromValue) {
    const rate = rates[currencyToValue] / rates[currencyFromValue];
    return isNaN(rate) ? null : rate.toFixed(RATE_PRECISION);
}

export function isExchangeDisabled (inputFromValue, inputToValue) {
    return !Number(inputFromValue) || isNaN(inputFromValue) || isNaN(inputToValue);
}

export function getExchangeFromToMsg (currencyToValue, currencyFromValue, inputFromValue, inputToValue) {
    if (inputFromValue < 0) {
        return (`${currencyToSymbolMap(currencyFromValue)}${Math.abs(inputFromValue)} to 
                ${currencyToSymbolMap(currencyToValue)}${Math.abs(inputToValue)}`);
    } else {
        return (`${currencyToSymbolMap(currencyToValue)}${Math.abs(inputToValue)} to 
                ${currencyToSymbolMap(currencyFromValue)}${Math.abs(inputFromValue)}`);
    }
}

export function getOperationName (inputFromValue) {
    return inputFromValue <= 0 ? 'Sell' : 'Buy';
}

export function getPrepForExchangedValue (inputFromValue) {
    return inputFromValue <= 0 ? 'for' : 'with';
}

export function getCurrentBalance (wallet, currency) {
    const walletItem = wallet.find(item => item.currency === currency);
    return walletItem ? walletItem.balance : 0;
}

export function checkBalanceExceeds (valueForExchange, wallet, currency) {
    if (valueForExchange && !isNaN(valueForExchange) && valueForExchange < 0){
        return getCurrentBalance(wallet, currency) < -1 * valueForExchange;
    }
    return false;
}

export function formatValue (value) {
    let convertedValue = '';
    if (!isNaN(value)) {
        convertedValue = parseFloat(value.toFixed(2));
    }
    return convertedValue;
}

export function updateWallet (exchangeFromValue, exchangeFromCurrency, exchangeToValue, exchangeToCurrency, wallet) {
    let updatedWallet = [...wallet];
    updatedWallet.find((item) => item.currency === exchangeFromCurrency)['balance'] += Number(exchangeFromValue);
    updatedWallet.find((item) => item.currency === exchangeToCurrency)['balance'] += Number(exchangeToValue);
    return updatedWallet;
}
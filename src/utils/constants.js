//Available currency in the wallet
export const CURRENCY = {
    EUR: 'EUR',
    USD: 'USD',
    GBP: 'GBP'
}

export const CURRENCY_SELECT_OPTIONS = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'GBP', label: 'GBP' }
]

// Fetch exchange rates each 10 seconds
export const POLL_RATES_INTERVAL = 1000000;

//Precision for rate info
export const RATE_PRECISION = 4;

// digits after point for exchange amount input
export const EXCHANGE_INPUT_SCALE = 2;

// error message for exceeds balance
export const EXCEEDS_BALANCE_MESSAGE = 'exceeds balance';

//Type of value for top input
export const INPUT_TO_VALUE_TYPE = 'inputToValue';

//Type of value for bottom input
export const INPUT_FROM_VALUE_TYPE = 'inputFromValue';

//Type of value for top currency select
export const CURRENCY_FROM_VALUE_TYPE = 'currencyFromValue';

//Type of value for bottom currency select
export const CURRENCY_TO_VALUE_TYPE = 'currencyToValue'
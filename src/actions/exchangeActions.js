import ACTION_TYPES from './actionTypes';
import RequestSendApi from '../utils/RequestSendApi';
import { updateWallet } from '../utils/exchangeUtils';

export function fetchRatesSuccess(rates) {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.FETCH_RATES_SUCCESS,
            rates: {'USD': 1, 'EUR': 0.845185, 'GBP': 0.724022}
        });
    };
}

export function fetchRates() {
    return dispatch => {
        return RequestSendApi
            .fetchRates()
            .then(response => {
                return dispatch(fetchRatesSuccess(response.rates));
            })
            .catch(err => {
                console.log(err);
            });
    };
}

export function exchange(exchangeFromValue, exchangeFromCurrency, exchangeToValue, exchangeToCurrency, wallet) {
    let updatedWallet = updateWallet(exchangeFromValue,
                                    exchangeFromCurrency,
                                    exchangeToValue,
                                    exchangeToCurrency,
                                    wallet);

    return dispatch => {
        dispatch({
            type: ACTION_TYPES.GET_USER_WALLET_SUCCESS,
            wallet: updatedWallet
        });
    };
}

export function toggleExchangeSuccessModal(isShown) {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.TOGGLE_EXCHANGE_SUCCESS_MODAL,
            showExchangeSuccessModal: isShown
        });
    };
}
import ACTION_TYPES from './actionTypes';
import RequestSendApi from '../utils/RequestSendApi';
import { updateWallet } from '../utils/exchangeUtils';

export function fetchRatesSuccess(rates) {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.FETCH_RATES_SUCCESS,
            rates: rates
        });
    };
}

export function fetchRates() {
    const mockRates = {'USD': 1, 'EUR': 0.845185, 'GBP': 0.724022};
    return dispatch => {
        return RequestSendApi
            .fetchRates()
            .then(response => {
                if (response.error) {
                    //For interface testing in case api is not available
                    //**** Temporary *****
                    console.log(response.error);
                    return dispatch(fetchRatesSuccess(mockRates));
                }
                return dispatch(fetchRatesSuccess(response.rates));
            })
            .catch(err => {
                //For interface testing in case api is not available
                //**** Temporary *****
                console.log(err);
                return dispatch(fetchRatesSuccess(mockRates));
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
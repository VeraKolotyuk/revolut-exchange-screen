import ACTION_TYPES from "./actionTypes";
import RequestSendApi from "../utils/RequestSendApi";

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
                //return sendRequestFailure(err);
            });
    };
}

export function exchange(exchangeFromValue, exchangeFromCurrency, exchangeToValue, exchangeToCurrency, wallet) {
    let updatedWallet = [...wallet];
    updatedWallet.find((item) => item.currency === exchangeFromCurrency)['balance'] += Number(exchangeFromValue);
    updatedWallet.find((item) => item.currency === exchangeToCurrency)['balance'] += Number(exchangeToValue);

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
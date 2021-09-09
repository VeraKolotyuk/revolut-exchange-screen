import ACTION_TYPES from './actionTypes';
import RequestSendApi from '../utils/RequestSendApi';

export function getUserBalanceSuccess(data) {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.GET_USER_WALLET_SUCCESS,
            wallet: [{"currency": "EUR", "balance": 126000.25},{"currency": "USD", "balance": 6000.00},{"currency": "GBP", "balance": 135.50}]
        });
    };
}

export function getUserBalance() {
    return dispatch => {
        return RequestSendApi
            .get(RequestSendApi.userWalletURL)
            .then((res) => {
                return res.text();
            })
            .then(response => {
                return dispatch(getUserBalanceSuccess(response.rates));
            })
            .catch(err => {
                //return sendRequestFailure(err);
            });
    };
}
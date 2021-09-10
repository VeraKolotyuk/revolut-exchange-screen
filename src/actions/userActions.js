import ACTION_TYPES from './actionTypes';
import {USER_WALLET} from '../utils/constants';

export function getUserBalance() {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.GET_USER_WALLET_SUCCESS,
            wallet: USER_WALLET
        });
    };
}
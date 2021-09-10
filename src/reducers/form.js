import ACTION_TYPES from '../actions/actionTypes';
import {CURRENCY} from '../utils/constants';

const form = (
    state = {
        inputFromValue: '',
        inputToValue: '',
        currencyFromValue: CURRENCY.EUR,
        currencyToValue: CURRENCY.USD
    },
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.CURRENCY_INPUT_CHANGE:
            return {
                ...state,
                ...action.inputData
            };
        case ACTION_TYPES.CURRENCY_SELECT_CHANGE:
            return {
                ...state,
                ...action.selectData
            };
        default:
            return state;
    }
};

export default form;
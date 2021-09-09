import ACTION_TYPES from '../actions/actionTypes';
import {CURRENCY} from "../utils/constants";

const form = (
    state = {
        inputFromValue: 0,
        inputToValue: 0,
        currencyFromValue: CURRENCY.EUR,
        currencyToValue: CURRENCY.USD
    },
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.CURRENCY_INPUT_CHANGE:
            let inputData = {};
            inputData[action.inputType] = action.value;
            return {
                ...state,
                ...inputData
            };
        case ACTION_TYPES.CURRENCY_SELECT_CHANGE:
            let selectData = {};
            selectData[action.selectType] = action.currency;
            return {
                ...state,
                ...selectData
            };
        default:
            return state;
    }
};

export default form;
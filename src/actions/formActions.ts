import ACTION_TYPES from './actionTypes';
import {INPUT_FROM_VALUE_TYPE, INPUT_TO_VALUE_TYPE} from '../utils/constants';

export const onInputChange = ( value: string, inputType: string ) => {
    let inputData = {};
    inputData[inputType] = value;
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CURRENCY_INPUT_CHANGE,
            inputData
        });
    };
};


export const onCurrencySelectChange = ( currency: string, selectType: string ) => {
    let selectData = {};
    selectData[selectType] = currency;
    let inputFromData = {};
    inputFromData[INPUT_FROM_VALUE_TYPE] = 0;
    let inputToData = {};
    inputToData[INPUT_TO_VALUE_TYPE] = 0;

    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CURRENCY_SELECT_CHANGE,
            selectType,
            selectData
        });
        dispatch({
            type: ACTION_TYPES.CURRENCY_INPUT_CHANGE,
            inputData: inputFromData
        });
        dispatch({
            type: ACTION_TYPES.CURRENCY_INPUT_CHANGE,
            inputData: inputToData
        });
    };
};
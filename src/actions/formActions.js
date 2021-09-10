import ACTION_TYPES from './actionTypes';

export const onInputChange = ( value, inputType ) => {
    let inputData = {};
    inputData[inputType] = value;
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CURRENCY_INPUT_CHANGE,
            value,
            inputData
        });
    };
};


export const onCurrencySelectChange = ( currency, selectType ) => {
    let selectData = {};
    selectData[selectType] = currency;
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CURRENCY_SELECT_CHANGE,
            selectType,
            selectData
        });
    };
};
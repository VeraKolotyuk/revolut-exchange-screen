import ACTION_TYPES from './actionTypes';

export const onInputChange = ( value, inputType ) => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CURRENCY_INPUT_CHANGE,
            value,
            inputType
        });
    };
}


export const onCurrencySelectChange = ( currency, selectType ) => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CURRENCY_SELECT_CHANGE,
            selectType,
            currency
        });
    };
}
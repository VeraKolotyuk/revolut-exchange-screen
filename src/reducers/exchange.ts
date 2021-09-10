import ACTION_TYPES from '../actions/actionTypes';

const exchange = (
    state = {
        rates: [],
        showExchangeSuccessModal: false
    },
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_RATES_SUCCESS:
            return {
                ...state,
                rates: action.rates
            };
        case ACTION_TYPES.TOGGLE_EXCHANGE_SUCCESS_MODAL:
            return {
                ...state,
                showExchangeSuccessModal: action.showExchangeSuccessModal
            };
        default:
            return state;
    }
};

export default exchange;
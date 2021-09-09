import ACTION_TYPES from '../actions/actionTypes';

const user = (
    state = {
        wallet: [{"currency": "EUR", "balance": 126000.25},{"currency": "USD", "balance": 6000.00},{"currency": "GBP", "balance": 135.50}]
    },
    action
) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USER_WALLET_SUCCESS:
            return {
                ...state,
                wallet: action.wallet
            };
        default:
            return state;
    }
};

export default user;
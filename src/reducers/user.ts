import ACTION_TYPES from '../actions/actionTypes';

const user = (
    state = {
        wallet: []
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
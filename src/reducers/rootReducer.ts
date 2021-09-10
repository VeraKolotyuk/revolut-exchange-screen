import { combineReducers } from 'redux';
import user from './user';
import form from './form';
import exchange from './exchange';

const rootReducer = combineReducers({
    user,
    form,
    exchange
});

export default rootReducer;
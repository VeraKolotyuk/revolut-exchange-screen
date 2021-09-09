import PropTypes from 'prop-types';
import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';

const UserBalance = (props) => {
    return (<div className="user-balance-msg">Balance: {currencyToSymbolMap(props.currency)}{props.balance}</div>)
}

UserBalance.propTypes = {
    currency: PropTypes.string
}

export default UserBalance;
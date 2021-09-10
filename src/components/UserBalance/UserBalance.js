import PropTypes from 'prop-types';
import currencyToSymbolMap from 'currency-symbol-map';
import "./style.css";

const UserBalance = ({ currency, balance }) => {
    return (<div className='user-balance-msg'>Balance: {currencyToSymbolMap(currency)}{balance}</div>)
}

UserBalance.propTypes = {
    currency: PropTypes.string
}

export default UserBalance;
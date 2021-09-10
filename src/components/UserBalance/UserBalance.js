import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';

const UserBalance = ({ currency, balance }) => {
    return (<div className='user-balance-msg'>Balance: {currencyToSymbolMap(currency)}{balance}</div>);
};

export default UserBalance;
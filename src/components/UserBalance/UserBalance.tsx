import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';

type Props = {
    currency: string,
    balance: number
};

const UserBalance = ({ currency, balance }: Props) => {
    return (<div className='user-balance-msg'>Balance: {currencyToSymbolMap(currency)}{balance}</div>);
};

export default UserBalance;
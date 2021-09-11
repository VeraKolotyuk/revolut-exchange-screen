import currencyToSymbolMap from 'currency-symbol-map';
import styles from './style.module.css';

type Props = {
    currency: string,
    balance: number
};

const UserBalance = ({ currency, balance }: Props) => {
    return (<div className={styles['user-balance-msg']}>Balance: {currencyToSymbolMap(currency)}{balance}</div>);
};

export default UserBalance;
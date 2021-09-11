import currencyToSymbolMap from 'currency-symbol-map';
import styles from './style.module.css';

type Props = {
    currencyFrom: string,
    currencyTo: string,
    rate: number | null
};

const FXRate = ({currencyFrom, currencyTo, rate }: Props) => {
    return (
        <div className={styles['fx-rate']}>
            {currencyToSymbolMap(currencyFrom)}
            1 = {currencyToSymbolMap(currencyTo)}{rate}
        </div>
    );
};

export default FXRate;
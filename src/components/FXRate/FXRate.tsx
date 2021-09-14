import currencyToSymbolMap from 'currency-symbol-map';
import styles from './style.module.css';
import {FunctionComponent} from 'react';

type Props = {
    currencyFrom: string,
    currencyTo: string,
    rate: number | null
};

const FXRate: FunctionComponent<Props> = ({currencyFrom, currencyTo, rate }: Props) => {
    return (
        <div className={styles['fx-rate']}>
            {currencyToSymbolMap(currencyFrom)}
            1 = {currencyToSymbolMap(currencyTo)}{rate}
        </div>
    );
};

export default FXRate;
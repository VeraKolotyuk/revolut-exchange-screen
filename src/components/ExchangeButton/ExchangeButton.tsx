import styles from './style.module.css';
import {MouseEventHandler} from 'react';
import {getOperationName, getPrepForExchangedValue} from '../../utils/exchangeUtils';

type Props = {
    inputFromValue: number,
    currencyFromValue: string,
    currencyToValue: string,
    disabled: boolean,
    exchange: MouseEventHandler<HTMLButtonElement>
};

const ExchangeButton = ({inputFromValue, currencyFromValue, currencyToValue, disabled, exchange}: Props) => {
    const operationName = getOperationName(inputFromValue);
    const prep = getPrepForExchangedValue(inputFromValue);
    return (
        <button className={styles['exchange-button']} onClick={exchange} disabled={disabled}>
            {operationName} {currencyFromValue} {prep} {currencyToValue}
        </button>
    );
};

export default ExchangeButton;
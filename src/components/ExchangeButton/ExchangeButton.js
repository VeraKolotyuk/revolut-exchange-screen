import './style.css';
import {getOperationName, getPrepForExchangedValue} from '../../utils/exchangeUtils';

const ExchangeButton = ({inputFromValue, currencyFromValue, currencyToValue, disabled, exchange}) => {
    const operationName = getOperationName(inputFromValue);
    const prep = getPrepForExchangedValue(inputFromValue);
    return (
        <button className='exchange-button' onClick={exchange} disabled={disabled}>
            {operationName} {currencyFromValue} {prep} {currencyToValue}
        </button>
    );
};

export default ExchangeButton;
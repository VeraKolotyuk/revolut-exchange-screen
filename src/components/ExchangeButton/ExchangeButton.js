import './style.css';

const ExchangeButton = (props) => {
    //TODO::replace
    const getOperationName = () => {
        return props.inputFromValue <= 0 ? 'Sell' : 'Buy';
    }
    const getPrep = () => {
        return props.inputFromValue <= 0 ? 'for' : 'with';
    }

    return (
        <button className='exchange-button' onClick={props.exchange} disabled={props.disabled}>
            {getOperationName()} {props.currencyFromValue} {getPrep()} {props.currencyToValue}
        </button>
    )
}

export default ExchangeButton;
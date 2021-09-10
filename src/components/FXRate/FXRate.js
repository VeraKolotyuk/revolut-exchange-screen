import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';

const FXRate = (props) => {
    return (
        <div className="fx-rate">
            {currencyToSymbolMap(props.currencyFrom)}
            1 = {currencyToSymbolMap(props.currencyTo)}{props.rate}
        </div>
    );
};

export default FXRate;
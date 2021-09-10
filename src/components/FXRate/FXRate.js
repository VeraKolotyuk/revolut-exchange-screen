import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';

const FXRate = ({currencyFrom, currencyTo, rate }) => {
    return (
        <div className="fx-rate">
            {currencyToSymbolMap(currencyFrom)}
            1 = {currencyToSymbolMap(currencyTo)}{rate}
        </div>
    );
};

export default FXRate;
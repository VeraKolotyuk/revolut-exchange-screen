import PropTypes from 'prop-types';
import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';

const FXRate = (props) => {
    return (
        <div className="fx-rate">
            {currencyToSymbolMap(props.currencyFrom)}
            1 = {currencyToSymbolMap(props.currencyTo)}{props.rate}
        </div>
    )
}

FXRate.propTypes = {
    currencyFrom: PropTypes.string,
    currencyTo: PropTypes.string,
    rate: PropTypes.string
}

export default FXRate;
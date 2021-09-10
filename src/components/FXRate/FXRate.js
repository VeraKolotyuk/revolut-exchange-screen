import PropTypes from 'prop-types';
import currencyToSymbolMap from 'currency-symbol-map';
import './style.css';
import {RATE_PRECISION} from '../../utils/constants';

const FXRate = (props) => {
    return (
        <div className="fx-rate">
            {currencyToSymbolMap(props.currencyFrom)}
            1 = {currencyToSymbolMap(props.currencyTo)}{props.rate.toFixed(RATE_PRECISION)}
        </div>
    )
}

FXRate.propTypes = {
    currencyFrom: PropTypes.string,
    currencyTo: PropTypes.string,
    rate: PropTypes.number
}

export default FXRate;
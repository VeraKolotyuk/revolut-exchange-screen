import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AmountInput from '../AmountInput/AmountInput';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import UserBalance from '../UserBalance/UserBalance';
import {onCurrencySelectChange, onInputChange} from '../../actions/formActions';
import {getUserBalance} from '../../actions/userActions';
import {exchange, fetchRates} from '../../actions/exchangeActions';
import './style.css';
import {formatValue, getCurrentBalance, checkBalanceExceeds} from '../../utils/exchangeUtils';
import {INPUT_TO_VALUE_TYPE,
        INPUT_FROM_VALUE_TYPE,
        CURRENCY_FROM_VALUE_TYPE,
        CURRENCY_TO_VALUE_TYPE
} from '../../utils/constants';

const ExchangeForm = ({wallet,
                      onInputChange,
                      currencyRate,
                      inputFromValue,
                      inputToValue,
                      currencyFromValue,
                      currencyToValue,
                      onSelectChange
}) => {
    const inputToChangeHandler = (value) => {
        onInputChange(value, INPUT_TO_VALUE_TYPE);
        let convertedValue = value / currencyRate * -1;
        onInputChange(formatValue(convertedValue), INPUT_FROM_VALUE_TYPE);
    };

    const inputFromChangeHandler = (value) => {
        onInputChange(value, INPUT_FROM_VALUE_TYPE);
        let convertedValue = currencyRate * value * -1;
        onInputChange(formatValue(convertedValue), INPUT_TO_VALUE_TYPE);
    };

    return (
        <div className='exchange-form'>
            <div className='exchange-form-row'>
                <div>
                    <CurrencySelect
                        value={currencyFromValue}
                        onSelectChangeHandler={(selected) => {
                            onSelectChange(selected.value, CURRENCY_FROM_VALUE_TYPE);
                        }}
                    />
                    <UserBalance currency={currencyFromValue} balance={getCurrentBalance(wallet, currencyFromValue)} />
                </div>
                <AmountInput
                    value={inputFromValue}
                    onInputChangeHandler = {(e) => {
                        inputFromChangeHandler(e.target.value);
                    }}
                    showError={checkBalanceExceeds(inputFromValue, wallet, currencyFromValue)}
                />
            </div>
            <div className='exchange-form-row'>
                <div>
                    <CurrencySelect
                        value={currencyToValue}
                        onSelectChangeHandler={(selected) => {
                            onSelectChange(selected.value, CURRENCY_TO_VALUE_TYPE);
                        }}
                    />
                    <UserBalance currency={currencyToValue}
                                 balance={getCurrentBalance(wallet, currencyToValue)}
                    />
                </div>
                <AmountInput
                    value={inputToValue}
                    onInputChangeHandler = {(e) => {
                        inputToChangeHandler(e.target.value);
                    }}
                    showError={checkBalanceExceeds(inputToValue, wallet, currencyToValue)}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    onInputChange: bindActionCreators(onInputChange, dispatch),
    onSelectChange: bindActionCreators(onCurrencySelectChange, dispatch),
    getUserBalance: bindActionCreators(getUserBalance, dispatch),
    fetchRates: bindActionCreators(fetchRates, dispatch),
    exchange: bindActionCreators(exchange, dispatch),
});

const mapStateToProps = store => ({
    inputFromValue: store.form.inputFromValue,
    inputToValue: store.form.inputToValue,
    currencyFromValue: store.form.currencyFromValue,
    currencyToValue: store.form.currencyToValue,
    wallet: store.user.wallet,
    rates: store.exchange.rates
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExchangeForm);

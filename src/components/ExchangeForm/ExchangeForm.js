import AmountInput from "../AmountInput/AmountInput";
import CurrencySelect from "../CurrencySelect/CurrencySelect";
import UserBalance from "../UserBalance/UserBalance";
import {bindActionCreators} from "redux";
import {onCurrencySelectChange, onInputChange} from "../../actions/formActions";
import {getUserBalance} from "../../actions/actions";
import {exchange, fetchRates} from "../../actions/exchangeActions";
import {connect} from "react-redux";
import './style.css';

const ExchangeForm = (props) => {
    const getCurrentBalance = (currency) => {
        const walletItem = props.wallet.find((item) => {
            return item.currency === currency;
        });
        return walletItem ? walletItem.balance : 0;
    }

    const inputToChangeHandler = (value) => {
        props.onInputChange(value, 'inputToValue')
        let convertedValue = value / props.currencyRate * -1;
        if (!isNaN(convertedValue)) {
            convertedValue = parseFloat(convertedValue.toFixed(2));
        } else {
            convertedValue = '';
        }
        props.onInputChange(convertedValue, 'inputFromValue')
    }

    const inputFromChangeHandler = (value) => {
        props.onInputChange(value, 'inputFromValue')
        let convertedValue = props.currencyRate * value * -1;
        if (!isNaN(convertedValue)) {
            convertedValue = parseFloat(convertedValue.toFixed(2));
        } else {
            convertedValue = '';
        }
        props.onInputChange(convertedValue, 'inputToValue')
    }

    const isBalanceExceeds = (currency, value) => {
        if (value && !isNaN(value) && value < 0){
            return getCurrentBalance(currency) < -1 * value;
        }
        return false;
    }

    return (
        <div className="exchange-form">
            <div className="exchange-form-row">
                <div>
                    <CurrencySelect
                        value={props.currencyFromValue}
                        onSelectChangeHandler={(selected) => {
                            props.onSelectChange(selected.value, 'currencyFromValue')
                        }}
                    />
                    <UserBalance currency={props.currencyFromValue} balance={getCurrentBalance(props.currencyFromValue)} />
                </div>
                <AmountInput
                    value={props.inputFromValue}
                    onInputChangeHandler = {(e) => {
                        inputFromChangeHandler(e.target.value)
                    }}
                    showError={isBalanceExceeds(props.currencyFromValue, props.inputFromValue)}
                />
            </div>
            <div className="exchange-form-row">
                <div>
                    <CurrencySelect
                        value={props.currencyToValue}
                        onSelectChangeHandler={(selected) => {
                            props.onSelectChange(selected.value, 'currencyToValue')
                        }}
                    />
                    <UserBalance currency={props.currencyToValue}
                                 balance={getCurrentBalance(props.currencyToValue)}
                    />
                </div>
                <AmountInput
                    value={props.inputToValue}
                    onInputChangeHandler = {(e) => {
                        inputToChangeHandler(e.target.value)
                    }}
                    showError={isBalanceExceeds(props.currencyToValue, props.inputToValue)}
                />
            </div>
        </div>
    )
}

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

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AmountInput from '../AmountInput/AmountInput';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import UserBalance from '../UserBalance/UserBalance';
import {onCurrencySelectChange, onInputChange} from '../../actions/formActions';
import {getUserBalance} from '../../actions/userActions';
import {exchange, fetchRates} from '../../actions/exchangeActions';
import styles from './style.module.css';
import {formatValue, getCurrentBalance, checkBalanceExceeds} from '../../utils/exchangeUtils';
import {INPUT_TO_VALUE_TYPE,
        INPUT_FROM_VALUE_TYPE,
        CURRENCY_FROM_VALUE_TYPE,
        CURRENCY_TO_VALUE_TYPE
} from '../../utils/constants';

type Props = {
    wallet: [any],
    onInputChange: (a: string, b: string) => void,
    currencyRate: number | null,
    inputFromValue: number,
    inputToValue: number,
    currencyFromValue: string,
    currencyToValue: string,
    onSelectChange: (a: string, b: string) => void,
};

interface Options {
    value: string,
    label: string
}

const ExchangeForm = ({wallet,
                      onInputChange,
                      currencyRate,
                      inputFromValue,
                      inputToValue,
                      currencyFromValue,
                      currencyToValue,
                      onSelectChange
}: Props) => {
    const inputToChangeHandler = (value: string) => {
        onInputChange(value, INPUT_TO_VALUE_TYPE);
        //TODO:: extract method
        let convertedValue = Number(value) / Number(currencyRate) * -1;
        onInputChange(formatValue(convertedValue), INPUT_FROM_VALUE_TYPE);
    };

    const inputFromChangeHandler = (value: string) => {
        onInputChange(value, INPUT_FROM_VALUE_TYPE);
        let convertedValue = Number(currencyRate) * Number(value) * -1;
        onInputChange(formatValue(convertedValue), INPUT_TO_VALUE_TYPE);
    };

    return (
        <div className={styles['exchange-form']}>
            <div className={styles['exchange-form-row']}>
                <div>
                    <CurrencySelect
                        value={currencyFromValue}
                        onSelectChangeHandler={(selected: Options) => {
                            onSelectChange(selected.value, CURRENCY_FROM_VALUE_TYPE);
                        }}
                    />
                    <UserBalance currency={currencyFromValue} balance={getCurrentBalance(wallet, currencyFromValue)} />
                </div>
                <AmountInput
                    value={inputFromValue}
                    onInputChangeHandler = {(e: { target: HTMLInputElement }) => {
                        inputFromChangeHandler(e.target.value);
                    }}
                    showError={checkBalanceExceeds(inputFromValue, wallet, currencyFromValue)}
                />
            </div>
            <div className={styles['exchange-form-row']}>
                <div>
                    <CurrencySelect
                        value={currencyToValue}
                        onSelectChangeHandler={(selected: Options) => {
                            onSelectChange(selected.value, CURRENCY_TO_VALUE_TYPE);
                        }}
                    />
                    <UserBalance currency={currencyToValue}
                                 balance={getCurrentBalance(wallet, currencyToValue)}
                    />
                </div>
                <AmountInput
                    value={inputToValue}
                    onInputChangeHandler = {(e: { target: HTMLInputElement }) => {
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

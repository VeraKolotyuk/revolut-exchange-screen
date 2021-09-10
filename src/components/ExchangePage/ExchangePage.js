import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useEffect, Fragment} from 'react';

import Header from '../Header/Header';
import FXRate from '../FXRate/FXRate';
import ExchangeForm from '../ExchangeForm/ExchangeForm';
import ExchangeButton from '../ExchangeButton/ExchangeButton';
import ExchangeSuccessModal from '../ExchangeSuccessModal/ExchangeSuccessModal';
import {
    usePollExchangeRates,
    getCurrencyRate,
    isExchangeDisabled,
    getExchangeFromToMsg, checkBalanceExceeds
} from '../../utils/exchangeUtils';
import {onCurrencySelectChange, onInputChange} from '../../actions/formActions';
import {getUserBalance} from '../../actions/userActions';
import {exchange, fetchRates, toggleExchangeSuccessModal} from '../../actions/exchangeActions';

const ExchangePage = ({ inputFromValue,
                        inputToValue,
                        currencyFromValue,
                        currencyToValue,
                        wallet,
                        showExchangeSuccessModal,
                        getUserBalance,
                        fetchRates,
                        toggleExchangeSuccessModal,
                        exchange,
                        rates
}) => {
    useEffect(() => {
        getUserBalance();
    }, [getUserBalance]);

    usePollExchangeRates(fetchRates);

    const onExchangeClick = () => {
        exchange(inputFromValue, currencyFromValue, inputToValue, currencyToValue, wallet);
        toggleExchangeSuccessModal(true);
    };

    const exchangeFromToMessage = getExchangeFromToMsg( currencyToValue,
                                                        currencyFromValue,
                                                        inputFromValue,
                                                        inputToValue
                                                    );
    const currencyRate = getCurrencyRate(rates, currencyToValue, currencyFromValue);
    const exchangeDisabled = isExchangeDisabled(inputFromValue, inputToValue);
    const balanceExceeds = checkBalanceExceeds(inputFromValue, wallet, currencyFromValue) ||
                            checkBalanceExceeds(inputToValue, wallet, currencyToValue);
    return (
        <Fragment>
            <Header currency={currencyFromValue} inputFromValue={inputFromValue} />
            <FXRate currencyFrom={currencyFromValue}
                    currencyTo={currencyToValue}
                    rate={currencyRate}
            />

            <ExchangeForm currencyRate={currencyRate} />

            <ExchangeButton exchange={onExchangeClick}
                            inputFromValue={inputFromValue}
                            currencyFromValue={currencyFromValue}
                            currencyToValue={currencyToValue}
                            disabled={exchangeDisabled || balanceExceeds}
            />

            <ExchangeSuccessModal showExchangeSuccessModal={showExchangeSuccessModal}
                                  toggleExchangeSuccessModal={toggleExchangeSuccessModal}
                                  exchangeFromToMessage={exchangeFromToMessage}
            />
        </Fragment>
    )
}
const mapDispatchToProps = dispatch => ({
    onInputChange: bindActionCreators(onInputChange, dispatch),
    onSelectChange: bindActionCreators(onCurrencySelectChange, dispatch),
    getUserBalance: bindActionCreators(getUserBalance, dispatch),
    fetchRates: bindActionCreators(fetchRates, dispatch),
    exchange: bindActionCreators(exchange, dispatch),
    toggleExchangeSuccessModal: bindActionCreators(toggleExchangeSuccessModal, dispatch),
});

const mapStateToProps = store => ({
    inputFromValue: store.form.inputFromValue,
    inputToValue: store.form.inputToValue,
    currencyFromValue: store.form.currencyFromValue,
    currencyToValue: store.form.currencyToValue,
    wallet: store.user.wallet,
    rates: store.exchange.rates,
    showExchangeSuccessModal: store.exchange.showExchangeSuccessModal
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExchangePage);
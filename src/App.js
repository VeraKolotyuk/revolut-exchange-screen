import './App.css';
import {useEffect} from 'react';
import Modal from 'react-modal';
import FXRate from './components/FXRate/FXRate';
import ExchangeButton from './components/ExchangeButton/ExchangeButton';
import {onCurrencySelectChange, onInputChange} from "./actions/formActions";
import {fetchRates, exchange, toggleExchangeSuccessModal} from './actions/exchangeActions';
import {getUserBalance} from "./actions/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Header from "./components/Header/Header";
import ExchangeForm from "./components/ExchangeForm/ExchangeForm"
import ExchangeSuccessModal from "./components/ExchangeSuccessModal/ExchangeSuccessModal";
import currencyToSymbolMap from "currency-symbol-map";

Modal.setAppElement('#root')

const RevolutApp = (props) => {
    useEffect(() => {
        props.getUserBalance();
        props.fetchRates();
    }, []);

    //todo:: add interval for fetch rates

    const exchange = () => {
        props.exchange(props.inputFromValue, props.currencyFromValue, props.inputToValue, props.currencyToValue, props.wallet);
        props.toggleExchangeSuccessModal(true);
    }

    const getCurrencyRate = () => {
        return props.rates[props.currencyToValue] / props.rates[props.currencyFromValue];
    }

    const getFromToMsg = () => {
        if (props.inputFromValue < 0) {
            return (`${currencyToSymbolMap(props.currencyFromValue)}${Math.abs(props.inputFromValue)} to 
                ${currencyToSymbolMap(props.currencyToValue)}${Math.abs(props.inputToValue)}`);
        } else {
            return (`${currencyToSymbolMap(props.currencyToValue)}${Math.abs(props.inputToValue)} to 
                ${currencyToSymbolMap(props.currencyFromValue)}${Math.abs(props.inputFromValue)}`);
        }
    }

    //TODO:: add disable button when balance exceeded
    return (
        <div className="container">
            <Header currency={props.currencyFromValue}
                    inputFromValue={props.inputFromValue}
            />
            <FXRate currencyFrom={props.currencyFromValue}
                    currencyTo={props.currencyToValue}
                    rate={getCurrencyRate()}
            />

            <ExchangeForm currencyRate={getCurrencyRate()}/>

            <ExchangeButton exchange={exchange}
                            inputFromValue={props.inputFromValue}
                            currencyFromValue={props.currencyFromValue}
                            currencyToValue={props.currencyToValue}
                            disabled={isNaN(props.inputFromValue) || isNaN(props.inputToValue)}
            />

            <ExchangeSuccessModal showExchangeSuccessModal={props.showExchangeSuccessModal}
                                  toggleExchangeSuccessModal={props.toggleExchangeSuccessModal}
                                  getFromToMsg={getFromToMsg}
            />
        </div>
    );
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
)(RevolutApp);
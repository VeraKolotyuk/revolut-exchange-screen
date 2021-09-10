import ReactModal from 'react-modal';
import RevolutLoader from '../Loader/Loader';
import './style.css';

const ExchangeSuccessModal = ({ showExchangeSuccessModal, exchangeFromToMessage, toggleExchangeSuccessModal }) => {
    return (
        <ReactModal
            isOpen={showExchangeSuccessModal}
            onRequestClose={() => {toggleExchangeSuccessModal(false)}}
        >
            <div className='exchange-success-modal'>
                <div className='loader'><RevolutLoader /></div>
                <div>You exchanged</div>
                <div className='exchanged-info'>{exchangeFromToMessage}</div>
            </div>
        </ReactModal>
    )
}

export default ExchangeSuccessModal;
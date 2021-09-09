import RevolutLoader from '../Loader/Loader';
import './style.css';
import ReactModal from 'react-modal';

const ExchangeSuccessModal = (props) => {
    return (
        <ReactModal>
            isOpen={props.showExchangeSuccessModal}
            onRequestClose={() => {props.toggleExchangeSuccessModal(false)}}
            >
            <div className="exchange-success-modal">
                <div className="loader"><RevolutLoader /></div>
                <div>You exchanged</div>
                <div className="exchanged-info">{props.getFromToMsg()}</div>
            </div>
        </ReactModal>
    )
}

export default ExchangeSuccessModal;
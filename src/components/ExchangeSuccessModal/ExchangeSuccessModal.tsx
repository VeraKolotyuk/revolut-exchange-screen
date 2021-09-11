import ReactModal from 'react-modal';
import RevolutLoader from '../Loader/Loader';
import styles from './style.module.css';

type Props = {
    showExchangeSuccessModal: boolean,
    exchangeFromToMessage: string,
    toggleExchangeSuccessModal: (a:boolean) => void
}

const ExchangeSuccessModal = ({ showExchangeSuccessModal, exchangeFromToMessage, toggleExchangeSuccessModal }: Props) => {
    return (
        <ReactModal
            style={{
                content: {
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    margin: 'auto',
                    width: '450px',
                    background: '#fff',
                    overflow: 'auto',
                    outline: 'none',
                    padding: '20px',
                    boxShadow: '0 0 30px rgba(153, 153, 153, 0.15)',
                    borderRadius: '15px',
                    border: 'none'
                }
            }}
            isOpen={showExchangeSuccessModal}
            onRequestClose={() => {toggleExchangeSuccessModal(false);}}
        >
            <div className={styles['exchange-success-modal']}>
                <div className={styles['loader']}><RevolutLoader /></div>
                <div>You exchanged</div>
                <div className={styles['exchanged-info']}>{exchangeFromToMessage}</div>
            </div>
        </ReactModal>
    );
};

export default ExchangeSuccessModal;
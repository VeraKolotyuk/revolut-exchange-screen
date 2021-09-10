import './App.css';
import Modal from 'react-modal';
import ExchangePage from './components/ExchangePage/ExchangePage';

Modal.setAppElement('#root');

const RevolutApp = () => {
    return (
        <div className='container'>
            <ExchangePage />
        </div>
    );
};

export default RevolutApp;
import IMask from 'imask';
import {useRef, useEffect} from 'react';
import './style.css';
import {EXCEEDS_BALANCE_MESSAGE, EXCHANGE_INPUT_SCALE} from '../../utils/constants';

const AmountInput = ({ value, onInputChangeHandler, showError }) => {
    const input = useRef(null);
    useEffect(() => {
        IMask(input.current, {
            mask: Number,
            scale: EXCHANGE_INPUT_SCALE,
            signed: true,
            thousandsSeparator: '',
            padFractionalZeros: false,
            normalizeZeros: true,
            radix: '.',
            mapToRadix: ['.']
        });
    },[])

    return (
        <div>
            <input
                ref={input}
                type="text"
                value={value}
                onChange={onInputChangeHandler}
                placeholder={"0"}
                className="exchange-amount-input"
            />
            {showError && <div className="form-error">{EXCEEDS_BALANCE_MESSAGE}</div>}
        </div>
    )
}

export default AmountInput;
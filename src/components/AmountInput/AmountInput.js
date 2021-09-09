import IMask from 'imask';
import {useRef, useEffect} from 'react';
import './style.css';

const AmountInput = (props) => {
    const input = useRef(null);
    useEffect(() => {
        IMask(input.current, {
            mask: Number,  // enable number mask
            scale: 2,  // digits after point, 0 for integers
            signed: true,  // disallow negative
            thousandsSeparator: '',  // any single char
            padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
            normalizeZeros: true,  // appends or removes zeros at ends
            radix: '.',  // fractional delimiter
            mapToRadix: ['.']
        });
    },[])

    return (
        <div>
            <input
                ref={input}
                type="text"
                value={props.value}
                onChange={props.onInputChangeHandler}
                placeholder={"0"}
                className="exchange-amount-input"
            />
            {props.showError && <div className="form-error">exceeds balance</div>}
        </div>
    )
}

export default AmountInput;
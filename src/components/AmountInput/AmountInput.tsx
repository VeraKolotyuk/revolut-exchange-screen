import {IMaskInput} from 'react-imask';
import './style.css';
import {EXCEEDS_BALANCE_MESSAGE, EXCHANGE_INPUT_SCALE} from '../../utils/constants';

type Props = {
    value: number,
    showError: boolean,
    onInputChangeHandler: (a: { target: HTMLInputElement;}) => void,
};

const AmountInput = ({value, onInputChangeHandler, showError }: Props) => {
    const inputIMaskProps = {
        mask: Number,
        scale: EXCHANGE_INPUT_SCALE,
        signed: true,
        thousandsSeparator: '',
        padFractionalZeros: false,
        normalizeZeros: true,
        radix: '.',
        mapToRadix: ['.']
    };

    return (
        <div>
            <IMaskInput
                {...inputIMaskProps}
                type='text'
                value={value.toString()}
                onChange={onInputChangeHandler}
                placeholder={'0'}
                className="exchange-amount-input"
            />
            {showError && <div className="form-error">{EXCEEDS_BALANCE_MESSAGE}</div>}
        </div>
    );
};

export default AmountInput;
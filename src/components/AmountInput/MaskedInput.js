import {IMaskInput} from 'react-imask';
import {EXCHANGE_INPUT_SCALE} from '../../utils/constants';

const MaskedInput = ({value, onInputChangeHandler}) => {
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
        <IMaskInput
            {...inputIMaskProps}
            type='text'
            value={value.toString()}
            onChange={onInputChangeHandler}
            placeholder={'0'}
            className="exchange-amount-input"
        />
    );
};

export default MaskedInput;
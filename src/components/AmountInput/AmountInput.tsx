import MaskedInput from './MaskedInput';
import styles from './style.module.css';
import {EXCEEDS_BALANCE_MESSAGE} from '../../utils/constants';
import {FunctionComponent} from 'react';

type Props = {
    value: number,
    showError: boolean,
    onInputChangeHandler: (a: { target: HTMLInputElement;}) => void,
};

const AmountInput: FunctionComponent<Props> = ({value, onInputChangeHandler, showError }: Props) => {
    return (
        <div>
            <MaskedInput
                value={value.toString()}
                onInputChangeHandler={onInputChangeHandler}
            />
            {showError && <div className={styles['form-error']}>{EXCEEDS_BALANCE_MESSAGE}</div>}
        </div>
    );
};

export default AmountInput;
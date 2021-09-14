import Select from 'react-select';
import {FunctionComponent, useState} from 'react';
import styles from './style.module.css';
import {CURRENCY_SELECT_OPTIONS} from '../../utils/constants';

type Props = {
    onSelectChangeHandler: (a: Options) => void,
    value: string
};

interface Options {
    value: string,
    label: string
}

const CurrencySelect: FunctionComponent<Props> = ({ value, onSelectChangeHandler }: Props) => {
    const [selected, setSelected] = useState(value);

    const onChange = (option: Options) => {
        onSelectChangeHandler(option);
        setSelected(option.value);
    };

    return (
        <Select className={styles['currency-select']}
                onChange={onChange}
                options={CURRENCY_SELECT_OPTIONS}
                value={{value: selected, label: selected}}
        />
    );
};

export default CurrencySelect;
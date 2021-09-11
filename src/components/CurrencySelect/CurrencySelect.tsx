import Select from 'react-select';
import {useState} from 'react';
import styles from './style.module.css';
import {CURRENCY_SELECT_OPTIONS} from '../../utils/constants';

type Props = {
    onSelectChangeHandler: (a: Options) => void,
    value: string,
    valueToRemove: string
};

interface Options {
    value: string,
    label: string
}

const CurrencySelect = ({ value, onSelectChangeHandler, valueToRemove }: Props) => {
    const [selected, setSelected] = useState(value);

    const onChange = (option: Options) => {
        onSelectChangeHandler(option);
        setSelected(option.value);
    };

    return (
        <Select className={styles['currency-select']}
                onChange={onChange}
                options={CURRENCY_SELECT_OPTIONS.filter(option => option.value !== valueToRemove)}
                value={{value: selected, label: selected}}
        />
    );
};

export default CurrencySelect;
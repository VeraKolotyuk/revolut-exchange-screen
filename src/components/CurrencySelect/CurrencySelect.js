import Select from 'react-select';
import {useState} from 'react';
import './style.css';
import {CURRENCY_SELECT_OPTIONS} from '../../utils/constants';

const CurrencySelect = ({ value, onSelectChangeHandler }) => {
    const [selected, setSelected] = useState(value);

    const onChange = (option) => {
        onSelectChangeHandler(option);
        setSelected(option.value);
    }

    return (
        <Select className="currency-select"
                onChange={onChange}
                options={CURRENCY_SELECT_OPTIONS}
                value={{value: selected, label: selected}}
        />
    )
}

export default CurrencySelect;
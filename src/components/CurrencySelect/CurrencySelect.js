import Select from 'react-select';
import {useState} from 'react';
import './style.css';

const CurrencySelect = (props) => {
    const [selected, setSelected] = useState(props.value);
    const options = [
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
        { value: 'GBP', label: 'GBP' }
    ]

    const onChange = (option) => {
        props.onSelectChangeHandler(option);
        setSelected(option.value);
    }

    return (
        <Select className="currency-select"
                onChange={onChange}
                options={options}
                value={{value: selected, label: selected}}
        />
    )
}

export default CurrencySelect;
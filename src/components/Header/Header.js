import PropTypes from 'prop-types';
import {getOperationName} from '../../utils/exchangeUtils';

const Header = ({inputFromValue, currency}) => {
    const operationName = getOperationName(inputFromValue);
    return (<h1>{operationName} {currency}</h1>)
}

Header.propTypes = {
    currency: PropTypes.string
}

export default Header;
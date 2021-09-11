import {getOperationName} from '../../utils/exchangeUtils';

type Props = {
    inputFromValue: number,
    currency: string
}

const Header = ({inputFromValue, currency}: Props) => {
    const operationName = getOperationName(inputFromValue);
    return (<h1>{operationName} {currency}</h1>);
};

export default Header;
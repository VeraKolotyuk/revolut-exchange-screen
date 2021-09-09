import PropTypes from "prop-types";

const Header = (props) => {
    const getOperationName = () => {
        return props.inputFromValue <= 0 ? 'Sell' : 'Buy';
    }
    return (<h1>{getOperationName()} {props.currency}</h1>)
}

Header.propTypes = {
    currency: PropTypes.string
}

export default Header;
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const RevolutLoader = () => {
    return (
        <Loader
            type="TailSpin"
            color="blue"
            height={80}
            width={80}
            timeout={3000}
        />
    );
};

export default RevolutLoader;
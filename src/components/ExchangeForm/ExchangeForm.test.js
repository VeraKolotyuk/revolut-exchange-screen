import ExchangeForm from './ExchangeForm';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Provider store={mockStore()}><ExchangeForm/></Provider>);
});

describe('ExchangeForm rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
import AmountInput from './AmountInput';
import { shallow, configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

configure({adapter: new Adapter()});


describe('AmountInput rendering', () => {
    it('renders correctly', () => {
        let wrapper = shallow(<Provider store={mockStore()}>
            <AmountInput value={10.23} onInputChangeHandler={jest.fn()} showError={false} />
        </Provider>);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly with error message', () => {
        let wrapper = mount(<AmountInput value={10.23} onInputChangeHandler={jest.fn()} showError={true} />);
        expect(wrapper.find('.form-error').exists()).toBeTruthy();
    });
});
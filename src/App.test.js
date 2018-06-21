import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-15';
// import createTestContext from 'react-cosmos-test/generic';

import App from './App';
import user_home from '../src/components/user_home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const { getWrapper, get } = createTestContext({ user_home });


test('redirects to home page after signing out', () => {
  const wrapper = shallow(<user_home />);
  getWrapper('.logout-btn').simulate('click');

  expect(get('url')).toBe('/');
});

it('passing test', () => {
  expect(true).toBeTruthy();
});

it('failing test', () => {
  expect(false).toBeFalsy();
});

describe('user_home', () => {
  // Tests go here
  // Enzyme.configure({ adapter: new Adapter() })
  it('wraps content in a div with .container class', () => {
    const wrapper = shallow(<user_home />);
    // const node = TestUtils.findRenderedDOMComponentWithTag(wrapper, 'div');
  });
});


// *********************** Notes ***********************

// toBeTruthy()
// toBeFalsy()
// toBe()
// toEqual()
// toBeDefined()
// toBeCalled()
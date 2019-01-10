import React from 'react';
import ReactDOM from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewBoxForm from './NewBoxForm';

// Smoke tests
it('renders without crashing', function() {
  shallow(<NewBoxForm />);
});

// Snapshot tests
it('matches snapshot', function() {
  let wrapper = shallow(<NewBoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

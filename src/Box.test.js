import React from 'react';
import ReactDOM from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Box from './Box';

// Smoke tests
it('renders without crashing', function() {
  shallow(<Box />);
});

// Snapshot tests
it('matches snapshot', function() {
  let wrapper = shallow(<Box />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

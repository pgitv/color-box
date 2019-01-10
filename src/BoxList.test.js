import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import BoxList from './BoxList';

// Smoke tests

it('renders without crashing', function() {
  shallow(<BoxList />);
});

// Snapshot Tests
it('matches snapshot', function() {
  let wrapper = shallow(<BoxList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

// Enzyme Selector Tests
// to check if the array size increased after the form input
it('updates array size with submit', function() {
  // const wrapper = shallow(<BoxList />);
  // const submitButton = wrapper.find('button');
  // submitButton.simulate('change', { box: { name: 'height', value: 30 } });

  //Make a wrapper for boxlist. May have to mount Boxlist / newBoxForm
  const listWrapper = mount(<BoxList />);
  // find the form component
  const formBox = listWrapper.find('#width');
  // set state on it by filling out the form
  expect(listWrapper.state().boxes).toEqual([]);
  // expect(listWrapper.state().boxes[0].height).toBe(0);
  // submit the form
  formBox.simulate('change', {
    target: {
      name: 'width',
      value: 100
    }
  });
  listWrapper.find('form').simulate('submit');
  // check state on wrapper
  expect(listWrapper.state().boxes[0].width).toBe(100);
  // expect(listWrapper.state().boxes[0].height).toBe(100);
});

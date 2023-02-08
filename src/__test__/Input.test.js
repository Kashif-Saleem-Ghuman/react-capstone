import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Input from '../Components/Input';

describe('testing for input', () => {
  it('test for component', () => {
    const test = render(
      <Provider store={store}>
        <Input />
      </Provider>,
    );
    expect(test).toMatchSnapshot();
  });
});

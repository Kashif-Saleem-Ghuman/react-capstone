import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Header from '../Components/Header';

describe('testing for input', () => {
  it('test for component', () => {
    const test = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>

      </Provider>,
    );
    expect(test).toMatchSnapshot();
  });
});

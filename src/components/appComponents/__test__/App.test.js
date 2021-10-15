import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Provider } from "react-redux";
import store from '../../../store'

import Apps from  '../Appy'
import App from '../../../App'

test('Appy component renders header correctly', () => {
  const component = render(<Apps />);
  const headerEle = component.getByTestId('header');
  expect(headerEle.textContent).toBe('man of steel')
});

// APP TESTS

test('App component renders header correctly', () => {
    const component = render(<Provider store={store}><App /></Provider>);
    const headerEle = component.getByTestId('header');
    expect(headerEle.textContent).toBe('Counter')
  });


test('counter component initial state is 1', () => {
    const component = render(<Provider store={store}><App /></Provider>);
    const counterEle = component.getByTestId('counter');
    expect(counterEle.textContent).toBe('1')
  });


  test('increase button displays Increase', () => {
    const component = render(<Provider store={store}><App /></Provider>);
    const counterEle = component.getByTestId('increaseBtn');
    expect(counterEle.textContent).toBe('Increase')
  });

  
  test('decrease button displays Decrease', () => {
    const component = render(<Provider store={store}><App /></Provider>);
    const counterEle = component.getByTestId('decreaseBtn');
    expect(counterEle.textContent).toBe('Decrease')
  });

  test('reset button displays reset', () => {
    const component = render(<Provider store={store}><App /></Provider>);
    const counterEle = component.getByTestId('resetBtn');
    expect(counterEle.textContent).toBe('Reset')
  });



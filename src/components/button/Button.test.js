import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  SmallButton,
  MediumButton,
  LargeButton,
  DisabledButton
} from './Button.stories';

describe('Renders button component', () => {
  test('and catch click event', () => {
    const testClick = jest.fn();
    const { container } = render(<Button onClick={testClick} />);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    fireEvent.click(btn)
    expect(testClick).toHaveBeenCalled();
  });
  test('is there any content in', () => {
    const { container } = render(<Button>Hello World</Button>);
    expect(container).toBeTruthy();
    expect(container).toHaveTextContent('Hello World');
  });
  test('the button color is blue ', () => {
    const { container } = render(<PrimaryButton/>);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    expect(btn).toHaveStyle('background-color: #007bff')
  });
  test('the button color is gray ', () => {
    const { container } = render(<SecondaryButton/>);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    expect(btn).toHaveStyle('background-color: #6c757d')
  });
  test('the button color is red ', () => {
    const { container } = render(<DangerButton/>);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    expect(btn).toHaveStyle('background-color: #dc3545')
  });
  test('the button has a small size ', () => {
    const { container } = render(<SmallButton/>);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    expect(btn).toHaveStyle('font-size: 8px')
  });
  test('the button has a medium size ', () => {
    const { container } = render(<MediumButton/>);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    expect(btn).toHaveStyle('font-size: 12px')
  });
  test('the button has a large size ', () => {
    const { container } = render(<LargeButton/>);
    expect(container).toBeTruthy();
    const btn = container.querySelector('button');
    expect(btn).toHaveStyle('font-size: 16px')
  });
  test('the button is disabled ', () => {
    const { container } = render(<DisabledButton/>);
    const btn = container.querySelector('button');
    expect(btn).toHaveAttribute('disabled');
  });
});
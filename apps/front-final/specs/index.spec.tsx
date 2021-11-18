import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '../pages/index';

/*describe('Index', () => {
  it('should render successfully', () => {
    render(<Index />);
    
   // const { baseElement } = render(<Index />);
  //  expect(baseElement).toBeTruthy();
  });
});*/

test('renders image', () => {
 render(<Index />);
 expect(
   screen.getByRole('img')
 ).toBeTruthy();
});


test('renders Button', () => {
  render(<Index />);
  expect(
    screen.getByRole('button')
  ).toBeTruthy();
 });

import { render, screen } from '@testing-library/react';

import Countries from './countries';

/*describe('Countries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Countries />);
    expect(baseElement).toBeTruthy();
  });*/

  test('renders image', () => {
    render(<Countries />);
    expect(
      screen.getByRole('img')
    ).toBeTruthy();
   });

   test('renders header', () => {
    render(<Countries />);
    expect(
      screen.getByRole('heading', {  name: /welcome to countries!/i})
    ).toBeTruthy();
   });
   test('renders list', () => {
    render(<Countries />);
    expect(
      screen.getByRole('list')
    ).toBeTruthy();
   });




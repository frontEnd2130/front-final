import { render,screen } from '@testing-library/react';

import Teams from './teams';
/*
describe('Teams', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Teams country_id="9" />);
    expect(baseElement).toBeTruthy();
  });
});*/


test('renders button', () => {
  render(<Teams country_id= "9" />);
  expect(
    screen.getByRole('button', {  name: /go back to countries/i})
  ).toBeTruthy();
 });

 test('renders image', () => {
  render(<Teams country_id= "9" />);
  expect(
    screen.getByRole('img')
  ).toBeTruthy();
 });
 test('renders header', () => {
  render(<Teams country_id= "9" />);
  expect(
    screen.getByRole('heading', {  name: /welcome to teams!/i})
  ).toBeTruthy();

 });

 test('renders list', () => {
  render(<Teams country_id= "9" />);
  expect(
    screen.getByRole('list')
  ).toBeTruthy();
 });




import { render, screen } from '@testing-library/react';
import Menu from './index';

test('should render link to homepage', () => {
  render(<Menu />);
  const homePageLink = screen.getByText('Inicial');
  expect(homePageLink).toBeInTheDocument();
});

test('should render array of links', () => {
  render(<Menu />);
  const linksArray = screen.getAllByRole('link');
  expect(linksArray).toHaveLength(4);
});

test('should not render extract link', () => {
  render(<Menu />);
  const extractPageLink = screen.queryByText('Extrato');
  expect(extractPageLink).not.toBeInTheDocument();
});

test('should render a list of link with class "link"', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});

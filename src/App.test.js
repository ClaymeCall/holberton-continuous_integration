import { render } from '@testing-library/svelte';
import App from './App.svelte';

test('renders App component', () => {
  const { container } = render(App);
  expect(container).toBeInTheDocument();
});

test('App component has main element', () => {
  const { getByRole } = render(App);
  expect(getByRole('main')).toBeInTheDocument();
});

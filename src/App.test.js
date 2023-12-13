import App from './App';
import { render, screen } from '@testing-library/react';

test('Always true test', () => {
    expect(true).toBe.true;
});

test('Heading should be Vite + React', () => {
    render(<App />);

    const headingElement = screen.getByText('Vite + React');

    expect(headingElement).toBeInTheDocument();
});

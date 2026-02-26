// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DeployPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DeployPulse/i);
    expect(titleElement).toBeInTheDocument();
});

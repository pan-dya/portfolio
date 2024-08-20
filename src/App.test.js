import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Adjust the path according to where your App component is located
// import '@testing-library/jest-dom/extend-expect';

describe('App Component', () => {
  test('renders the App component without crashing', () => {
    render(<App />);
    // This is a basic smoke test to ensure the component renders
  });
});

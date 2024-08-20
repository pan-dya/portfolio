import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Adjust the path according to where your App component is located
import '@testing-library/jest-dom/extend-expect';

describe('App Component', () => {
  test('renders the App component without crashing', () => {
    render(<App />);
    // This is a basic smoke test to ensure the component renders
  });

  test('renders the navigation links', () => {
    render(<App />);
    
    // Assuming your App component has some navigation links
    const homeLink = screen.getByText(/Home/i);
    const skillsLink = screen.getByText(/Skills/i);
    const experienceLink = screen.getByText(/Experience/i);
    const contactLink = screen.getByText(/Contact Me/i);

    expect(homeLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(experienceLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('has a logo image', () => {
    render(<App />);
    
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
  
  test('calls toggleMenu when the mobile menu is clicked', () => {
    const toggleMenuMock = jest.fn();
    render(<App toggleMenu={toggleMenuMock} />);

    // Assuming there's a button or div that triggers toggleMenu
    const menuButton = screen.getByRole('button', { name: /menu/i });
    menuButton.click();

    expect(toggleMenuMock).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { screen, render } from '@testing-library/react';
import HelloPage from './HelloPage';

// Test suite for HelloPage component
describe('HelloPage component', () => {
  
  // Test case to check if name, linkedin and github props are being rendered correctly
  it('should render the name, linkedin, and github props', () => {
    // Mock props
    const props = {
      name: 'John Doe',
      linkedin: 'https://www.linkedin.com/in/john-doe',
      github: 'https://github.com/johndoe',
    };
    // Render the component with props
    const { screen } = render(<HelloPage {...props} />);
    // Expect the name to be in the document
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    // Expect the linkedin link to have correct href attribute
    expect(screen.getByText(/linkedin/i)).toHaveAttribute('href', 'https://www.linkedin.com/in/john-doe');
    // Expect the github link to have correct href attribute
    expect(screen.getByText(/github/i)).toHaveAttribute('href', 'https://github.com/johndoe');
  });
});

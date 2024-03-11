import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe('SearchBar Component', () => {
  test('SearchBar renders correctly', () => {
    const mockOnSearch = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);
    
    expect(getByText('Search')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter city')).toBeInTheDocument();
  });

  test('SearchBar handles search input correctly', async () => {
    const mockOnSearch = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);
    const input = getByPlaceholderText('Enter city');
    const searchButton = getByText('Search');

    fireEvent.change(input, { target: { value: 'New York' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith('New York');
    });
  });
});

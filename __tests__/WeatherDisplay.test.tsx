import React from 'react';
import { render } from '@testing-library/react';
import WeatherDisplay from '../components/WeatherDisplay';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

describe('WeatherDisplay Component', () => {
  test('WeatherDisplay renders correctly', () => {
    const weatherData = {
      country: 'US',
      location: 'New York',
      condition: 'Sunny',
      temperature: 25,
      humidity: 50,
      wind_speed: 10
    };

    const { getByText } = render(<WeatherDisplay weather={weatherData} />);
    
    expect(getByText('US - New York')).toBeInTheDocument();
    expect(getByText('Condition: Sunny')).toBeInTheDocument();
    expect(getByText('Temperature: 25°C')).toBeInTheDocument();
    expect(getByText('Humidity: 50%')).toBeInTheDocument();
    expect(getByText('Wind Speed: 10 mph')).toBeInTheDocument();
  });
});

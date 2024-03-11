"use client";
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherDisplay from '../components/WeatherDisplay';
import { Weather } from "@/types/weather";
import { getWeather } from '@/services/Weather/getWeather';

const Page: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string>('');

  const fetchWeather = async (city: string) => {
    try {
      const weatherData = await getWeather(city);
      setWeather(weatherData);
      setError('');
    } catch (error: any) {
      setError('Failed to fetch weather. Try changing your search results.');
      setWeather(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Weather App 🌤️</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default Page;
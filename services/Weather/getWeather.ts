const BASE_URL = 'https://api.weatherapi.com/v1/current.json';
import { Weather } from "@/types/weather";

export const getWeather = async (city: string): Promise<Weather> => {
    const response = await fetch(`${BASE_URL}?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}`);
    if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  const weatherData: Weather = {
    location: data.location.name,
    country: data.location.country,
    temperature: data.current.temp_c,
    humidity: data.current.humidity,
    wind_speed: data.current.wind_kph,
    condition: data.current.condition.text,
  };
  return weatherData;
};

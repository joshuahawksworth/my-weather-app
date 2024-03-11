import React from 'react';
import { Weather } from "@/types/weather";

const WeatherDisplay: React.FC<{ weather: Weather }> = ({ weather }) => {
    return (
        <div className="flex justify-center">
            <div className="d-flex border flex flex-col border-gray-300 rounded p-4 max-w-lg min-w-[300px]">
                <b className="mb-2 text-center" >{weather.country} - {weather.location}</b>
                <p className="mb-2">Condition: {weather.condition}</p>
                <p className="mb-2">Temperature: {weather.temperature}°C</p>
                <p className="mb-2">Humidity: {weather.humidity}%</p>
                <p className="mb-2">Wind Speed: {weather.wind_speed} mph</p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
## Getting Started
First, this project rquires the use of [WeatherAPI service](https://www.weatherapi.com/) to retrieve weather
data. You will need to sign up to the service to optain you API KEY.

Then you will need to create a `.env.local` file in the root of your project. It should look like this:

```bash
NEXT_PUBLIC_WEATHER_API_KEY='your-api-key-here'
```
Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
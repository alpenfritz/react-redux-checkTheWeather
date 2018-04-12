# CheckTheWeather App

This app was created to practice building a simple app with React+Redux.

It let users search for a city to look up on OpenWeatherMap and retrieve some weather stats for a 5-day forecast.

![screenshot-localhost-8080-2018 04 12-22-08-14](https://user-images.githubusercontent.com/21099219/38679554-064bcc24-3e9f-11e8-9c63-2663e03dd169.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

* OpenWeatherMap API key
* React
* Redux
* React-redux
* React-sparklines
* Redux-promise
* Axios
* Webpack+Babel
* Lodash

### OpenWeatherMap API Key

To get started you also need an API key from [OpenWeatherMap](https://openweathermap.org/api). Create a file under `./config/keys.js`:

```js
module.exports = {
  openWeatherAPI: 'Your_Key'
};
```

### Installing

```bash
yarn install
```

### Development

Run webpack development server:

```bash
yarn start
```
# Weather Location ⛅

<img src="./assets/documentation-images/presentation-image.png" width="auto" />

<div align="center">
 <a href="#project">Project 🗄️</a> <a href="#how"> How ❓</a> <a href="#technologies">Technologies 💡</a> <a href="#execution">Execution 👨🏽‍💻</a> <a href="#more">More Images 🏕️</a>

</div>

<h2 id="project">Project 🖥️</h2>

This app will get access to the user's location data as the user accepts/permits the app to search it, if the user allows it, the app will show on its screen all the weather information of his location.

<h4 id="how">How 🧑‍💻</h4>

We get the user's data through the Weather API, where we enter the user's latitude and longitude and with that it will return the user's location along with the current, future weather data.
<h2 id="technologies">:rocket: Used Technologies</h2>

This project was developed with the following technologies:

- [Node 14.18](https://nodejs.org/en/)
- [React 18.2](https://reactjs.org/)
- [TypeScript 4.6.4](https://www.typescriptlang.org/)
- [Vite 3.1](https://vitejs.dev/)
- [Font-Awesome 6.2](https://fontawesome.com/docs/web/use-with/react/)
- [Styled-Components](https://github.com/styled-components/styled-components)
- [Axios](https://github.com/axios/axios)
- [Jest](https://jestjs.io/)

<h2 id="execution">Execution 🏋️‍♂️</h2>

To run the project:

👉 First we have to:
  - Clone the project by running this command in the terminal `git clone <repo_url>`;
  - Register at site [Weather API site](https://home.openweathermap.org/users/sign_up) to get the api key, as it is needed to get the climate data;
    - After registering, just go to [this address](https://home.openweathermap.org/api_keys) and copy the key already created by default;
  - Open the project folder and duplicate the .env.example file and rename the copy to .env;
    - Then, in the variable `VITE_API_KEY` put the key copied from the site;
- Open the project folder in the terminal and run:
  - `yarn` or `npm install` -> To install all dependencies;
  - `yarn dev` or `npm run dev` -> To run the project;
- To run the tests just run `yarn test` or `npm run test`.

<h2 id="more">More Images 🏕️</h2>

<div>
  <p align = "center">
    When the application starts, this will be the application's default location, showing the user that he must connect his location to the app by clicking the "Current Location" button.
 </p>
  <img src="./assets/documentation-images/default-data-image.png" alt="When the application starts, this will be the application's default location" width="auto">
</div>

<div>
  <p align = "center">
    Application with dynamic images according to the weather, temperatures and time
  </p>
  <img src="./assets/documentation-images/relative-weather-background.png" alt="Application with dynamic images according to the weather, temperatures and time" width="auto">
</div>

# Buy Cars

The project is a MERN web application called **BuyCars**, which serves as a marketplace for second-hand cars. Users can buy and sell cars on the platform. The application includes features for user authentication, car listing, filtering, editing, and deleting. This is a Solo Project Built in 2 days.

## Features

- **User Authentication**: Users can sign up and log in to the application to access the full functionality.
- **Car Listing**: Dealers can add their second-hand cars to the platform by providing details such as car model, year, price, colors, mileage, power, and maximum speed.
- **Filtering**: Users can filter cars based on price, colors, and mileage to find the desired cars more efficiently.
- **Car Editing and Deleting**: Dealers have the ability to edit and delete their listed cars to keep the inventory up to date.

## Tech Stack

The application is built using the MERN stack (MongoDB, Express, React, Node.js), TypeScript, SCSS, Redux and follows a client-server architecture.<br/>
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/scss-%231572B6.svg?style=for-the-badge&logo=scss&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### Frontend

The frontend is developed using React and Redux for state management. It includes the following dependencies:

- **react**: JavaScript library for building user interfaces.
- **react-dom**: Entry point for working with the DOM in React.
- **react-icons**: Icon library for React.
- **react-redux**: Official React bindings for Redux.
- **react-router-dom**: Declarative routing for React applications.
- **react-toastify**: Toast notifications for React.
- **redux**: Predictable state container for JavaScript apps.
- **redux-thunk**: Thunk middleware for Redux.
- **sass**: CSS extension language.
- **typescript**: Typed superset of JavaScript.
- **vite**: Fast development server and build tool for modern web apps.

### Backend

The backend is implemented using Node.js with Express.js as the web framework. It utilizes MongoDB as the database for storing car listings and user information. The backend dependencies include:

- **bcrypt**: Password hashing library.
- **cors**: Middleware for enabling CORS in Express apps.
- **dotenv**: Environment variable loader.
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **jsonwebtoken**: JSON Web Token implementation.
- **mongoose**: MongoDB object modeling tool.
- **nodemon**: Utility for automatically restarting the server during development.

## API Routes

The following table lists the available API routes and their descriptions:

| Route             | Method | Description                                                    |
|-------------------|--------|----------------------------------------------------------------|
| user/signup/      | POST   | Register user data in the database                             |
| user/signin/      | POST   | Authenticate user credentials and allow them to log in         |
| marketplace/      | GET    | Retrieve all available cars for sale                           |
| marketplace/      | POST   | Post a new car for sale in the marketplace                     |
| marketplace/:carId | PATCH  | Update specific car details (only allowed for dealers)         |
| marketplace/:carId | DELETE | Delete specific car (only allowed for dealers)                 |
| oemspec/          | GET    | Retrieve the list of Original Equipment Manufacturers (OEMs)   |
| oemspec/          | POST   | Add new Original Equipment Manufacturer's data to the database |


## Home Page
![Screenshot (36)](https://github.com/SumitPokhriyal5/hangman-word-game/assets/112632728/fbfe964c-8df6-4b0e-b1e4-9cd3c76662c5)
![Screenshot (37)](https://github.com/SumitPokhriyal5/hangman-word-game/assets/112632728/6a877079-e5c0-41d6-b834-c988b4adcf4b)

## Sell Cars Page
![Screenshot (38)](https://github.com/SumitPokhriyal5/hangman-word-game/assets/112632728/ab45a885-7138-4964-b614-b9f488ab2cba)
![Screenshot (39)](https://github.com/SumitPokhriyal5/hangman-word-game/assets/112632728/91b67224-a0d2-44a7-a06b-c81764580da4)

## SinUp Page
![Screenshot (35)](https://github.com/SumitPokhriyal5/hangman-word-game/assets/112632728/e58ebe15-3c5e-4746-b74f-f4aca30f1946)

## Login Page
![Screenshot (34)](https://github.com/SumitPokhriyal5/hangman-word-game/assets/112632728/5623102c-92bc-4c7f-9268-815d8d486df5)

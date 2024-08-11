# House: Property Selling Website

Welcome to House, the premier platform for selling and buying houses online. This platform allows users to create accounts, log in, and sell their houses. Buyers can view house details and locations on an interactive map.

## Features

- User authentication with JWT (JSON Web Token)
- User account creation and management
- House listing by sellers
- Interactive map view for house locations
- Responsive design with React 18
- Database management with Prisma ORM

## Technology Stack

- **Frontend**: React 18
- **Backend**: Node.js, Express
- **Authentication**: JWT (JSON Web Token)
- **Database**: MongoDB (via Prisma ORM)
- **Mapping Service**: Google Maps API 
- **Others**: HTML5, CSS3, JavaScript

 ## Architecture

The application is structured using the MVC (Model-View-Controller) architecture pattern:

- **Model**: Defines the data structure using Prisma ORM and manages data interaction with PostgreSQL. Models include User and House.

- **View**: The frontend is built with React 18, providing a responsive and dynamic user interface for interacting with the application.

- **Controller**: Manages the application logic and user input, interacting with models to update the view. Controllers handle API requests and responses for user authentication and house listings.


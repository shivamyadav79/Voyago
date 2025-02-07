# Voyago

Voyago is a full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to provide comprehensive travel information for cities. It displays details on hotels, restaurants, hidden gems, and more. Users can explore city histories and attractions, while an admin dashboard enables dynamic data management.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **User Authentication:**  
  Users can register and log in using JWT-based authentication.
  
- **City Information:**  
  Browse detailed information about cities, including historical data and attractions (hotels, restaurants, hidden gems).

- **Dynamic Data Management:**  
  An admin dashboard allows adding, editing, and removing city and place details.

- **Responsive UI:**  
  Engaging, colorful, and intuitive user interface built with React and Bootstrap.

- **SEO Optimized:**  
  Basic SEO enhancements using semantic HTML and meta tags.

- **Testing:**  
  Backend unit tests with Jest and Supertest; frontend end-to-end tests with Cypress.

## Technologies

- **Backend:**  
  - Node.js, Express.js  
  - MongoDB & Mongoose  
  - JSON Web Tokens (JWT)  
  - ES Modules (using `import`/`export`)

- **Frontend:**  
  - React (using Vite)  
  - Bootstrap for styling  
  - React Router for routing

- **Testing:**  
  - Jest & Supertest (Backend)  
  - Cypress (Frontend)

- **Deployment:**  
  - Heroku (Backend)  
  - Vercel (Frontend)  
  - MongoDB Atlas (Database)

## Folder Structure

Voyago/ ├── backend/ │ ├── config/ # Database and configuration files │ ├── controllers/ # API controllers for business logic │ ├── middleware/ # Custom middleware (e.g., JWT authentication) │ ├── models/ # Mongoose models (User, City, Place, etc.) │ ├── routes/ # Express routes for API endpoints │ ├── tests/ # Backend tests (unit & integration) │ ├── server.js # Entry point for the backend server │ └── package.json # Backend dependencies and scripts ├── client/ │ ├── public/ # Static assets and HTML file │ ├── src/ │ │ ├── assets/ # Images, icons, and other static assets │ │ ├── components/ # Reusable UI components (Navbar, Footer, Card, etc.) │ │ ├── pages/ # Page-level components (Home, Login, CityDetail, PlaceDetail, etc.) │ │ ├── context/ # Global state management (optional) │ │ ├── hooks/ # Custom hooks (e.g., useAuth) │ │ ├── styles/ # Custom CSS/SCSS files │ │ ├── App.jsx # Main component that sets up routes and layout │ │ ├── main.jsx # Entry point for the React app │ │ └── routes.jsx # (Optional) Separate file for route configurations │ └── package.json # Frontend dependencies and scripts └── README.md # Project documentation


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)
- Git
- MongoDB Atlas account or a local MongoDB instance

### Clone the Repository

 Open your terminal and clone the repository:
   ```bash
   git clone https://github.com/yourusername/Voyago.git
   cd Voyago


## Usage


User Authentication:
Register and log in to access user-specific features.

City Details:
Browse cities and click on a city to view detailed information (history, hotels, restaurants, hidden gems).

Admin Dashboard:
Log in as an admin to add, edit, or remove city and place data.

Navigation:
Use the Navbar for easy navigation between pages.

## Contributing

Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes with descriptive messages.
Push your branch and create a pull request.

## Contact 

For any questions or issues, please contact:

Name: Shivam Yadav
GitHub: shivamYadav79
Email: yadavshivam.360.san@gmail.com



---

### Instructions:

---

Feel free to modify any section to better suit your project needs. Enjoy building Voyago!

# Nest.js Project Setup with Dockerized Prisma Database

This README provides instructions on setting up a Nest.js project with a Dockerized Prisma database for your job assessment.

## Prerequisites

- Node.js (at least v14)
- Docker and Docker Compose (for database setup)
- Git

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/shadowDarsan/nestjs_vta.git
   cd nestjs_vta
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

## Setting Up the Database with Docker

1. Ensure you have Docker and Docker Compose installed on your machine.

2. Start the Dockerized Prisma database:

   ```bash
   docker-compose up -d
   ```

   This will launch the PostgreSQL database for Prisma in a Docker container.

## Running the Nest.js Application

1. Start the Nest.js application:

   ```bash
   npm run start:dev
   ```

2. Access the application at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- POST `api/usersdetails`: Create a new user details. Make a POST request with the following JSON payload:

  ```json
  {
  	"name": "John Doe",
  	"email": "john@example.com",
  	"gender": "Male",
  	"phone": "1234567890",
  	"address": "123 Main St, City",
  	"nationality": "Country",
  	"dateOfBirth": "1990-05-15T00:00:00Z",
  	"education": "Bachelor's Degree",
  	"preferedModeOfContact": "Email"
  }
  ```

  Adjust the values in the payload according to your requirements.

- GET `api/userdetails`: Get all user details.

- GET `api/userdetails/:id`: Get user details by ID.

## Stopping the Application and Database

1. Stop the Nest.js application:

   Use `Ctrl + C` in the terminal where the application is running.

2. Stop the Dockerized Prisma database:

   ```bash
   docker-compose down
   ```

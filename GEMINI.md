# Project: recipes_backend

## Project Overview

This is a Node.js backend for a recipe application, written in TypeScript. It uses the Express.js framework for the server, Mongoose for interacting with a MongoDB database, and JWT for authentication.

## Building and Running

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running in Development Mode

To run the server with hot-reloading:

```bash
npm run dev
```

The server will be available at `http://localhost:3000`.

### Building for Production

To compile the TypeScript code to JavaScript:

```bash
npm run build
```

The compiled files will be in the `dist` directory.

### Running in Production

To run the compiled code:

```bash
npm start
```

## Development Conventions

### Code Style

- The project uses TypeScript.
- The code is organized into modules under the `src` directory.
- Routes are defined in the `src/routes` directory.
- Models are defined in the `src/models` directory.
- Middleware is defined in the `src/middleware` directory.
- Database configuration is in `src/config` directory.

### Testing

There are no tests yet.

**TODO:** Add a testing framework and write tests.

### API Documentation

There is no API documentation yet.

**TODO:** Add API documentation.

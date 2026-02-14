# Gemini React App

This project is a React application that interacts with the Google Gemini API to generate text-based responses based on user prompts.

## Overview

This application provides a simple interface for users to input a text prompt and receive a generated response from the Google Gemini API. It utilizes React for the user interface, Axios for making HTTP requests, and Vite as a build tool. The application is designed to be easily configurable with an API key stored in an environment variable.

## Architecture

This application follows a client-server architecture. The React application running in the browser acts as the client, sending requests to the Google Gemini API, which serves as the server.

Key components:
- App.jsx: This component handles the user interface, including the input field for the prompt, the display of the response, and the logic for interacting with the Gemini API.
- vite.config.js: This file configures the Vite build tool, including the use of the React plugin.
- eslint.config.js: This file configures ESLint for code linting and formatting.

The data flow is as follows: The user enters a prompt in the input field. When the user submits the form, the application sends a POST request to the Google Gemini API with the prompt. The Gemini API processes the prompt and returns a generated text response. The application then displays the response to the user.

## Features
- Text Generation: Allows users to input a text prompt and receive a generated text response from the Google Gemini API.
- Loading State: Provides visual feedback to the user while the response is being generated.
- Error Handling: Gracefully handles errors, such as a missing API key or a failed API request.

## How It Works

The application works by taking a user-provided text prompt and sending it to the Google Gemini API. The API processes the prompt using its language model and returns a generated text response. The application then displays this response to the user.

When the user enters a prompt and submits the form, the handleSubmit function is triggered. This function first checks if the prompt is empty. If not, it retrieves the Gemini API key from the environment variables. Then, it sets the loading state to true and displays a "Generating response..." message. It sends a POST request to the Gemini API with the prompt and API key. Upon receiving the response, it extracts the generated text and displays it to the user. If an error occurs during the API request, it displays an error message. Finally, it sets the loading state to false.

## Installation

Prerequisites:
- Node.js (version 18 or higher)
- npm (Node Package Manager) or yarn
- A Google Gemini API key

Step-by-step installation:
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
4. Create a .env file and add your Gemini API key

Commands:
```bash
git clone <repository-url>
cd <project-directory>
npm install
```

Create a .env file in the root directory and add the following line, replacing YOUR_GEMINI_API_KEY with your actual API key:
```
VITE_GEMINI_KEY=YOUR_GEMINI_API_KEY
```

## Usage

To run the application:
```bash
npm run dev
```

This will start the development server. Open your browser and navigate to the address shown in the console (usually http://localhost:5173). Enter a prompt in the input field and click the "Send" button. The generated response from the Gemini API will be displayed below the input field.

## Project Structure

The codebase is organized into the following structure:

- root: Contains configuration files such as eslint.config.js and vite.config.js.
- src: Contains the main application code, including the App.jsx component and the main.jsx entry point.

Important files:
- App.jsx: Contains the main application logic and user interface.
- main.jsx: The entry point for the React application.
- vite.config.js: Configuration file for the Vite build tool.
- eslint.config.js: Configuration file for ESLint.

## Technology Stack
- React: Used for building the user interface.
- Vite: Used as a build tool for bundling the application.
- Axios: Used for making HTTP requests to the Google Gemini API.
- ESLint: Used for linting and formatting the code.

React was chosen for its component-based architecture and ease of use in building interactive user interfaces. Vite was chosen for its fast build times and development server. Axios was chosen for its simple API for making HTTP requests. ESLint was chosen for its ability to enforce code style and prevent errors.

## Development

To run tests (if any):
```bash
npm test
```

## Contributing
1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License

This project is licensed under the MIT License.
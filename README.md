# Gemini React App

This project is a React application that leverages the Gemini API to generate text-based responses based on user prompts. It provides a simple interface for users to input a prompt and receive a generated response from the Gemini model.

## Features

- User-friendly interface for submitting prompts.
- Integration with the Gemini API for text generation.
- Displays generated responses in real-time.
- Handles API key configuration via environment variables.
- Error handling for API requests.
- Loading state indicator during API calls.

## Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  Install the project dependencies by running `npm install` or `yarn install`.
4.  Create a `.env` file in the root directory.
5.  Add your Gemini API key to the `.env` file as `VITE_GEMINI_KEY=YOUR_API_KEY`.
6.  Start the development server by running `npm run dev` or `yarn dev`.

## Usage

1.  Open the application in your web browser.
2.  Enter a prompt in the input field.
3.  Click the "Send" button.
4.  The generated response from the Gemini API will be displayed below the input field.

## Project Structure

-   root
    -   eslint.config.js
    -   vite.config.js
    -   src
        -   App.jsx
        -   main.jsx

## Technologies

-   React
-   Vite
-   ESLint
-   Axios
-   lucide-react
-   @eslint/js
-   globals
-   eslint-plugin-react-hooks
-   eslint-plugin-react-refresh
-   @vitejs/plugin-react-swc
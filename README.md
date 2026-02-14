```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. It leverages `@vitejs/plugin-react-swc` for Fast Refresh using SWC.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Key Files and Configuration

*   `vite.config.js`:  Vite configuration file.  This project uses `@vitejs/plugin-react-swc`.
*   `eslint.config.js`: ESLint configuration file. Includes recommended rules, React Hooks rules, and a rule to prevent unused variables.
*   `src/App.jsx`: The main application component, demonstrating interaction with the Gemini API.
*   `src/main.jsx`: Entry point for the React application, rendering the `App` component within `StrictMode`.

## Project Structure

The project is structured as follows:

*   `src/`: Contains the React application source code.
*   `src/App.jsx`: The main application component.
*   `src/main.jsx`: The entry point for the React application.
*   `index.css`: Global styles for the application.
*   `vite.config.js`: Vite configuration.
*   `eslint.config.js`: ESLint configuration.

## ESLint Configuration

The `eslint.config.js` file configures ESLint with the following:

*   Ignores the `dist` directory.
*   Applies to `*.js` and `*.jsx` files.
*   Uses ES2020 and browser globals.
*   Includes plugins for `react-hooks` and `react-refresh`.
*   Enforces rules from ESLint's recommended configuration and React Hooks' recommended configuration.
*   Adds a rule to error on unused variables (except those starting with an uppercase letter or underscore).
*   Adds a rule to warn if only constant exports are used with React Refresh.

## Gemini API Integration (src/App.jsx)

The `src/App.jsx` file demonstrates how to integrate with the Gemini API:

1.  It uses `axios` to make a POST request to the Gemini API endpoint.
2.  It retrieves the API key from the environment variable `VITE_GEMINI_KEY`.
3.  It handles loading states and error conditions.

**Important:** Ensure you have a `.env` file in your project root with the `VITE_GEMINI_KEY` variable set to your Gemini API key.  For example:

    VITE_GEMINI_KEY=YOUR_GEMINI_API_KEY

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
```
// Importing necessary modules for the application
import { StrictMode } from "react"; // StrictMode is a wrapper component that activates additional checks and warnings in development mode to help identify potential problems in the app (e.g., deprecated API usage, potential side-effects, etc.)
import { createRoot } from "react-dom/client"; // createRoot is used to create and manage the root React element where your app will be rendered into the DOM.
import "./index.css"; // Importing global CSS styles for the application. This file contains styles that apply globally across all components.
import App from "./App.jsx"; // Importing the main App component that holds the structure and content of the entire application.
import { BrowserRouter } from "react-router-dom"; // BrowserRouter is a wrapper component that allows your app to support routing using the HTML5 history API. It enables navigation between different pages of the app without reloading the entire page.
import { ToastContainer } from "react-toastify"; // ToastContainer is a component that holds and displays toast notifications. Toast notifications are small, non-intrusive messages that can be shown temporarily to alert the user of something, such as an error message or a success notification.

// Rendering the application into the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter wraps the entire app to enable routing between different pages (like Home, Teams, etc.) */}
    <BrowserRouter>
      {/* The main App component is rendered here. It contains all of your routes and other logic */}
      <App />
    </BrowserRouter>

    {/* Toast notifications container is placed here, and it will display toast messages that are triggered in the app */}
    <ToastContainer />
  </StrictMode>
);

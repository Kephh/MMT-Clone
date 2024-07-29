import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/authcontext.jsx";
import { SearchContextProvider } from "./context/searchcontext.jsx";
import { FlightContextProvider } from "./context/flightcontext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <SearchContextProvider>
      <FlightContextProvider>
        <App />
      </FlightContextProvider>
    </SearchContextProvider>
  </AuthContextProvider>
);

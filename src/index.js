import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PrimaryStatesProvider } from "./contexts/primary-states-context";
import { VideoContextProvider } from "./contexts/video-context";
import { AuthContextProvider } from "./contexts/auth-context";
import {ThemeContextProvider} from "./contexts/theme-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContextProvider>
    <AuthContextProvider>
        <VideoContextProvider>
          <PrimaryStatesProvider>
            <App />
          </PrimaryStatesProvider>
        </VideoContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

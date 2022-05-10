import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PrimaryStatesProvider } from "./contexts/primary-states-context";
import { VideoContextProvider } from "./contexts/video-context";
import { AuthContextProvider } from "./contexts/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <VideoContextProvider>
          <PrimaryStatesProvider>
            <App />
          </PrimaryStatesProvider>
        </VideoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

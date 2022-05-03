import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { PrimaryStatesProvider } from "./contexts/primary-states-context";
import { VideoContextProvider } from "./contexts/video-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <PrimaryStatesProvider>
          <App />
        </PrimaryStatesProvider>
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

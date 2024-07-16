import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import AlertTemplate from "react-alert-template-basic";
import { positions, transitions, Provider as AlertProvider } from "react-alert";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./Store";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AlertProvider>
    </PersistGate>
  </Provider>


);


reportWebVitals();

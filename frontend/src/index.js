import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AuthProvider from "./provider/AuthProvider";

import { BrowserRouter } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import './index.css';
import App from './App';

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme = createTheme(theme, {
  palette: {
    text: {
      primary: "#a97142",
    },
    action: {
      active: "#a97142",
    },
    primary: {
      main: '#a97142',
    },
    background: {
      default: "#1E1F20"
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {store} from "./store";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {ThemeProvider} from "styled-components";
import {theme} from "../src/styles/index";
import {GlobalStyle} from "../src/styles/index";

import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import RegistrationValidation from "./components/RegistrationValidation";
import RegistrationValidated from "./components/RegistrationValidated";

ReactDOM.render(
    <React.StrictMode>
        <Provider store = { store }>
        <ThemeProvider theme = { theme }>
            <GlobalStyle/>
            <App />
        </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Dependencies
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Bluebird from 'bluebird'

// Routes
import AppRoutes from "./routes"

// Assets
import registerServiceWorker from './registerServiceWorker';

// Bluebird configuration
window.Promise = Bluebird

Bluebird.config( { warnings: false })

window.addEventListener('unhandlerejection', error => {
    error.preventDefault()

    if (process.env.NODE_ENV !== 'production'){
        console.warn('Unhadled promise rejection warning', error.detail)
    }
})


ReactDOM.render(
   
        <Router>
            <AppRoutes />
        </Router>, 
    document.getElementById('root'));
registerServiceWorker();

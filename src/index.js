import React from 'react';
import ReactDOM from "react-dom/client";
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './auth/Auth';
import Page from './page';
import "./index.css"
import axios from 'axios';

axios.defaults.baseURL = 'https://glooer.herokuapp.com';


axios.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('token');

    return config;
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo />);
root.render(<Page />);


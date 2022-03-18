import React from 'react';
import ReactDOM from 'react-dom';
import './style';
import App from './App';
import {GlobalStyle} from "./style";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <GlobalStyle/>
    </React.StrictMode>,
    document.getElementById('root')
);

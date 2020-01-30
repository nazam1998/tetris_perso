import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

document.title = 'Tetris perso';
document.body.className = 'bg-info';
ReactDOM.render( < App / > , document.getElementById('root'));
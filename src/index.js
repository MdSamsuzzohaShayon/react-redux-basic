import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import {createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

// PROVIDER WILL SURROUND AND WRAP THE ROOT APP COMPONENT
// WE WILL PASS STORE INTO PROVIDER SO STORE CAN INTRACT WITH REACT
import {Provider} from 'react-redux'; 


//CREATE STORE AND INVOKE FUNCTION THAT INTRACTS WITH REDUCERS
const store = createStore(rootReducer);  

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import axios from "axios";


import {Ruducer} from "./ruducer";
import App from './component/App';
import thunk from 'redux-thunk';


const middleware = [thunk,logger]

const store = createStore(Ruducer,applyMiddleware(...middleware));




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


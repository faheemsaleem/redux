import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ruducer} from "./ruducer";
import App from './App';


const store = createStore(ruducer)



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


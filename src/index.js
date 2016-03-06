import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//ReduxPromise checks if the 'payload' key is a promise. It waits for the promise to be resolved, once resolved it dispatches the result. It unwraps the promise.
import ReduxPromise from "redux-promise";

import App from "./components/App.jsx";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#app'));

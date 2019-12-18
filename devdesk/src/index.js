import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import AdminReducer from './Reducers/AdminReducer';
import StudentReducer from './Reducers/StudentReducer';
import HelperReducer from './Reducers/HelperReducer'
import './css/index.css';
import App from './App';

const rootReducer = combineReducers({admin: AdminReducer, student: StudentReducer, helper: HelperReducer});
const store = createStore(rootReducer, applyMiddleware( thunk ));

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
    , document.getElementById('root'));



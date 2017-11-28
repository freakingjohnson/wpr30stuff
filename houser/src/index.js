import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './components/Auth/Auth'

import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import router from './routes/main'
import store from './store'




ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <Login/>
        </Provider>
    </HashRouter>,
        document.getElementById('root')

);


import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import AppContainer from './components/appContainer';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={AppContainer} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

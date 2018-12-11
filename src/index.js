import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import AppContainer from './components/appContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider>
        <AppContainer store={store}/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

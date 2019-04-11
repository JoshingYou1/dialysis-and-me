import React from 'react';
import {shallow} from 'enzyme';

import {AppContainer} from './appContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

describe('<AppContainer />', () => {
    it('Should render without crashing', () => {
        shallow(<AppContainer />);
    });

    it('Should render the Route component', () => {
        shallow(
            <Router>
                <Route />
            </Router>
        );
    });
});
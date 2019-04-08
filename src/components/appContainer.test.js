import React from 'react';
import {shallow} from 'enzyme';

import {AppContainer} from './appContainer';

describe('<AppContainer />', () => {
    it('Should render without crashing', () => {
        const dispatch = jest.fn();
        shallow(<AppContainer dispatch={dispatch} />);
    });
});
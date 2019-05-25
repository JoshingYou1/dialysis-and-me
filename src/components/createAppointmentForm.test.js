import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import {CreateAppointmentForm} from './createAppointmentForm';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {Field} from 'redux-form';
import { successErrorMessage } from '../actions';

chai.use(spies);

// import { mount } from 'enzyme'
// import sinon from 'sinon'
// import { reducer as formReducer } from 'redux-form'
// import { createStore, combineReducers } from 'redux'
// import { Provider } from 'react-redux'

// describe('CreateAppointmentForm', () => {
//     let store;
// 	beforeEach(() => {
// 		store = createStore(combineReducers({ form: formReducer }));
//     });
    
// 	it('Should dispatch the action successErrorMessage when the form is properly submitted', () => {
//         const props = {
//             currentUser: {
//                 _id: 1,
//                 username: 'jeff'
//             },
//             authToken: 1,
//             isMessageShowing: false
//         };
//         const wrapper = mount(
// 			<Provider store={store}>
// 				<CreateAppointmentForm {...props} />
// 			</Provider>
// 		);
// 		wrapper.find('form').simulate('submit');
// 	});
// });


describe('<CreateAppointmentForm />', () => {
    it('Should render without crashing', () => {
        const props = {
            user: {
                _id: 1
            },
            authToken: 1,
            isMessageShowing: false
        };
        shallow(<CreateAppointmentForm {...props}/>);
    });

    // it('Should render the Field components', () => {
    //     const props = {
    //         user: {
    //             _id: 1
    //         },
    //         authToken: 1,
    //         isMessageShowing: false
    //     };
    //     const wrapper = shallow(<CreateAppointmentForm {...props} />);
    //     const instance = wrapper.instance();
    //     console.log(wrapper.props);
    // //     expect(wrapper.find(Field).length).to.equal(11);
    // });

    // it('Should render the form named .create-appointment-form', () => {
    //     const props = {
    //         user: {
    //             _id: 1
    //         },
    //         authToken: 1,
    //         isMessageShowing: false
    //     };
    //     const wrapper = shallow(<CreateAppointmentForm {...props} />);
    //     expect(wrapper.find('.create-appointment-form').length).to.equal(1);
    // });

    // it('Should dispatch the action successErrorMessage when the form is submitted', () => {
    //     const props = {
    //         user: {
    //             _id: 1
    //         },
    //         authToken: 1,
    //         isMessageShowing: false,
    //         dispatch: chai.spy()
    //     };
    //     const wrapper = shallow(<CreateAppointmentForm {...props}/>);
    //     const instance = wrapper.instance();
    //     console.log(wrapper.instance());
    //     wrapper.find('form').simulate('submit');
    //     expect(instance.props.dispatch).to.be.called.with(successErrorMessage());
    // });
});
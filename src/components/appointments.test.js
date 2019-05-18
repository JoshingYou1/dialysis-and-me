import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import spies from 'chai-spies';

import {Appointments} from './appointments';
import NavigationBar from './navBar';
import Footer from './footer';
import AppointmentsList from './appointmentsList';
import AppointmentsShow from './appointmentsShow';
import CreateAppointmentForm from './createAppointmentForm';
import { chooseCreateAppointment } from '../actions';

chai.use(spies);

const appointments = [
    {
      address: {
        street: '40 South Greenlake Ave',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 35421
      },
      _id: '5cb694034859fh37701f316e',
      description: 'Access evaluation',
      date: '2019-01-04T05:00:00.000Z',
      time: '2:15 p.m.',
      with: 'Jason Strickland',
      title: 'MD',
      where: 'Vascular Access Center',
      phoneNumber: '904-943-2942',
      patient: '5cb694034859f123701f3159'
    },
    {
      address: {
        street: '632 Oak St',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 34423
      },
      _id: '5cb694034859f123701f316d',
      description: 'Back pain',
      date: '2019-01-19T05:00:00.000Z',
      time: '12:30 p.m.',
      with: 'Jessica Brown',
      title: 'Primary care physician',
      where: 'Baptist Primary Care',
      phoneNumber: '904-233-1114',
      patient: '5cb694034859f123701f3159'
    },
    {
      address: {
        street: '402 South Lakeside Dr',
        city: 'Jacksonville',
        state: 'FL',
        zipCode: 35422
      },
      _id: '5cb694034859f123701f316f',
      description: 'Vein mapping',
      date: '2019-02-04T05:00:00.000Z',
      time: '2:10 p.m.',
      with: 'Jason Strickland',
      title: 'MD',
      where: 'Vascular Access Center',
      phoneNumber: '904-943-2942',
      patient: '5cb694034859f123701f3159'
    }
  ];

describe('<Appointments />', () => {
    it('Should render without crashing', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            }
        };
        shallow(<Appointments {...props}/>);
    });

    it('Calls componentDidMount', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            }
        };
        chai.spy.on(Appointments.prototype, 'componentDidMount');
        const wrapper = shallow(<Appointments {...props} />);
        expect(Appointments.prototype.componentDidMount).to.have.been.called.once;
    });

    it('Should render the div element named .loading-div if the state of the isLoading prop is truthy', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: true
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find('.loading-div').length).to.equal(1);

    });

    it('Should render the div element named .sk-circle if the state of the isLoading prop is truthy', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: true
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find('.sk-circle').length).to.equal(1);

    });

    it('Should render the NavigationBar component', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: true
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find(NavigationBar).length).to.equal(1);
    });

    it('Should render the Footer component', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: true
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find(Footer).length).to.equal(1);
    });

    it('Should render the AppointmentsList component', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find(AppointmentsList).length).to.equal(1);
    });

    it('Should render the AppointmentsShow component', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find(AppointmentsShow).length).to.equal(1);
    });

    it('Should render the CreateAppointmentForm component', () => {
        const props = {
            dispatch: chai.spy(),
            user: {
                _id: 1
            },
            appointments: appointments,
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find(CreateAppointmentForm).length).to.equal(1);
    });

    it('Should render the h1 header named appointments-h1.hidden-1 if the state of the prop isCreateAppointmentFormShowing is truthy', () => {
        const props = {
            user: {
                _id: 1
            },
            dispatch: chai.spy(),
            appointments: [],
            isCreateAppointmentFormShowing: true,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find('h1.appointments-h1.hidden-1').length).to.equal(1);
    });

    it('Should render the div named create-appointment-div.desktop-hide-2.hidden-1 if the state of the prop isAppointmentInfoShowing is truthy', () => {
        const props = {
            user: {
                _id: 1
            },
            dispatch: chai.spy(),
            appointments: [],
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: true,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false
        };
        const wrapper = shallow(<Appointments {...props}/>);
        expect(wrapper.find('div.create-appointment-div.desktop-hide-2.hidden-1').length).to.equal(1);
    });

    it('Should dispatch the chooseCreateAppointment action when the button that renders the createAppointmentForm component is clicked', () => {
        const props = {
            appointments: appointments,
            user: {},
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false,
            dispatch: chai.spy()
        };

        const wrapper = shallow(<Appointments {...props} />);
        wrapper.find('button.create-appointment-button').at(0).simulate('click');
        expect(props.dispatch).to.have.been.called.with(chooseCreateAppointment());
    });

    it('Should dispatch fetchAppointments from actions', () => {
        const props = {
            user: {
                _id: 1
            },
            dispatch: chai.spy(),
            appointments: [],
            isCreateAppointmentFormShowing: false,
            isAppointmentInfoShowing: false,
            deletedAppointment: {},
            isMessageShowing: false,
            isLoading: false
        };
        const wrapper = shallow(<Appointments {...props}/>);
        const instance = wrapper.instance();
        console.log(instance.props.dispatch);
        const fetchedAppointments = appointments;
        instance.props.dispatch(fetchAppointments(fetchedAppointments));
        expect(instance.props.dispatch).to.have.been.called.with(fetchAppointments());
        // expect(wrapper.find('.container').length).to.equal(1);
        // // console.log('wrapper.find', wrapper.find(Appointments).html());
        // expect(wrapper.find('h1').length).to.equal(2);
    });
});


import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import Input from './input';

chai.use(spies);

describe('<Input />', () => {
    it('Should render without crashing', () => {
        const props = {
            form: {
                meta: {
                    touched: false,
                    error: null,
                    warning: null
                },
                input: {
                    name: null
                }
            }
        };
        shallow(<Input meta={props.form.meta} input={props.form.input} />);
    });

    it('Should render the div element named .form-error.a if meta.error is called and meta.touched is truthy', () => {
        const props = {
            form: {
                meta: {
                    touched: true,
                    error: <div>error</div>,
                    warning: null
                },
                input: {
                    name: null
                }
            }
        };
        const wrapper = shallow(<Input meta={props.form.meta} input={props.form.input} />);
        expect(wrapper.find('div.form-error.a').length).to.equal(1);
    });

    it('Should render the div element named .form-warning.a if meta.warning is called and meta.touched is truthy', () => {
        const props = {
            form: {
                meta: {
                    touched: true,
                    error: null,
                    warning: <div>warning</div>
                },
                input: {
                    name: null
                }
            }
        };
        const wrapper = shallow(<Input meta={props.form.meta} input={props.form.input} />);
        expect(wrapper.find('div.form-warning.a').length).to.equal(1);
    });

    it('Should render the div element named .form-input', () => {
        const props = {
            form: {
                meta: {
                    touched: true,
                    error: null,
                    warning: null
                },
                input: {
                    name: null
                }
            }
        };
        const wrapper = shallow(<Input meta={props.form.meta} input={props.form.input} />);
        expect(wrapper.find('.form-input')).to.exist;
    });

    it('Calls componentDidUpdate', () => {
        const props = {
            form: {
                meta: {
                    touched: false,
                    error: null,
                    warning: null,
                    active: false
                },
                input: {
                    name: null
                }
            },
            dispatch: chai.spy()
        };
        chai.spy.on(Input.prototype, 'componentDidUpdate');
        const wrapper = shallow(<Input meta={props.form.meta} input={props.form.input} {...props}/>);
        wrapper.setProps({form: {meta: {active: true}}});
        expect(Input.prototype.componentDidUpdate).to.have.been.called.once;
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import InputThree from './inputThree';

chai.use(spies);

describe('<InputThree />', () => {
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
        shallow(<InputThree meta={props.form.meta} input={props.form.input} />);
    });

    it('Should render the div element named .form-error.b if meta.error is called and meta.touched is truthy', () => {
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
        const wrapper = shallow(<InputThree meta={props.form.meta} input={props.form.input} />);
        expect(wrapper.find('div.form-error.b').length).to.equal(1);
    });

    it('Should render the div element named .form-warning.b if meta.warning is called and meta.touched is truthy', () => {
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
        const wrapper = shallow(<InputThree meta={props.form.meta} input={props.form.input} />);
        expect(wrapper.find('div.form-warning.b').length).to.equal(1);
    });

    it('Should render the div element named .form-input-3', () => {
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
        const wrapper = shallow(<InputThree meta={props.form.meta} input={props.form.input} />);
        expect(wrapper.find('.form-input-3')).to.exist;
    });

    it('Call componentDidUpdate', () => {
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
        chai.spy.on(InputThree.prototype, 'componentDidUpdate');
        const wrapper = shallow(<InputThree meta={props.form.meta} input={props.form.input} {...props}/>);
        wrapper.setProps({form: {meta: {active: true}}});
        expect(InputThree.prototype.componentDidUpdate).to.have.been.called.once;
    });
});
import React from 'react';

export default class InputTwo extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error b"><span className="fas fa-info-circle">&nbsp;</span>{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning"><span className="fas fa-info-circle">&nbsp;</span>{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input-3">
                <label className="input-three-label" htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <input
                    className="input-three"
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}
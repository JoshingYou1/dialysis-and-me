import React from 'react';
import {connect} from 'react-redux';
import { toggleLabResultsInfo } from '../actions';

export class LabResultsShow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            animate: true
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.chosenLabResult !== prevProps.chosenLabResult) {
            this.setState({
                animate: !this.state.animate,
            })
        }
    }

    render() {
        let className = this.state.animate ? "lab-results-show-section" : "lab-results-show-section-2"
        if (this.props.chosenLabResult) {
            return (
                <div className={"show " + (this.props.isLabResultsInfoShowing ? '' : 'hidden-1')}>
                    <button className="desktop-hide" onClick={() => this.props.dispatch(toggleLabResultsInfo(false))}>
                        <span className="fas fa-times 2x a"></span>
                    </button>
                    <section className={className}>
                        <h2 className="lab-results-show-h2">Hematology</h2>
                            <span className="test-span">WBC Count:</span>
                            <span className="result-span">{this.props.chosenLabResult.hematology.wbcCount}</span>
                            <span className="measurement-method-span">1000/mcL</span>

                            <span className="test-span">RBC Count:</span>
                            <span className="result-span">{this.props.chosenLabResult.hematology.rbcCount}</span>
                            <span className="measurement-method-span">mill/mcL</span>
        
                            <span className="test-span">Hemoglobin:</span>
                            <span className="result-span">{this.props.chosenLabResult.hematology.hemoglobin}</span>
                            <span className="measurement-method-span">g/dL</span>

                            <span className="test-span">Hematocrit:</span>
                            <span className="result-span">{this.props.chosenLabResult.hematology.hematocrit}</span>
                            <span className="measurement-method-span">%</span>

                            <span className="test-span">Platelet Count:</span>
                            <span className="result-span">{this.props.chosenLabResult.hematology.plateletCount}</span>
                            <span className="measurement-method-span">1000/mcL</span>

                        <h2 className="lab-results-show-h2">Chemistry</h2>
                            <span className="test-span">BUN:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.bun}</span>
                            <span className="measurement-method-span">mg/dL</span>

                            <span className="test-span">Creatinine:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.creatinine}</span>
                            <span className="measurement-method-span">mg/dL</span>

                            <span className="test-span">Sodium:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.sodium}</span>
                            <span className="measurement-method-span">mEq/L</span>

                            <span className="test-span">Potassium:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.potassium}</span>
                            <span className="measurement-method-span">mEq/L</span>

                            <span className="test-span">Calcium:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.calcium}</span>
                            <span className="measurement-method-span">mg/dL</span>

                            <span className="test-span">Phosphorus:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.phosphorus}</span>
                            <span className="measurement-method-span">mg/dL</span>

                            <span className="test-span">Albumin:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.albumin}</span>
                            <span className="measurement-method-span">g/dL</span>

                            <span className="test-span">Iron:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.iron}</span>
                            <span className="measurement-method-span">mcg/dL</span>

                            <span className="test-span">Cholesterol:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.cholesterol}</span>
                            <span className="measurement-method-span">mg/dL</span>

                            <span className="test-span">Triglycerides:</span>
                            <span className="result-span">{this.props.chosenLabResult.chemistry.triglycerides}</span>
                            <span className="measurement-method-span">mg/dL</span>
                    </section>
                </div>
            );
        }
        else {
            return (
                <div className="lab-results-show-text show mobile-hide">
                    <h2 className="lab-results-show-instruction-h2">Please select a set of lab results</h2>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        chosenLabResult: state.app.selectedLabResult,
        isLabResultsInfoShowing: state.app.isLabResultsInfoShowing
    }
};

export default connect(mapStateToProps)(LabResultsShow);
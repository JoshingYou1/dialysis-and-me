import React from 'react';
import NavigationBar from './navBar';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';

export class PatientEducation extends React.Component {
  render() {
    return (
        <div className="container">
            <NavigationBar />
            <main role="main">
                <div className="top-image-div-1">
                    <h1 className="patient-education-h1">Patient Education</h1>
                </div>
                <section className="patient-education-section-1">
                    <h2 className="patient-education-h2">Introduction</h2>
                    <p className="patient-education-p">
                        Patient education involves healthcare professionals teaching patients about their health so they may better understand their
                        condition. The overall goal of patient education is to improve individual health as well as strengthen the performance of the
                        healthcare industry altogether. Here are some of the important benefits of patient education:
                    </p>
                    <h2 className="patient-education-h2">Increased Patient Understanding</h2>
                    <p className="patient-education-p">
                        Patient education ensures that patients are well-informed about their own health, especially when it comes to conditions
                        that may affect their everyday life. This could mean teaching them about the possible side-effects of their condition,
                        discussing their diagnosis, or going through possible treatment options. This level of understanding could reduce a
                        patient’s anxiety and could also build trust between patient and healthcare provider. An increased understanding puts patients
                        in a better position to make informed decisions regarding their healthcare.
                    </p>
                    <h2 className="patient-education-h2">More active approach to healthcare</h2>
                    <p className="patient-education-p">
                        An educated patient may also be able to self-manage certain elements of their care. Obviously, there will always be certain facets
                        of healthcare that only professionals can administer, but some components could be managed by the patient, which would alleviate some of the
                        burden from providers.
                    </p>
                    <h2 className="patient-education-h2">Enhanced motivation and better outcomes</h2>
                    <p className="patient-education-p">
                        If a patient is very informed about their condition, they will no doubt understand what goals they need to work towards in order to
                        improve their health. In this case, educated patients could be more motivated to reach certain healthcare goals, which would in
                        turn improve their overall health more quickly and more efficiently.
                    </p>
                </section>
                <section className="patient-education-section-2">
                    <h2 className="patient-education-h2 section-2-h2">Patient Education Content</h2>
                    <div className="patient-education-links-container">
                        <div className="patient-education-div-1">
                            <div className="patient-education-div-2">
                                <img className="patient-education-icon" src="https://i.dailymail.co.uk/i/pix/2009/02/13/article-1144565-0378EAF7000005DC-599_468x465.jpg" alt="Understanding ESRD Icon"></img>
                                <h4 className="patient-education-h4-1">Understanding ESRD</h4>
                                <p className="patient-education-link-p">
                                    Detailed information on end-stage renal disease, including symptoms, diagnosis, and treatments.
                                </p>
                            </div>
                            <div className="patient-education-div-3">
                                <Link 
                                    className="patient-education-link-1" 
                                    to="/patient-education/understanding-esrd"
                                    onClick={this.forceUpdate}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                        <div className="patient-education-div-1">
                            <div className="patient-education-div-2">
                                <img className="patient-education-icon" src="https://img.freepik.com/free-photo/attractive-married-couple-posing-at-the-beach-on-a-sunny-day_13339-273994.jpg?size=338&ext=jpg" alt="Living with ESRD Icon"></img>
                                <h4 className="patient-education-h4-2">Living with ESRD</h4>
                                <p className="patient-education-link-p">
                                    Enjoy your life &mdash; despite end-stage renal disease. Don't let ESRD bring you down.
                                </p>
                            </div>
                            <div className="patient-education-div-3">
                                <Link 
                                    className="patient-education-link-2" 
                                    to="/patient-education/living-with-esrd"
                                    onClick={this.forceUpdate}
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="patient-education-div-1">
                            <div className="patient-education-div-2">
                                <img className="patient-education-icon" src="https://www.nia.nih.gov/sites/default/files/2017-06/shopping-for-healthy-food-meta.jpg" alt="Eating Well on Dialysis Icon"></img>
                                <h4 className="patient-education-h4-3">Diet for Dialysis</h4>
                                <p className="patient-education-link-p">
                                    A proper diet is crucial for individuals on dialysis due to fluid and waste accumulation in-between treatments.
                                </p>
                            </div>
                            <div className="patient-education-div-3">
                                <Link 
                                    className="patient-education-link-3" 
                                    to="/patient-education/diet-for-dialysis"
                                    onClick={this.forceUpdate}
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    
      );
  }
}

export default connect()(PatientEducation);
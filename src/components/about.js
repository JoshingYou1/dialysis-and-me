import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from './navBar';
import Footer from './footer';

export default class About extends React.Component {
    render () {
        return (
            <div className="container">
                <NavigationBar />
                <main role="main">
                    <h1 className="about-h1">About</h1>
                    <section className="about-section">
                        <h2 className="about-h2">Mission</h2>
                        <p className="about-p">
                            The goal of the application is to provide ESRD patients with the necessary tools to support self care.
                        </p>
                        <h2 className="about-h2">Background</h2>
                        <p className="about-p">
                            My name is Joshua Drumm. I have been a CCHT(Certified Chronic Hemodialysis Technician) for over four years. I take care of
                            patients that suffer from end-stage renal disease. The biggest problem I see on a day-to-day basis is the lack of information
                            and overall patient understanding when it comes to ESRD and all it encompasses. I wanted to come up with an application that
                            not only provides patients with useful information about their condition, but also allows them to become more independent and
                            take action to improve their quality of life. Through incorporating services like scheduling appointments and patient
                            treatment information, dialysis patients who utilize this application will be able to develop a level of normalcy that could
                            drastically change their attitude for the better.
                        </p>
                        <h2 className="about-h2">Sources</h2>
                        <p className="about-p-2">
                            "Kidney Failure/ESRD Diet."&nbsp;<span className="about-span">American Kidney Fund,&nbsp;</span>Firefly Partners,
                        </p>
                        <a className="about-link" href="http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/">
                            http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/
                        </a>
                        <p className="about-p-2">
                            "Kidney Failure (ESRD) Causes, Symptoms, & Treatments."&nbsp;<span className="about-span">American Kidney Fund,&nbsp;</span>Firefly Partners,
                        </p>
                        <a className="about-link" href="http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/">
                            http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/
                        </a>
                        <p className="about-p-2">
                            "Personal Life/Managing Your Emotions."&nbsp;<span className="about-span">Fresenius Kidney Care,&nbsp;</span>Fresenius Medical Care Holdings, Inc.,
                        </p>
                        <a className="about-link" href="https://www.freseniuskidneycare.com/thriving-on-dialysis/personal-life/managing-your-emotions#tabs">
                            https://www.freseniuskidneycare.com/thriving-on-dialysis/personal-life/managing-your-emotions#tabs
                        </a>
                        <p className="about-p-2">
                            "Staying Active on Dialysis/Benefits to Being Active."&nbsp;<span className="about-span">Fresenius Kidney Care,&nbsp;</span>Fresenius
                            Medical Care Holdings, Inc.,
                        </p>
                        <a className="about-link" href="https://www.freseniuskidneycare.com/thriving-on-dialysis/staying-active/benefits-to-being-active#tabs">
                            https://www.freseniuskidneycare.com/thriving-on-dialysis/staying-active/benefits-to-being-active#tabs
                        </a>
                        <p className="about-p-2">
                            "Staying Healthy, Thriving on Dialysis/Managing Your Time on Dialysis."&nbsp;
                            <span className="about-span">Fresenius Kidney Care,&nbsp;</span>
                            Fresenius Medical Care Holdings, Inc.,
                        </p>
                        <a className="about-link" href="https://www.freseniuskidneycare.com/thriving-on-dialysis/staying-healthy/managing-your-time">
                            https://www.freseniuskidneycare.com/thriving-on-dialysis/staying-healthy/managing-your-time
                        </a>
                        <p className="about-p-2">
                            "Benefits of Patient Education."&nbsp;<span className="about-span">Liberate Health,&nbsp;</span>Liberate Health, 2014,
                        </p>
                        <a className="about-link" href="http://liberatehealth.us/benefits-of-patient-education/">
                            http://liberatehealth.us/benefits-of-patient-education/
                        </a>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

import React from 'react';
import {connect} from 'react-redux';

export function About(props) {
    return (
        <div>
            <section>
                <h1>About</h1>
                <h2>Mission</h2>
                <p>
                    The goal of the application is to provide ESRD patients with the necessary tools to support self care.
                </p>
                <h2>Background</h2>
                <p>
                    My name is Joshua Drumm. I have been a CCHT(Certified Chronic Hemodialysis Technician) for over four years. I take care of
                    patients that suffer from end-stage renal disease. The biggest problem I see on a day-to-day basis is the lack of information
                    and overall patient understanding when it comes to ESRD and all it encompasses. I wanted to come up with an application that
                    not only provides patients with useful information about their condition, but also allows them to become more independent and
                    take action to improve their quality of life. Through incorporating services like scheduling appointments and patient
                    treatment information, dialysis patients who utilize this application will be able to develop a level of normalcy that could
                    drastically change their attitude for the better.
                </p>
                <h2>Sources</h2>
                <p>
                    "Kidney Failure/ESRD Diet."<span className="about-span">American Kidney Fund,&nbsp;</span>Firefly Partners,
                </p>
                <a className="about-link" href="http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/">
                    http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/
                </a>
                <p>
                    "Kidney Failure (ESRD) Causes, Symptoms, & Treatments."<span className="about-span">American Kidney Fund,&nbsp;</span>Firefly Partners,
                </p>
                <a className="about-link" href="http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/">
                    http://www.kidneyfund.org/kidney-disease/kidney-failure/esrd-diet/
                </a>
                <p>
                    "Personal Life/Managing Your Emotions."<span className="about-span">Fresenius Kidney Care</span>Fresenius Medical Care Holdings, Inc.,
                </p>
                <a className="about-link" href="https://www.freseniuskidneycare.com/thriving-on-dialysis/personal-life/managing-your-emotions#tabs">
                    https://www.freseniuskidneycare.com/thriving-on-dialysis/personal-life/managing-your-emotions#tabs
                </a>
            </section>
        </div>
    );
}

export default connect()(About);

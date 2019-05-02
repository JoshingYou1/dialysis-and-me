import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from './navBar';
import Footer from './footer';

export function ESRDInfo(props) {
    return (
        <div className="container">
            <NavigationBar />
            <main role="main">
                <div className="top-image-div-2">
                    <h1 className="esrd-info-h1">ESRD Information</h1>
                </div>
                <section className="esrd-info-section">
                    <h2 className="esrd-info-h2">Introduction</h2>
                    <p className="esrd-info-p">
                        Kidney failure, which is known as end-stage renal disease(ESRD), is the final stage of kidney of chronic kidney disease(CKD).
                    </p>
                    <h2 className="esrd-info-h2">What causes kidney failure?</h2>
                    <p className="esrd-info-p">
                        Generally, kidney failure is caused by other health issues that have done irreversible damage to your kidneys over time. When
                        your kidneys are harmed, they may not perform as well as they are supposed to. The more your kidneys are damaged, the less
                        they are able to do their job, which will eventually result in chronic kidney disease(CKD). The final stage of chronic kidney
                        disease is kidney failure. This is the reason kidney failure is referred to as end-stage renal disease, or ESRD.
                    </p>
                    <p className="esrd-info-p">
                        The most common cause of ESRD is diabetes. The second most common cause is high blood pressure. Other issues that can
                        potentially cause kidney failure include:
                    </p>
                    <ul className="esrd-info-ul">
                        <li className="esrd-info-li">Genetic diseases, like polycystic kidney disease</li>
                        <li className="esrd-info-li">Autoimmune diseases, like lupus and IgA neuropathy</li>
                        <li className="esrd-info-li">Nephrotic syndrome</li>
                        <li className="esrd-info-li">Urinary tract issues</li>
                    </ul>
                    <p className="esrd-info-p">
                        Kidneys can also stop functioning very suddenly, within the span of two days. Kidney failure of this type is referred to as
                        acute kidney failure. This can be caused by the following:
                    </p>
                    <ul className="esrd-info-ul">
                        <li className="esrd-info-li">Urinary tract issues</li>
                        <li className="esrd-info-li">Lack of blood flow to the kidneys</li>
                        <li className="esrd-info-li">Illegal drug use</li>
                        <li className="esrd-info-li">Heart attack</li>
                    </ul>
                    <p className="esrd-info-p">
                        Acute kidney failure is not always permanent. With treatment and absence of other serious health issues, your kidneys could go
                        back to normal. Just because you have one of the previously mentioned health issues does not mean you will eventually have
                        kidney failure. You can control your health problems and help your kidneys last as long as they can by living a healthy
                        lifestyle and working together with your doctor.
                    </p>
                    <h2 className="esrd-info-h2">Symptoms of ESRD</h2>
                    <p className="esrd-info-p">
                        In the final stages of chronic kidney disease, as you approach kidney failure, the common symptoms include:
                    </p>
                    <ul className="esrd-info-ul">
                        <li className="esrd-info-li">Lack of appetite</li>
                        <li className="esrd-info-li">Back pain</li>
                        <li className="esrd-info-li">Headache</li>
                        <li className="esrd-info-li">Vomiting</li>
                        <li className="esrd-info-li">Trouble sleeping</li>
                        <li className="esrd-info-li">Itching</li>
                        <li className="esrd-info-li">Fatigue during light activity</li>
                        <li className="esrd-info-li">Muscle cramps</li>
                        <li className="esrd-info-li">High urine output or none at all</li>
                        <li className="esrd-info-li">Fever</li>
                        <li className="esrd-info-li">Diarrhea</li>
                        <li className="esrd-info-li">Irritability</li>
                    </ul>
                    <p className="esrd-info-p">
                        Experiencing one or more of these symptoms could be a sign of kidney issues. If you have any of them, you should contact your
                        doctor immediately.
                    </p>
                    <h2 className="esrd-info-h2">Diagnosis of ESRD</h2>
                    <p className="esrd-info-p">
                        In addition to a physical examination and medical history, procedures to diagnose kidney failure may include:
                    </p>
                    <ul className="esrd-info-ul">
                        <li className="esrd-info-li">
                            <span className="esrd-info-span">Blood test - </span>eGFR, which stands for estimated glomerular filtration rate, is a number based on the amount
                            of creatinine, a waste product, in your blood. The test for eGFR will determine how well your kidneys are functioning.
                        </li>
                        <li className="esrd-info-li">
                            <span className="esrd-info-span">Urinalysis - </span>Protein can leak into your urine when your kidneys are damaged. Your doctor may conduct a urine
                            test to check for protein in your urine.
                        </li>
                        <li className="esrd-info-li">
                            <span className="esrd-info-span">Blood urea nitrogen test - </span>This test will determine how much nitrogen is in your blood.
                        </li>
                    </ul>
                    <h2 className="esrd-info-h2">Treatments for ESRD</h2>
                    <p className="esrd-info-p">
                        As an ESRD patient, you will need dialysis or a kidney transplant in order to continue to live. At the present time, there
                        is no cure for ESRD. However, many individuals live long lives while on dialysis or post kidney transplant. Consult your
                        doctor about which treatment is best for you. There are multiple treatment options, including the following:
                    </p>
                    <ul className="esrd-info-ul">
                        <li className="esrd-info-li">
                            <span className="esrd-info-span">Hemodialysis(Hemo) - </span>This treatment uses a machine to clean your blood and can be performed at a dialysis center
                            or in your own home.
                        </li>
                        <li className="esrd-info-li">
                            <span className="esrd-info-span">Peritoneal dialysis(PD) - </span>This treatment utilizes your peritoneum, the lining of your abdomen, and a cleaning
                            solution called dailysate to clean your blood. PD is a very flexible treatment option that can be done at home or work
                            as long as the treatment area is clean.
                        </li>
                        <li className="esrd-info-li">
                            <span className="esrd-info-span">Kidney transplant - </span>This surgery involves receiving a healthy kidney from another person's body. The kidney
                            can come from a live donor or a deceased donor. A matching donor kidney is based on blood type and antigens.
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default connect()(ESRDInfo);
import React from 'react';
import {connect} from 'react-redux';
import NavigationBar from './navBar';
import Footer from './footer';

export function NutritionalInfo(props) {
    return (
        <div class="container">
            <NavigationBar />
                <main role="main">
                    <div className="top-image-div-3">
                        <h1 className="nutritional-info-h1">Diet for Dialysis</h1>
                    </div>
                    <section className="nutritional-info-section">
                        <h2 className="nutritional-info-h2">Introduction</h2>
                        <p className="nutritional-info-p">
                            Eating healthy is super important if you have kidney failure. Good nutrition will give you the energy to perform you daily tasks
                            and help you to remain at a healthy body weight. Dialysis does some of the work that your kidneys used to do when they were healthy,
                            however, dialysis does not accomplish as much as healthy kidneys do. This leads some waste and fluid building up within
                            your body, particularly between dialysis treatments. Over time, the extra waste and fluid in your blood can potentially
                            cause heart, bone, and other health complications. One of your responsibilities as an ESRD/dialysis patient involves
                            monitoring the amount of fuild and certain nutrients you consume each day. This can help keep waste and fluid from
                            accumulating in your blood and causing issues.
                        </p>
                        <p className="nutritional-info-p">Patients on dialysis need to limit:</p>
                        <ul className="nutritional-info-ul">
                            <li className="nutritional-info-li">Potassium</li>
                            <li className="nutritional-info-li">Phosphorus</li>
                            <li className="nutritional-info-li">Sodium</li>
                            <li className="nutritional-info-li">Fluid</li>
                        </ul>
                        <h2 className="nutritional-info-h2">Potassium</h2>
                        <p className="nutritional-info-p">
                            Potassium is a mineral found in practically all foods. Your body requires enough potassium to make your muscles work, but
                            too much potassium can be dangerous. High potassium levels in your blood is known as hyperkalemia. As an ESRD patient, your
                            potassium level may be too high or too low. This can cause muscle cramps, irregular heartbeat, and weakness. High potassium
                            levels are very serious and can potentially lead to a heart attack. Consult your dietitian about the amount of
                            potassium you should take in each day.
                        </p>
                        <h2 className="nutritional-info-h2">Phosphorus</h2>
                        <p className="nutritional-info-p">
                            Phosphorus is another mineral found in the majority of foods. It works together with vitamin D and calcium to keep your
                            bones healthy. Healthy kidneys play a big role in maintaining the proper balance of phosphorus in your body. When you are
                            on dialysis, phosphorus can accumulate in your blood. High phosphorus levels in your blood is called hyperphosphatemia.
                            Hyperphosphatemia can lead to bone disease, which causes bones to become brittle and break easily. Keeping your phosphorus
                            consumption in check can help prevent this problem. 
                        </p>
                        <p className="nutritional-info-p">
                            Phosphorus can be found naturally in foods and is naturally found in protein-rich foods such as meats,
                            poultry, fish, nuts, beans, and dairy products. Phosphorus found in animal foods is absorbed more easily than phosphorus
                            found in plant foods. Phosphorus that has been added to food in the form of an additive or preservative is found in foods
                            such as fast foods, ready to eat foods, canned and bottle beverages, enhanced meats, and most processed foods. Phosphorus
                            from food additives is completely absorbed. Avoiding phosphorus additives can lower your intake of phosphorus. Consult
                            your dietician about how much phosphorus you should consume on a daily basis.
                        </p>
                        
                        <h2 className="nutritional-info-h2">Sodium</h2>
                        <p className="nutritional-info-p">
                            The human body needs some sodium in order to function properly. Sodium helps you keep the right amount of fluid in your
                            blood. When your kidneys are no longer working, the sodium in your blood can build up. When this happens, your body holds
                            on to too much water. This can make your blood pressure too high and can cause problems during your dialysis treatments.
                            Restricting the amount of sodium you consume each day can help keep your blood pressure under control and help prevent your
                            body from holding on to too much fluid. Consult your dietitian about how much sodium you should consume each day, and
                            consider these tips to limit sodium in your diet:
                        </p>
                        <ul className="nutritional-info-ul">
                            <li className="nutritional-info-li">
                                Avoid adding salt to your food when cooking or at the table. Instead, consider cooking with with fresh herbs, lemon
                                juice, or salt-free spices.
                            </li>
                            <li className="nutritional-info-li">
                                Choose fresh or frozen vegetables as opposed to canned ones. If you do use canned vegetables, make sure to rinse them
                                to get rid of extra salt before cooking or eating them.
                            </li>
                            <li className="nutritional-info-li">Avoid processed meats, such as bacon, ham, sausage, and lunch meats.</li>
                            <li className="nutritional-info-li">Rather than snacking on crackers and other salty foods, choose fresh fruits and vegetables.</li>
                            <li className="nutritional-info-li">Avoid pickled foods, such as olives and pickles.</li>
                            <li className="nutritional-info-li">Limit condiments high in sodium, such as soy sauce, BBQ sauce, and ketchup.</li>
                        </ul>
                        <h2 className="nutritional-info-h2">Fluids</h2>
                        <p className="nutritional-info-p">
                            As an ESRD patient, fluid(water) can build up in your body between treatents. Excessive amounts of fluid in your body can
                            result in high blood pressure, swelling, difficulty breathing and heart failure. Having extra fluid in your blood can also
                            make your dialysis treatments more difficult. If you need to limit fluids, you will need to cut back on how much you drink.
                            You may need to refrain from consuming foods that contain a lot of water as well. Soups and foods that melt, such as ice,
                            ice cream, and gelatin have a lot of water in them. Many fruits and vegetables have high water content was well. Consult
                            your dietitian about how much fluid you should take in each day. If you are under fluid control, try these tricks to
                            quench your thirst:
                        </p>
                        <ul className="nutritional-info-ul">
                            <li className="nutritional-info-li">Chew gum.</li>
                            <li className="nutritional-info-li">
                                Suck on a piece of ice, hard candy, or mints(do not forget to count the ice as fluid, and choose sugar-free candy if
                                you have diabetes.
                            </li>
                            <li className="nutritional-info-li">You could also try sucking on a reusable ice cube. It's cold, but won't add additional fluid to your body.</li>
                        </ul>
                        <h2 className="nutritional-info-h2">Hemodialysis diet</h2>
                        <p className="nutritional-info-p">
                            If you are a hemodialysis patient and have treatments three times a week, limiting potassium, phosphorus, sodium, and
                            fluids should be a major priority for you. Since your blood is only being cleaned three times per week, there is more
                            time between treatments for fluid and waste to accumulate in your blood. However, if you are a home hemodialysis patient,
                            and you treatments are every day, you may have the option of being less strict with your diet. Talk with your dietitian about
                            coming up with a diet plan that fits your needs.
                        </p>
                        <h2 className="nutritional-info-h2">Peritoneal dialysis diet</h2>
                        <p className="nutritional-info-p">
                            If you are a peritoneal dialysis patient, you might be able to consume more potassium, phosphorus, sodium, and fluids than
                            someone on hemodialysis. You will need to increase you protein intake as well. This is due to the fact that PD is done all day
                            and night to remove fluid and waste from your blood. This prevents fluid and waste from building up in you blood like it does
                            in-between dialysis treatments. Talk with your dietician about coming up with a diet plan that fits your needs.
                        </p>
                    </section>
                </main>
            <Footer />
        </div>
    );
}

export default connect()(NutritionalInfo);
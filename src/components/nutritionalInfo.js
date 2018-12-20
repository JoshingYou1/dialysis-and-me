import React from 'react';
import {connect} from 'react-redux';

export function NutritionalInfo(props) {
    return (
        <div>
            <h1>ESRD Nutritional Information</h1>
            <section>
                <p>
                    Dialysis does some of the work that your kidneys used to do when they were healthy. However, dialysis does not accomplish \n
                    as much as healthy kidneys do. This leads some waste and fluid building up within your body, particularly between dialysis \n
                    treatments. Over time, the extra waste and fluid in your blood can potentially cause heart, bone, and other health \n
                    complications. One of your responsibilities as an ESRD/dialysis patient involves monitoring the amount of fuild and certain \n
                    nutrients you consume each day. This can help keep waste and fluid from accumulating in your blood and causing issues.
                </p>
                <p>Patients on dialysis need to limit:</p>
                <ul>
                    <li>Potassium</li>
                    <li>Phosphorus</li>
                    <li>Sodium</li>
                    <li>Fluid</li>
                </ul>
                <h2>Potassium</h2>
                <p>
                    Potassium is a mineral found in practically all foods. Your body requires enough potassium to make your muscles work, but \n
                    too much potassium can be dangerous. High potassium levels in your blood is known as hyperkalemia. As an ESRD patient, your \n
                    potassium level may be too high or too low. This can cause muscle cramps, irregular heartbeat, and weakness. High potassium \n
                    levels are very serious and can potentially lead to a heart attack. Consult with your dietitian about the amount of \n
                    potassium you should take in each day.
                </p>
                <h2>Phosphorus</h2>
                <p>
                    Phosphorus is another mineral found in the majority of foods. It works together with vitamin D and calcium to keep your \n
                    bones healthy. Healthy kidneys play a big role in maintaining the proper balance of phosphorus in your body. When you are \n
                    on dialysis, phosphorus can accumulate in your blood. High phosphorus levels in your blood is called hyperphosphatemia. \n
                    Hyperphosphatemia can lead to bone disease, which causes bones to become brittle and break easily. Keeping your phosphorus \n
                    consumption in check can help prevent this problem. Consult with your dietitian about the amount of phosphorus you should \n
                    take in each day.
                </p>
                <h2>Sodium</h2>
                <p>
                    The human body needs some sodium in order to function properly. Sodium helps you keep the right amount of fluid in your \n
                    blood. When your kidneys are no longer working, the sodium in your blood can build up. When this happens, your body holds \n
                    on to too much water. This can make your blood pressure too high and can cause problems during your dialysis treatments. \n
                    Restricting the amount of sodium you consume each day can help keep your blood pressure under control and help prevent your \n
                    body from holding on to too much fluid. Consult with your dietitian to find out how much sodium you should consume each \n
                    day, and consider these tips to limit sodium in your diet:
                </p>
                <ul>
                    <li>
                        Avoid adding salt to your food when cooking or at the table. Instead, consider cooking with with fresh herbs, lemon \n
                        juice, or salt-free spices.
                    </li>
                    <li>
                        Choose fresh or frozen vegetables as opposed to canned ones. If you do use canned vegetables, make sure to rinse them \n
                        to get rid of extra salt before cooking or eating them.
                    </li>
                    <li>Avoid processed meats, such as bacon, ham, sausage, and lunch meats.</li>
                    <li>Rather than snacking on crackers and other salty foods, choose fresh fruits and vegetables.</li>
                    <li>Avoid pickled foods, such as olives and pickles.</li>
                    <li>Limit condiments high in sodium, such as soy sauce, BBQ sauce, and ketchup.</li>
                </ul>
                <h2>Fluids</h2>
                <p>
                    As an ESRD patient, fluid(water) can build up in your body between treatents. Excessive amounts of fluid in your body can \n
                    result in high blood pressure, swelling, difficulty breathing and heart failure. Having extra fluid in your blood can also \n
                    make your dialysis treatments more difficult. If you need to limit fluids, you will need to cut back on how much you drink. \n
                    You may need to refrain from consuming foods that contain a lot of water as well. Soups and foods that melt, such as ice, \n
                    ice cream, and gelatin have a lot of water in them. Many fruits and vegetables have high water content was well. Consult \n
                    with your dietitian about how much fluid you should take in each day. If you are under fluid control, try these tricks to \n
                    quench your thirst:
                </p>
                <ul>
                    <li>Chew gum.</li>
                    <li>
                        Suck on a piece of ice, hard candy, or mints(do not forget to count the ice as fluid, and choose sugar-free candy if \n
                        you have diabetes.
                    </li>
                    <li>You could also try sucking on a reusable ice cube. It's cold, but won't add additional fluid to your body.</li>
                </ul>
                <h2>Hemodialysis diet</h2>
                <p>
                    If you are a hemodialysis patient and have treatments three times a week, limiting potassium, phosphorus, sodium, and \n
                    fluids should be a major priority for you. Since your blood is only being cleaned three times per week, there is more \n
                    time between treatments for fluid and waste to accumulate in your blood. However, if you are a home hemodialysis patient, \n
                    and you treatments are every day, you may have the option of being less strict with your diet. Talk with your dietitian
                </p>
            </section>
        </div>
    );
}

export default connect()(NutritionalInfo);
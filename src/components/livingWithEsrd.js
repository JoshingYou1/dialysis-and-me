import React from 'react';
import NavigationBar from './navBar';
import Footer from './footer';
import {Link} from 'react-router-dom';

export default function LivingWithESRD(props) {
    return (
        <div class="container">
            <NavigationBar />
            <main role="main">
                <div className="top-image-div-4">
                    <h1 className="living-with-esrd-h1">Living with ESRD</h1>
                </div>
                <section className="living-with-esrd-section">
                    <h2 className="living-with-esrd-h2">Introduction</h2>
                    <p className="living-with-esrd-p">
                        Being diagnosed with kidney failure is life-changing. Keeping a positive attitude is crucial for not only your mental health,
                        but for your emotional health as well. While you may feel depressed and angry, there are a lot of resources at your disposal
                        to help you in every aspect of your life and utilizing them is the key to living a healthy life. Below are some important tips
                        on how to live well despite being on dialysis:
                    </p>
                    <h2 className="living-with-esrd-h2">Remaining Active</h2>
                    <p className="living-with-esrd-p">
                        Just because you are on dialysis doesn't mean you have to quit working or restrict your level of activity. Keeping yourself
                        busy while on dialysis can give you a level of normalcy that every person needs in their life. Four benefits to staying
                        active and involved in activites while on dialysis include:
                        <ul className="living-with-esrd-ul">
                            <li className="living-with-esrd-li">Improved self-esteem</li>
                            <li className="living-with-esrd-li">Enhanced socialization</li>
                            <li className="living-with-esrd-li">Significant personal satisfaction</li>
                            <li className="living-with-esrd-li">Increased physical activity</li>
                        </ul>
                    </p>
                    <p className="living-with-esrd-p">
                        Hobbies or activites that are important to you are a great way to keep yourself active. Get plugged in with groups that share the
                        same interests you to help improve your social life. There are ways to balance your work life and dailysis life as well. If you
                        don't want to quit your job, consult your social worker or doctor about methods to balance your work and treatment. This
                        includes, for example, scheduling your dialysis in the evening if you work during the day.
                    </p>
                    <h2 className="living-with-esrd-h2">Personal Life</h2>
                    <p className="living-with-esrd-p">
                        Dealing with kidney failure brings with it a multitude of emotions. Realizing how normal this is, while also knowing there is
                        a support team eager to help you, can give you the confidence to stick with your treatment plan and invest in the relationships
                        that mean the most to you. Even though you may have a solid routine, dialysis can be an emotional roller coaster from time to
                        time. Some days you will be quick to anger or grieve for the life you once lived before being diagnosed with ESRD. Don't be
                        afraid to reach out to your social worker. He or she is there for you in these times and will help comfort you by talking
                        about your feelings.
                    </p>
                    <p className="living-with-esrd-p">
                        Negative emotions like anger and depression can quickly be turned into positive motivation when they fuel you to take action
                        and make changes for the greater good. Here are four ways to help you handle your emotions in a positive way:
                        <ul className="living-with-esrd-ul">
                            <li className="living-with-esrd-li">Share you feelings with someone in your support team.</li>
                            <li className="living-with-esrd-li">Focus on the here and now as opposed to worrying about what the future holds.</li>
                            <li className="living-with-esrd-li">Take a walk or start a daily exercise routine.</li>
                            <li className="living-with-esrd-li">Build a community and gain support from others with chronic conditions.</li>
                        </ul>
                    </p>
                    <p className="living-with-esrd-p">
                        You can still build for and live a great life even with a condition like ESRD. It won't always be easy, and you may not always
                        have a positive attitude, but that's ok because no one does. However, take full advantage of those times when you are feeling
                        good and look for ways to improve your health, stay connected with your friends and family, and identify outlets to keep
                        growing.
                    </p>
                    <h2 className="living-with-esrd-h2">Living a Healthy Lifestyle</h2>
                    <p className="living-with-esrd-p">
                        Managing your time on dialysis is very important because you need to be able to schedule your other responsibilities around your
                        treatments. While many people believe dialysis can take over your entire life, the fact is it really only consumes about 10% of
                        your time. The remaining 90% should be used to enjoy the important things in your life. Here are six tips to help you get the
                        most out of your time:
                        <ul className="living-with-esrd-ul">
                            <li className="living-with-esrd-li">
                                Schedule your dialysis treatments - Keeping a schedule allows you to establish what's really free time.
                            </li>
                            <li className="living-with-esrd-li">
                                Make time for your full dialysis session - This includes travel time as well as your monthly meetings with your
                                dialysis treatment team.
                            </li>
                            <li className="living-with-esrd-li">
                                Keep a calendar - Make sure you don't overschedule yourself or miss out on important events.
                            </li>
                            <li className="living-with-esrd-li">
                                Develop a routine for the big things - Always take your medication at the prescribed time, keep a set bedtime, and make
                                a habit of exercising daily as well as purchasing your own groceries on a weekly basis.
                            </li>
                            <li className="living-with-esrd-li">
                                Make time for work and your personal interests - Staying active and engaged can be very rewarding.
                            </li>
                            <li className="living-with-esrd-li">
                                Don't forget to schedule some fun activities - Planning simple pleasures like watching your favorite TV show or
                                even attending a dinner party can improve your quality of life and keep you positive.
                            </li>
                        </ul>
                    </p>
                    <p className="living-with-esrd-p">
                        Dialysis treatment can leave you feeling drained both physically and mentally. Not getting the right amount of sleep can alter
                        your decision making and knock you off your routine, so make it a point to get the recommended amount of sound, recuperative
                        sleep every night.
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    );
}


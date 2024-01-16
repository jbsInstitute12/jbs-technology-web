import React from 'react'
import App_Dev from '../../../assets/image/Appdevelopment/appDevelop.svg'
import APP_bg from '../../../assets/image/Appdevelopment/appDev_bg.svg'
import App_1 from '../../../assets/image/Appdevelopment/app1.gif'
import App_2 from '../../../assets/image/Appdevelopment/app2.gif'
import App_3 from '../../../assets/image/Appdevelopment/app3.gif'
import App_4 from '../../../assets/image/Appdevelopment/app4.gif'
import App_5 from '../../../assets/image/Appdevelopment/app5.gif'
import App_6 from '../../../assets/image/Appdevelopment/app6.gif'
import App_7 from '../../../assets/image/Appdevelopment/app7.gif'
import Why_1 from '../../../assets/image/Appdevelopment/why1.gif'
import Why_2 from '../../../assets/image/Appdevelopment/why2.gif'
import Why_3 from '../../../assets/image/Appdevelopment/why3.gif'
import '../Services.css'


function AppDevelopment() {
    const WebDevelopments = [
        {
            id: 1,
            title: ' Technology Consultation ',
            description: ' Let our team of experts guide you on each significant technical aspect of app development, so that you can make informed decisions. ',
            icon: App_1
        },
        {
            id: 1,
            title: ' Native App Development ',
            description: 'We use a combination of expertise and proficiency to develop applications based on React Native and Flutter frameworks.',
            icon: App_2,
        },
        {
            id: 1,
            title: 'Hybrid App Development',
            description: ' As a mobile app development company, we build extensive hybrid apps for iOS, Android and cross-platform to ensure the best experience for your customers. ',
            icon: App_3,
        },
        {
            id: 1,
            title: ' Progressive Web App Development ',
            description: 'Our progressive web app development services can benefit you with a responsive and polished app for all devices.',
            icon: App_4,
        },
        {
            id: 1,
            title: ' UI & UX Designing ',
            description: ' We house UI and UX experts who play a pivotal role in making your mobile app appealing and user-friendly. ',
            icon: App_5,
        },
        {
            id: 1,
            title: ' Maintenance & Support ',
            description: ' Periodic maintenance and upgrades of the application are seamlessly handled under our mobile app development services. ',
            icon: App_6,
        },
        {
            id: 1,
            title: ' QA & Testing ',
            description: ' Every app is tested for superior quality and functioning. In fact, if you have developed one, we run a detailed check to ensure optimum performance. ',
            icon: App_6,
        },
        {
            id: 1,
            title: ' App Migrations & Integrations ',
            description: ' Our mobile app solutions include assisting you with migrating your apps from one framework to another or integrating them for better functionality. ',
            icon: App_7,
        },

    ];
    return (
        <>
            {/* WEBDEVELOPMENT-SECTION-1 START */}
            <div className="webdevelopment-1-outer">
                <div className="container">
                    <div className="webdevelopment-1-inner">
                        <div className="row web1-item align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-right" data-aos-duration="3000">
                                <div className="title">App Development</div>
                                <p>Mobile apps are changing the way businesses work today. But, developing a mobile app that meets both business and customer expectations is not as easy as it seems. Therefore, to effectively generate customer loyalty, businesses today need intuitive, multi-experience mobile apps. We’ve helped companies design and develop exceptional mobile apps across diverse market verticals by keeping customer needs at the development center.</p>
                                <p>With some of the most competent mobile app consultants, our team can identify and lay down strategies to get your app to the market quickly. Then, leverage our mobile app development services to expand your business to the next level.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-left" data-aos-duration="3000">
                                <div className="image-block">
                                    <img src={App_Dev} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* WEBDEVELOPMENT-SECTION-1 END */}


            {/* WEBDEVELOPMENT-SECTION-2 START */}
            <div className="webdevelopment-2-outer">
                <div className="container">
                    <div className="webdevelopment-2-inner">
                        <div className="section-title text-center">
                            <div className="title">
                                App Development Services
                            </div>
                            <div className="web-2-item row">
                                {
                                    WebDevelopments.map((item) => (
                                        <div key={item.id} className="item col-lg-4 item" data-aos="zoom-out-down" data-aos-duration="3000">
                                            <div className="item-inner">
                                                <div className="icon">
                                                    <img src={item.icon} alt="" />
                                                </div>
                                                <div className="main-title mb-3">{item.title}</div>
                                                <div className="sub">{item.description}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* WEBDEVELOPMENT-SECTION-2 END */}

            {/* WEBDEVELOPMENT-SECTION-3 START */}
            <div className="webdevelopment-3-outer">
                <div className="container">
                    <div className="webdevelopment-3-inner">
                        <div className="section-title text-center">
                            <div className="title">
                                Why Choose Jbs Technology For Web Development
                            </div>
                            <div className="web-3-item row align-items-center">
                                <div className="col-lg-6 item" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="image-block">
                                        <img src={APP_bg} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                    <ul>
                                        <li><span>&#10046;</span>Jbs Technology  holds a practiced team of proficient mobile app developers who have experience in making functionality-rich, feature-loaded, and scalable Android/iOS mobile applications to let your business moveable on mobile. </li>
                                        <li><span>&#10046;</span>Jbs Technology has a great group of Android/IOS mobile application testing, design, Integrations which take care of the mobile applications. We carry are loyal and high performing.</li>

                                        <li><span>&#10046;</span>We rent the most effective resources to handle the ever-altering desires of our clients and facilitate them to get outstanding services loaded with premier options – to produce the most effective digital expertise from any part of the world. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* WEBDEVELOPMENT-SECTION-3 END */}


            {/* WEBDEVELOPMENT-SECTION-4 START */}
            <div className="webdevelopment-4-outer">
                <div className="container">
                    <div className="webdevelopment-4-inner">
                        <div className="section-title text-center">
                            <div className="title">
                                Why Jbs Technology
                            </div>
                            <div className="web-4-item row">
                                <div className="item col-lg-4 item" data-aos="zoom-out-up" data-aos-duration="3000">
                                    <div className="item-inner">
                                        <div className="icon">
                                            <img src={Why_1} alt="" />
                                        </div>
                                        <div className="main-title mb-3">Innovation</div>
                                        <div className="sub"> We believe in bringing innovation to each project and customer requirements we accomplish.</div>
                                    </div>
                                </div>
                                <div className="item col-lg-4 item" data-aos="zoom-out-up" data-aos-duration="3000">
                                    <div className="item-inner">
                                        <div className="icon">
                                            <img src={Why_2} alt="" />
                                        </div>
                                        <div className="main-title mb-3">Quality-Focused</div>
                                        <div className="sub">We, as a web development company, consistent focus on quality over quantity - which also makes us reliable. </div>
                                    </div>
                                </div>
                                <div className="item col-lg-4 item" data-aos="zoom-out-up" data-aos-duration="3000">
                                    <div className="item-inner">
                                        <div className="icon">
                                            <img src={Why_3} alt="" />
                                        </div>
                                        <div className="main-title mb-3">Value for Money</div>
                                        <div className="sub"> Along with prompt delivery, Vasundhara provides services at affordable and competitive rates.</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* WEBDEVELOPMENT-SECTION-4 END */}
        </>
    )
}

export default AppDevelopment

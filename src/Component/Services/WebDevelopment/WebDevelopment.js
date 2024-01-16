import React from 'react'
import Web_1 from '../../../assets/image/webdevelopment/web1.svg'
import webs_1 from '../../../assets/image/webdevelopment/web1.gif'
import webs_2 from '../../../assets/image/webdevelopment/web2.gif'
import webs_3 from '../../../assets/image/webdevelopment/web3.gif'
import webs_4 from '../../../assets/image/webdevelopment/web4.gif'
import webs_5 from '../../../assets/image/webdevelopment/web5.gif'
import webs_6 from '../../../assets/image/webdevelopment/web6.gif'
import webs_7 from '../../../assets/image/webdevelopment/web7.gif'
import webs_8 from '../../../assets/image/webdevelopment/web8.gif'
import webs_9 from '../../../assets/image/webdevelopment/web9.gif'
import WEb_bg from '../../../assets/image/webdevelopment/Web_bg.svg'
import Why_1 from '../../../assets/image/webdevelopment/why1.gif'
import Why_2 from '../../../assets/image/webdevelopment/why2.gif'
import Why_3 from '../../../assets/image/webdevelopment/why3.gif'
import '../Services.css'

function WebDevelopment() {
    const WebDevelopments = [
        {
            id: 1,
            title: 'Custom Web Development',
            description: 'We take up projects which deliver tailor-made web app solutions or websites while ensuring quality and timely services.',
            icon: webs_1,
        },
        {
            id: 2,
            title: ' Open Source Web Development ',
            description: 'We do provide open source web development services, so that you can observe, learn and modify the contents as per your convenience.',
            icon: webs_2,
        },
        {
            id: 3,
            title: 'Front-end Web Development',
            description: 'Our team of talented web developers ensure that the front-end of your website or web app is presentable and interactive to the end user.',
            icon: webs_3,
        },
        {
            id: 4,
            title: 'Back-end Web Development',
            description: ' Whilst the front-end development is crucial for user interaction, the back-end development team takes care of its smooth functioning. ',
            icon: webs_4,
        },
        {
            id: 5,
            title: 'CMS Web Development',
            description: 'Our CMS web development services are vital for any business that is struggling with managing content and keeping the website consistently up-to-date.',
            icon: webs_5,
        },
        {
            id: 6,
            title: ' E-Commerce Web Development ',
            description: ' Websites are the base of every e-commerce business. If you are one of those, try our e-commerce website development services to make your store succeed. ',
            icon: webs_6,
        },
        {
            id: 7,
            title: ' Progressive Web Development ',
            description: ' Web applications need to be as responsive as their mobile counterparts. And our progressive web development services include exactly that and more. ',
            icon: webs_7,
        },
        {
            id: 8,
            title: ' User-Friendly Web Development ',
            description: ' The websites and web apps we develop are user-friendly and compelling to keep your users and visitors engaged for a long time. ',
            icon: webs_8,
        },
        {
            id: 9,
            title: 'UI/UX Designing',
            description: 'Jbs Technology, as a web development company ensures that every site has a unique appeal blended with minimalistic UI/UX design.',
            icon: webs_9,
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
                                <div className="title">Web Development</div>
                                <p>Jbs creates innovative websites for businesses that are interactive and custom-made. A stunning, responsive web design will facilitate your progress to get the customer involved in your brand’s history.</p>
                                <p>As a creative website-design company, we portray our brand through beautiful imagery, sleek design, carefully selected elements, and an attractive conversational writing tone.</p>
                                <p>The results of our web development services and agile web development transcend all the aspects of quality needed to provide websites with high performance.
                                 Including website design and development, we offer a full web solution Jbs Technology.
                                 </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 item" data-aos="fade-left" data-aos-duration="3000">
                                <div className="image-block">
                                    <img src={Web_1} alt="" />
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
                                Web Development Services
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
                                        <img src={WEb_bg} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                    <ul>
                                        <li><span>&#10046;</span>Jbs Technology is the most trustworthy and leading web development company in India, that provides the most effective web development services that add worth to your business. </li>
                                        <li><span>&#10046;</span>We use the best website development strategy possible, which has enabled us deliver numerous projects to many clients from Europe, US and other countries.</li>
                                        <li><span>&#10046;</span>
                                            Our dedicated web developers have active expertise in making stunning, modern, and creative websites that permit you to manage your business additional expeditiously and effectively. </li>
                                        <li><span>&#10046;</span>We will assist you to build absolutely responsive, business-focused, and extremely ascendable websites in line with your distinctive business necessities.</li>
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

export default WebDevelopment

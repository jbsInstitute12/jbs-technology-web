import React from 'react'
import Ser_1 from '../../assets/image/Services/ser1.webp'
import Ser_2 from '../../assets/image/Services/ser2.webp'
import Ser_3 from '../../assets/image/Services/serv3.webp'
import Serv_bg from '../../assets/image/Services/serv_bg.webp'
import Common from '../../Extra/Common'
function Services() {

    return (
        <>

            {/* COMMON BLOCK START*/}
            <div className="common-main-container">
                <div className="container">
                    <Common title={`Services`} />
                </div>
            </div>
            {/* COMMON BLOCK END*/}
            {/* SERVICE-SECTION-1 */}
            <div className="service-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>Our Services</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">We Provide The Best Service For You</div>
                        <div className="text">	“With some of the most competent mobile app consultants, our team can identify and lay down strategies to get your app to the market quickly. Then, leverage our mobile app development services to expand your business to the next level.”</div>
                    </div>
                    <div className="service-item row">
                        <div className="col-lg-4 col-md-6 col-sm-12  item">
                            <div className="item-inner">
                                <img src={Ser_1} alt="" />
                                <div className="title mb-2">Application Devlopment</div>
                                <div className="content">"Mobile applications in the real world need to be efficient, ensuring they deliver smooth user experiences, consume minimal resources, and provide desired functionalities effectively."</div>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-12 item">
                            <div className="item-inner">
                                <img src={Ser_2} alt="" />
                                <div className="title mb-2">Web  Devlopment</div>
                                <div className="content">"Jbs Technology creates innovative websites for businesses that are interactive and custom-made. A stunning, responsive web design will facilitate your progress to get the customer involved in your brand’s history."</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12  item">
                            <div className="item-inner">
                                <img src={Ser_3} alt="" />
                                <div className="title mb-2">Hire Dedicated Team</div>
                                <div className="content">"We’re constantly ahead of the curve when it comes to technology. Our professional development teams are well-versed in cutting-edge technology, allowing us to achieve your visions in the most efficient manner possible."</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* SERVICE-SECTION-1 */}



            {/* service-section-2 */}
            <div className="service-outer">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                <div className="timeline" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-globe" />
                                        </div>
                                        <h3 className="title">Web Designing</h3>
                                        <p className="description">
                                            "Elevate your online presence with our expert web design services. We craft visually stunning and user-friendly websites tailored to your brand, ensuring a seamless and engaging digital experience for your audience."
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-rocket" />
                                        </div>
                                        <h3 className="title">Flutter Development</h3>
                                        <p className="description">
                                            "Empower your mobile app vision with our Flutter development expertise. We create cross-platform applications that combine beautiful design and high performance, ensuring a seamless user experience across devices."
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-user" />
                                        </div>
                                        <h3 className="title">Web Development </h3>
                                        <p className="description">
                                            "Unlock digital possibilities with our web development prowess. We build responsive, feature-rich websites tailored to your needs. Elevate your online presence and engage users with our innovative solutions."
                                        </p>
                                    </div>
                                </div>
                                <div className="timeline" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-briefcase" />
                                        </div>
                                        <h3 className="title">UI/UX Desiner</h3>
                                        <p className="description">
                                            Unlock digital possibilities with our web development prowess. We build responsive, feature-rich websites tailored to your needs. Elevate your online presence and engage users with our innovative solutions."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* service-section-2 */}

            {/* service-section-3 */}
            <div className="service-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>FAQ</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">general Question</div>
                    </div>
                    <div className="service-item row align-items-center">
                        <div className="col-lg-4 faq-item">
                            <div className="image-block">
                                <img src={Serv_bg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 faq-item">
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Can Software Devlopment really help my business?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            "Yes, software development can significantly enhance your business by improving efficiency, automating processes, and enabling better customer experiences."
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            What are the benefits of Software for my company?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            "Software enhances productivity, streamlines operations, improves customer engagement, and boosts overall efficiency for your company."
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Does my company really need a E-commarce Website?
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            "Yes, an e-commerce website expands your market reach, increases sales, and provides convenient shopping experiences for customers, essential for the growth of your company."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service-section-3 */}



        </>
    )
}

export default Services

import React from 'react'

function OurValues() {
    return (
        <>
            <div className="ourvalue-about-outer">
                <div className="container">
                    <div className="ourvalue-inner">
                        <div className="section-title text-center">
                            <div className="mains-title d-flex align-items-center justify-content-center">
                                <i class="fas fa-caret-right"></i> <h3 className='mx-2'>OUR VALUES</h3><i class="fas fa-caret-left"></i>
                            </div>
                            <div className="title">Elevating Innovation, Powering Success</div>
                            <div className="text">At JBS Technology, our path to digital brilliance is defined by our client-centric approach, collaborations shaped by integrity, and values driving excellence.</div>
                        </div>
                    </div>
                </div>
                <section class="ps-timeline-sec">
                    <div class="container">
                        <ol class="ps-timeline">
                            <li>
                                <div class="ps-top"
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="3000"
                                >
                                    <p><h4>Ethical Solutions</h4>Trust us for ethical, sustainable, and innovative solutions that elevate your business while aligning with the values of a responsible and conscientious future.</p>
                                </div>

                                <span class="ps-sp-top"><i class="fas fa-circle"></i></span>
                            </li>
                            <li>
                                <div class="ps-bot"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-duration="3000">
                                    <p><h4>Awesome Ideas</h4>Whether you have a groundbreaking vision or need help refining your ideas, we're here to collaborate and bring the extraordinary to life in the digital realm.</p>
                                </div>

                                <span class="ps-sp-bot"><i class="fas fa-circle"></i></span>
                            </li>
                            <li>
                                <div  class="ps-top " data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="3000" > 
                                    <p><h4>Project Setting</h4>Our project setting is designed for clarity and efficiency, ensuring a smooth path from concept to completion.</p>
                                </div>

                                <span class="ps-sp-top"><i class="fas fa-circle"></i></span>
                            </li>
                            <li>
                                <div class="ps-bot"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-duration="3000">
                                    <p><h4>Source of Funds</h4>We're driven by a commitment to delivering top-tier IT solutions. and building lasting client relationships.</p>
                                </div>

                                <span class="ps-sp-bot"><i class="fas fa-circle"></i></span>
                            </li>
                            <li>
                                <div class="ps-top"
                                    data-aos="fade-down"
                                    data-aos-anchor-placement="center-bottom"
                                    data-aos-duration="3000" >
                                    <p><h4>Market Analysis</h4>
                                    Trust us to navigate the digital terrain, providing you with strategies that ensure your business stays ahead of the curve.</p>
                                </div>

                                <span class="ps-sp-top"><i class="fas fa-circle"></i></span>
                            </li>
                        </ol>
                    </div>
                </section>
                <div className="ourvalue-bg">
                </div>
            </div>
        </>
    )
}

export default OurValues

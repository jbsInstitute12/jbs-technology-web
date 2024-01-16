import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function MoreAbout() {

    const WhyChooseus = [
        { name: 'Innovative Solutions', icon: 'fas fa-arrow-right' },
        { name: 'Client-Centric Approach', icon: 'fas fa-arrow-right' },
        { name: 'Expert Team', icon: 'fas fa-arrow-right' },
        { name: 'Reliability', icon: 'fas fa-arrow-right' },
        { name: 'Continuous Learning:', icon: 'fas fa-arrow-right' },
        { name: 'Results-Driven', icon: 'fas fa-arrow-right' },

    ];
    

    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress .progress-bar');

        progressBars.forEach((progressBar) => {
            progressBar.style.width = `${progressBar.getAttribute('aria-valuenow')}%`;
        });
    }, []);

    return (
        <>
            <div className="more-about-outer">
                <div className="container">
                    <div className="more-about-inner">
                        <div className="section-title text-center">
                            <div className="mains-title d-flex align-items-center justify-content-center">
                                <i class="fas fa-caret-right"></i> <h3 className='mx-2'>About Us</h3><i class="fas fa-caret-left"></i>
                            </div>
                            <div className="title">More About Us.</div>
                            <div className="text">	Welcome to JBS TECHNOLOGY, where technological innovation meets visionary expertise. With a passion for transforming challenges into solutions, we are your trusted partner on the journey to digital excellence.</div>
                        </div>
                        <div className="row more-about-item">
                            <div className="col-lg-4  col-md-6 col-sm-6 item mb-4 ">
                                <div className="title">Who we are.</div>
                                <div className="text">We are tech visionaries at JBS TECHNOLOGY, and our goal is to reinvent digital excellence. We combine knowledge with creativity, driven by an enthusiasm for innovation and a dedication to customer success. <br/> We negotiate the intricacies of the digital environment as your strategic IT partner, converting obstacles into opportunities and concepts into realities. </div>
                                <div className="btn z"><Link to="/events">More about us</Link></div>
                            </div>
                            <div className="col-lg-4  col-md-6 col-sm-6 item mb-4">
                                <div className="title">Why choose us.</div>
                                <ul>
                                    {WhyChooseus.map((item) => (
                                        <li className='mb-3 pr'>
                                            <span className='mr-2'><i className={item.icon}></i></span>
                                            {item.name}
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="col-lg-4  col-md-6 col-sm-6 item mb-4">
                                <div className="title">Our experience.</div>

                                <span className='Journey'>Development - 10 years</span>
                                <div class="progress skill-bar " data-aos="fade-right" data-aos-transition="4000">
                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>

                                <span className='Journey'>Design - 8 years</span>
                                <div class="progress skill-bar" data-aos="fade-right" data-aos-transition="4000">
                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" >

                                    </div>
                                </div>
                                <span className='Journey'>Photography - 6 years</span>
                                <div class="progress skill-bar" data-aos="fade-right" data-aos-transition="4000">
                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>

                                <span className='Journey'>Video Production - 5 years</span>
                                <div class="progress skill-bar" data-aos="fade-right" data-aos-transition="4000">
                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>

                                <span className='Journey'>Marketing - 2 years</span>
                                <div class="progress skill-bar" data-aos="fade-right" data-aos-transition="4000">
                                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-about-bg">
                    <span></span>
                </div>
            </div>
        </>
    )
}

export default MoreAbout

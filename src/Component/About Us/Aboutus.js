import React, { useEffect, useState } from 'react'
import '../About Us/About us.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../assets/image/Shopify-Logo.png';
import img2 from '../../assets/image/WordPress-Logo.png';
import img3 from '../../assets/image/Android-logo.png';
import img4 from '../../assets/image/React-logo.png';
import img5 from '../../assets/image/Node.js-logo.png';
import our1 from '../../assets/image/Discover Meeting.png';
import our2 from '../../assets/image/Project Strategy.png';
import our3 from '../../assets/image/Wireframe.png';
import our4 from '../../assets/image/UI Design  Development.png';
import our5 from '../../assets/image/Web Development.png';
import our6 from '../../assets/image/Testing & Debugging.png';
import our7 from '../../assets/image/Delivery & Support.png';
import our8 from '../../assets/image/Launch.png';
import company1 from '../../assets/image/company1.svg';
import company2 from '../../assets/image/company2.svg';
import company3 from '../../assets/image/company3.png';
import company4 from '../../assets/image/company4.png';
import company5 from '../../assets/image/company6.png';
import Common from '../../Extra/Common';
import aboutbg from '../../assets/image/about-company/Layer_1.png'
import Owner_1 from '../../assets/image/Owner/Monil.png'
import Owner_2 from '../../assets/image/Owner/Harshad.png'
import Dev_1 from '../../assets/image/Developer/Ariyan.jpg'
import Dev_2 from '../../assets/image/Developer/fenyy.jpg'
import Dev_3 from '../../assets/image/Developer/Darshit.jpg'
import Dev_4 from '../../assets/image/Developer/Arshil.jpg'
import { debounce } from 'lodash';





function Aboutus() {
    const ourWork = [
        {
            id: "overWork", name: "Growth Mentality ", title: "Our business has a growth mentality, meaning that we are prepared to take chances in order to succeed and that we have the know-how to overcome obstacles.", image: our1
        },
        {
            id: "overWork", name: "Openness and Sincerity", title: "Our business offers services with a focus on the needs of the client. We think that in order to win over our clients' trust, we must be open and truthful. ", image: our2
        },
        {
            id: "overWork", name: "Team and Client Satisfaction", title: "To guarantee the happiness of our clients and staff, we uphold the highest standards in every facet of our operations. ", image: our3
        },
        {
            id: "overWork", name: "Productivity", title: "To complete the job more quickly, we are responsible for having strong productivity skills, such as time management, planning, and decision-making. ", image: our4
        },
        {
            id: "overWork", name: "Progressive Roadmap", title: "A strategic plan outlining a goal and the primary stages necessary to achieve it are developed by our development team.", image: our5
        },
        {
            id: "overWork", name: "Confidentiality", title: "User privacy and data security are our primary concerns while developing goods and solutions for customers. ", image: our6
        },
        {
            id: "overWork", name: "Client Concentration & Addiction", title: "We are a top development business with a primary focus on client pleasure. ", image: our7
        },
        {
            id: "overWork", name: "Work quality", title: "As a reputable business, we strive to meet the highest standards of quality in order to meet our clients' objectives.", image: our8
        },

    ]

    const LOGO = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1440: {
                items: 4,
            }
        },
    };
    return (
        <>

            {/* COMMON BLOCK START*/}
            <div className="common-main-container">
                <div className="container">
                    <Common title={`About Us`} />
                </div>
            </div>
            {/* COMMON BLOCK END*/}


            {/* ABOUT COMPANY START */}
            <div class="about-company-outer">
                <div class="container">
                    <div class="about-comapy-inner">
                        <div class="about-item row align-items-center">
                            <div class="left-item col-lg-5 col-md-4 col-sm-12 col-xs-12" data-aos="fade-right" data-aos-duration="3000">
                                <div class="title fs-lg-14 fs-lg-16 fs-xl-10 fs-xsm-13">
                                    <i class="fas fa-caret-right"></i>
                                    About 
                                </div>
                                <div class="sec-title fs-lg-50  fs-md-28 fs">
                                    Who we are?
                                </div>
                                <div class="text fs-md-20 fs-xsm-14">
                                    <p className='fs-lg-15 mb-2'>We aim to be not just a technology company, but also architects of digital transformation at JBS Technology. With an unwavering dedication to innovation and a love of pushing limits, we are experts in creating cutting-edge solutions that enable companies to prosper in the ever-changing digital landscape. </p>
                                    <p className='fs-lg-15 mb-2'>A group of seasoned professionals that bring a plethora of experience and knowledge to the table define our path. We skillfully combine technical expertise and creativity to provide software development, cloud solutions, and IT consulting to meet the specific demands of our clients.</p>
                                    <p className='fs-lg-15 mb-2'> Not only what we do, but also how we do it, is what makes us unique. In order to ensure that our solutions not only meet but also surpass the constantly changing needs of the digital arena, we take great satisfaction in cultivating a culture of collaboration and continual learning.</p>
                                    <p className='fs-lg-15 mb-2'>Our mission is clear: to guide businesses towards success by harnessing the power of technology. Whether you are a start up with bold ambitions or an established enterprise seeking to elevate your digital presence,  JBS TECHNOLOGY is here to be your strategic ally on the path to unparalleled innovation and growth.</p>
                                    <p className='fs-lg-15 mb-2'> Join us as we redefine possibilities, one line of code at a time. This is who we are –  JBS TECHNOLOGY, architects of a digitally empowered future.</p>
                                </div>
                            </div>
                            <div class="right-item col-lg-7 col-md-8 col-sm-12 col-xs-12" data-aos="fade-left" data-aos-duration="3000">
                                <div class="about-bg-img">
                                    <img src={aboutbg} alt="layer-1" data-aos="fade-up-right" data-aos-duration="3000" />
                                </div>
                                <div className="about-items">
                                    <div className="about-left col-lg-6">
                                        <div className="top-item">

                                            <AnimatedCounter title="WEBSITES DELIVERED" initialValue={0} targetValue={15} />
                                        </div>
                                        <div className="bottom-item">

                                            <AnimatedCounter title="CITY SERVED" initialValue={0} targetValue={250} />
                                        </div>
                                    </div>
                                    <div className="about-right col-lg-6">
                                        <div className="top-item">

                                            <AnimatedCounter title="YEARS OF EXPERIENCE" initialValue={0} targetValue={5} />
                                        </div>
                                        <div className="bottom-item">

                                            <AnimatedCounter title="SATISFIED CLIENTS" initialValue={0} targetValue={300} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT COMPANY END */}



            {/* LANGUAGE SLIDER START */}

            <div className='Slider-OwlCarousel-1'>
                <div className="container">
                    <OwlCarousel className='owl-theme' loop margin={10} nav  {...LOGO}>
                        <div class='item-1'>
                            <img src={img1} alt="Shopify-Logo" />
                        </div>
                        <div class='item-1'>
                            <img src={img2} alt="WordPress-Logo" />
                        </div>
                        <div class='item-1'>
                            <img src={img3} alt="Android-logo" />
                        </div>
                        <div class='item-1'>
                            <img src={img4} alt="React-logo" />
                        </div>
                        <div class='item-1'>
                            <img src={img5} alt="Node.js-logo" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            {/* LANGUAGE SLIDER END */}




            {/* WORK BLOCK START */}
            <div className='work-block-outer'>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>About Us</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">More About Us.</div>
                        <div className="text">Welcome to JBS TECHNOLOGY, where technological innovation meets visionary expertise. With a passion for transforming challenges into solutions, we are your trusted partner on the journey to digital excellence.</div>
                    </div>
                    <div>
                        <div className='about-section-tools row'>
                            {ourWork.map((item) => (
                                <div key={item.id} className='col-lg-3 col-md-6 col-sm-12 about-section-frist-tools' data-aos="zoom-in" data-aos-duration="3000">
                                    <div className='about-section-tools-title'>
                                        <div className="about-section-inner">
                                            <h5>{item.name}</h5>
                                            <p>{item.title}</p>
                                            <img src={item.image} alt=" " />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* WORK BLOCKEND */}


            {/* FOUNDER BLOCK START */}
            <div className='about-section-infotech'>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>MEET THE TEAM</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">Founders of Diversity Infotech</div>
                        <div className="text">	No matter what your requirement is; Mobile App and web development,
                            we have a specific approach which comprises of the following.</div>
                    </div>
                    <div className="about-section-content">
                        <div className="row owner-item d-flex justify-content-center">
                            <div className="item">
                                <div className="img-block">
                                    <img src={Owner_1} alt="owner_image" />
                                    <div className="Name">Monil Kakadiya <br /><span>Founder & CEO</span></div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-block">
                                    <img src={Owner_2} alt="owner_image" />
                                    <div className="Name">Harshad Kakadiya  <br /><span>Founder & CEO</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOUNDER BLOCK END */}


            {/* OUR TEAM MEMBER START */}
            <div className="our-team-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="title">Our Team Members</div>
                        <div className="text">	We are proud of the success and engagement that we provide our clients.</div>
                    </div>
                    <div className="our-team-inner">
                        <div className="row dev-item justify-content-center">
                            <div className="item col-lg-3 col-md-3 col-sm-12">
                                <div className="item-inner">
                                    <img src={Dev_1} alt="" />
                                    <div className="hover_block">
                                        <div className="dev p-2">Aaryan</div>
                                        <div className="work">UI/UX Designer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-12">
                                <div className="item-inner">
                                    <img src={Dev_2} alt="" />
                                    <div className="hover_block">
                                        <div className="dev p-2">Fenisha</div>
                                        <div className="work">Flutter Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-12">
                                <div className="item-inner">
                                    <img src={Dev_3} alt="" />
                                    <div className="hover_block">
                                        <div className="dev p-2">Darshit </div>
                                        <div className="work">React Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="item col-lg-3 col-md-3 col-sm-12">
                                <div className="item-inner">
                                    <img src={Dev_4} alt="" />
                                    <div className="hover_block">
                                        <div className="dev p-2">Arshil</div>
                                        <div className="work">Fullstack Developer</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* OUR TEAM MEMBER END */}

            {/* PARTNER BLOCK START */}
            <div className='about-section-Placement'>
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>Fueling Success Through Strong Alliances</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">Our Client's and  Partners</div>
                        <div className="text">	Join us in shaping the future of technology. Whether you're a client seeking innovative solutions or a potential partner eager to embark on a journey of collaboration, JBS TECHNOLOGY is here to lead the way, turning visions into digital realities.</div>
                    </div>
                    <div className='Slider-OwlCarousel-1'>
                        <OwlCarousel className='owl-theme' loop margin={10} nav  {...LOGO}>
                            <div class='item-1'>
                                <img src={company1} alt="Shopify-Logo" />
                            </div>
                            <div class='item-1'>
                                <img src={company2} alt="WordPress-Logo" />
                            </div>
                            <div class='item-1'>
                                <img src={company3} alt="Android-logo" />
                            </div>
                            <div class='item-1'>
                                <img src={company4} alt="React-logo" />
                            </div>
                            <div class='item-1'>
                                <img src={company5} alt="Node.js-logo" />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/* PARTNER BLOCK END */}
        </>

    )
}

export default Aboutus





const AnimatedCounter = ({ title, initialValue, targetValue }) => {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const difference = targetValue - initialValue;
        const duration = 4000;

        let startTimestamp;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;

            if (elapsed < duration) {
                const nextCounter = Math.ceil((elapsed / duration) * difference + initialValue);
                setCounter(nextCounter);
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCounter(targetValue);
            }
        };

        const debouncedAnimate = debounce(animate, 100); // Adjust the debounce delay

        animationFrameId = requestAnimationFrame(debouncedAnimate);

        return () => {
            cancelAnimationFrame(animationFrameId);
            debouncedAnimate.cancel();
        };
    }, [initialValue, targetValue]);

    return (
        <div className="item-inner">
            <div className="title fs-md-16 fs-sm-14 fs-xsm-14">{title}</div>
            <div className="review counter">{counter}+</div>
        </div>
    );
};
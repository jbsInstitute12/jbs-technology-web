import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import company1 from '../../assets/image/company1.svg';
import company2 from '../../assets/image/company2.svg';
import company3 from '../../assets/image/company3.png';
import company4 from '../../assets/image/company4.png';
import company5 from '../../assets/image/company6.png';


function OurPartner() {
    const LOGO = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
                nav:false,
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
            },
            1550: {
                items: 5,
            }
        },
    };

    return (
        <>
            <div className="partner-outer">
                <div className="container">
                    <div className="partner-inner">
                        <div className="section-title text-center">
                            <div className="mains-title d-flex align-items-center justify-content-center">
                                <i class="fas fa-caret-right"></i> <h3 className='mx-2 p-0'>Fueling Success Through Strong Alliances</h3><i class="fas fa-caret-left"></i>
                            </div>
                            <div className="title">Our Client's and  Partners</div>
                            <div className="text">Join us in shaping the future of technology. Whether you're a client seeking innovative solutions or a potential partner eager to embark on a journey of collaboration, JBS TECHNOLOGY is here to lead the way, turning visions into digital realities.</div>
                        </div>
                        <div className='Slider-OwlCarousel-1'>
                            <OwlCarousel className='owl-theme' loop margin={10} nav  {...LOGO}>
                                <div class='item-1'>
                                    <img src={company1} alt="" />
                                </div>
                                <div class='item-1'>
                                    <img src={company2} alt="" />
                                </div>
                                <div class='item-1'>
                                    <img src={company3} alt="" />
                                </div>
                                <div class='item-1'>
                                    <img src={company4} alt="" />
                                </div>
                                <div class='item-1'>
                                    <img src={company5} alt="" />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                </div>
                <div className="gallery-outer-bg">
                </div>
            </div>

        </>
    )
}

export default OurPartner

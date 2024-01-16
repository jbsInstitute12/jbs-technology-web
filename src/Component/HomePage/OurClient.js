import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import clientphoto from '../../assets/image/Header_logo.png'

function OurClient() {

    const OurClients = {
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
                items: 3,
            }
        },
    }
    return (
        <>
            <div className="ourclients-about-outer">
                <div className="container">
                    <div className="ourclients-inner">
                        <div className="section-title text-center">
                            <div className="mains-title d-flex align-items-center justify-content-center">
                                <i class="fas fa-caret-right"></i> <h3 className='mx-2'>Our Clients</h3><i class="fas fa-caret-left"></i>
                            </div>
                            <div className="title"> Our Upwork Client's Testimonials</div>
                            <div className="text">Elevating Businesses, One Client Review at a Time: Discover the Resounding Acclaim for JBS TECHNOLOGY – Where Excellence Meets Client Satisfaction.</div>
                        </div>
                        <div className="client-content">
                            <OwlCarousel className='owl-them'  {...OurClients} loop margin={10} nav>
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="img-block mb-2">
                                            <img src={clientphoto} alt="" />
                                        </div>
                                        <div className="text">hennah Baker</div>
                                        <div className="review d- justify-content-center my-3 ">
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#a4a4a4' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#a4a4a4' }}></i></span>
                                        </div>
                                        <div className="des">
                                            Exceptional and Luxurious Experience with JBS TECHNOLOGY: As a client, I have been consistently impressed by the elegant and expensive touch that JBS TECHNOLOGY brings to every project.  Engaging with JBS TECHNOLOGY isn't just a transaction; it's an investment in top-tier quality and a partnership that exudes opulence in the world of IT solutions.
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="img-block mb-2">
                                            <img src={clientphoto} alt="" />
                                        </div>
                                        <div className="text">Noah Flynn</div>
                                        <div className="review d- justify-content-center my-3 ">
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#a4a4a4' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#a4a4a4' }}></i></span>
                                        </div>
                                        <div className="des">
                                            The partnership with JBS TECHNOLOGY is a journey into a world where digital solutions transcend the ordinary. Their work is an investment in distinction, with each project embodying a level of elegance that reflects not just expertise but a commitment to a class above. JBS TECHNOLOGY– where digital excellence meets the epitome of sophistication.
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="img-block mb-2">
                                            <img src={clientphoto} alt="" />
                                        </div>
                                        <div className="text">Jeel Kakadiya</div>
                                        <div className="review d- justify-content-center my-3 ">
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#dacc08' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#a4a4a4' }}></i></span>
                                            <span><i class="fas fa-star" style={{ color: '#a4a4a4' }}></i></span>
                                        </div>
                                        <div className="des">
                                            Choosing JBS TECHNOLOGY for our IT solutions was a decision rooted in a pursuit of the extraordinary. Their work isn't just technologically advanced; it's a testament to digital elegance. JBS TECHNOLOGY doesn't just meet standards; they redefine them, delivering a level of service that resonates with the refined taste of success.
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="ourvalue-bg">
                </div>
            </div>
        </>
    )
}

export default OurClient

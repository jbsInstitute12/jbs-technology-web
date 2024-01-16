import React from 'react'
import '../About Us/About us.css'
import '../Careers/Careers.css'
import '../EventsPage/EventsPage.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import eventsImg1 from '../../assets/image/events (1).png'
import eventsImg2 from '../../assets/image/events (2).png'
import eventsImg3 from '../../assets/image/events (3).png'
import eventsImg4 from '../../assets/image/events (4).png'
import eventSliderImg1 from '../../assets/image/eventParty-1.png'
import eventSliderImg2 from '../../assets/image/eventParty-2.png'
import eventSliderImg3 from '../../assets/image/eventParty-3.jpg'
import eventSliderImg4 from '../../assets/image/eventParty-4.jpeg'
import Gallery1 from '../../assets/image/gallery/img-gallery-1.png'
import Gallery2 from '../../assets/image/gallery/img-gallery-2.png'
import Gallery3 from '../../assets/image/gallery/img-gallery-3.png'
import Gallery4 from '../../assets/image/gallery/img-gallery-4.png'
import Gallery5 from '../../assets/image/gallery/img-gallery-5.png'
import Gallery6 from '../../assets/image/gallery/img-gallery-6.png'
import Gallery7 from '../../assets/image/gallery/img-gallery-7.png'
import Gallery8 from '../../assets/image/gallery/img-gallery-8.png'

const EventsPage = () => {

    const OurClients = {
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
            },
            600: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1440: {
                items: 4,
            }
        },
    }

    const eventSlider = {
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


        },
    }
    return (
        <>

            {/*UPCOMING EVENTS BLOCk START*/}
            <div className="upcoming-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>  UPCOMING EVENTS</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title"> Latest Awesome Events</div>
                        <div className="text">	No matter what your requirement is Mobile App and web development,
                            we have a specific approach which comprises of the following.</div>
                    </div>
                    <div className="upcoming-carousel">
                        <OwlCarousel className='owl-theme' loop margin={10} nav  {...OurClients}>
                            <div class='item'>
                                <div className="date">
                                    15 Aug
                                </div>
                                <img src={eventsImg1} alt="" style={{ height: '400px', width: '327px' }} />
                            </div>
                            <div class='item'>
                                <div className="date">
                                    25
                                    Dec
                                </div>
                                <img src={eventsImg2} alt="" style={{ width: '327px', height: '400px' }} />
                            </div>
                            <div class='item'>
                                <div className="date">
                                    14
                                    Jan
                                </div>
                                <img src={eventsImg3} alt="" style={{ height: '400px', width: '327px' }} />
                            </div>
                            <div class='item'>
                                <div className="date">
                                    26
                                    Jan
                                </div>
                                <img src={eventsImg4} alt="" style={{ height: '400px', width: '327px' }} />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/*UPCOMING EVENTS BLOCk END*/}





            {/*Harmoni Gallery BLOCk START*/}
            <div className="Harmoni-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>Harmoni Gallery</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">Beautiful & Unforgettable Times</div>
                        <div className="text">No matter what your requirement is; Mobile App and web development,
                            we have a specific approach which comprises of the following.</div>
                    </div>
                    <div className="galleryImg-outer">
                        <div className="row">
                            <div className="col-lg-4 gallery-box-1 ">
                                <div className='gallery-inner-1 '>
                                    <i class="fa-solid fa-star"></i>
                                    <p className='ps-2'>All Gallery</p>
                                </div>
                                <div className='gallery-inner-1 d-flex align-items-center'>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <p className='ps-2'>Video Gallery</p>
                                </div>
                                <div className='gallery-inner-1 d-flex align-items-center'>
                                    <i class="fa-solid fa-image"></i>
                                    <p className='ps-2'>Photo Gallery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallery_all-outer">
                        <div className="row gallery_top">
                            <div className="col-lg-3 col-sm-12 item left">
                                <div className="image-block">
                                    <img src={Gallery1} alt="" />
                                    <div className="event_name">
                                        John Doe Wedding day
                                        <br />
                                        <span>Festival Party, 24 June 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-12 item">
                                <div className="row top mb-2">
                                    <div className="col-lg-9 col-md-6 col-sm-12 item">
                                        <div className="image-block">
                                            <img src={Gallery2} alt="" />
                                            <div className="event_name">
                                                John Doe Wedding day
                                                <br />
                                                <span>Festival Party, 24 June 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 item">
                                        <div className="image-block">
                                            <img src={Gallery3} alt="" />
                                            <div className="event_name">
                                                John Doe Wedding day
                                                <br />
                                                <span>Festival Party, 24 June 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row bottom">
                                    <div className="col-lg-3 item">
                                        <div className="image-block">
                                            <img src={Gallery4} alt="" />
                                            <div className="event_name">
                                                John Doe Wedding day
                                                <br />
                                                <span>Festival Party, 24 June 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 item">
                                        <div className="image-block">
                                            <img src={Gallery5} alt="" />
                                            <div className="event_name">
                                                John Doe Wedding day
                                                <br />
                                                <span>Festival Party, 24 June 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gallery_bottom mt-4">
                            <div className="col-lg-6 item">
                                <div className="image-block">
                                    <img src={Gallery6} alt="" />
                                    <div className="event_name">
                                        John Doe Wedding day
                                        <br />
                                        <span>Festival Party, 24 June 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 item">
                                <div className="image-block">
                                    <img src={Gallery7} alt="" />
                                    <div className="event_name">
                                        John Doe Wedding day
                                        <br />
                                        <span>Festival Party, 24 June 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 item">
                                <div className="image-block">
                                    <img src={Gallery8} alt="" />
                                    <div className="event_name">
                                        John Doe Wedding day
                                        <br />
                                        <span>Festival Party, 24 June 2018</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Harmoni Gallery BLOCk END*/}

            {/*JBS Expertise's BLOCK START*/}
            <div className="Expertise-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="mains-title d-flex align-items-center justify-content-center">
                            <i class="fas fa-caret-right"></i> <h3 className='mx-2'>   Our Services</h3><i class="fas fa-caret-left"></i>
                        </div>
                        <div className="title">   JBS Expertise's</div>
                        <div className="text"> No matter what your requirement is Mobile App and web development,
                            we have a specific approach which comprises of the following.</div>
                    </div>
                    <div className="event-slider">
                        <OwlCarousel className='owl-theme' loop margin={10} nav  {...eventSlider}>
                            <div class='item'>
                                <img src={eventSliderImg1} alt="" style={{ height: '400px', width: '327px' }} />
                                <div className='event-title'>Birthday Party</div>
                            </div>
                            <div class='item'>
                                <img src={eventSliderImg2} alt="" style={{ width: '327px', height: '400px' }} />
                                <div className='event-title'>Business Meeting</div>
                            </div>
                            <div class='item'>
                                <img src={eventSliderImg3} alt="" style={{ height: '400px', width: '327px' }} />
                                <div className='event-title'>Event </div>
                            </div>
                            <div class='item'>
                                <img src={eventSliderImg4} alt="" style={{ height: '400px', width: '327px' }} />
                                <div className='event-title'>Travel</div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/*JBS Expertise's BLOCK END*/}
        </>
    )
}

export default EventsPage

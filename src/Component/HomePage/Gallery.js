import React from 'react'
import { Link } from 'react-router-dom';


const Gallerys = [
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' },
    { time: '00:00 PM',  text: 'We derive from the culture o obeying regulations and follow the path of staying true to our core values.' }
];

function Gallery() {
    return (
        <>
            <div className="gallery-outer">
                <div className="container">
                    <div className="gallery-inner">
                        <div className="section-title text-center">
                            <div className="mains-title d-flex align-items-center justify-content-center">
                                <i class="fas fa-caret-right"></i> <h3 className='mx-2'>GALLERY</h3><i class="fas fa-caret-left"></i>
                            </div>
                            <div className="title">Events at Company.</div>
                            <div className="text">Here are some glimpses of our joyous felicitous.</div>
                        </div>
                        <div className="row gallery-item">
                            {Gallerys.map((item, index) => (
                                <div key={index} className="item col-lg-3 col-md-6 col-sm-6 mb-4">
                                    <div className="item-inner">
                                        <div className="top-item d-flex justify-content-between mb-4">
                                            <div className="time">{item.time}</div>
                                                          </div>
                                        <div className="text mb-4">{item.text}</div>
                                        <Link to="events" className="btn">More</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="gallery-outer-bg">
                </div> */}
            </div>
        </>
    )
}

export default Gallery;

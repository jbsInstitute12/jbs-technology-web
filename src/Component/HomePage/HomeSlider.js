import React from 'react';
import '../../Component/HomePage/HomePage.css';
import Slider_bg_1 from '../../assets/image/slider/Slider_bg_1.png'
import { Link } from 'react-router-dom';
function HomeSlider() {
  return (
    <>
      <div className="slider-outer">
        <div className="container">
          <div className="row item">
            <div className="col-lg-4  col-md-6 col-sm-6 col-xsm-6 left-item" data-aos="fade-right" data-aos-duration="3000">
              <div className="title"><i className="fas fa-caret-right" />Luxury in Every Line of Code</div>
              <div className="sub-text">
                Where Vision Meets Virtuality: Your IT Frontier
              </div>
              <div className="slider-text">
                Crafting digital opulence, JBS TECHNOLOGY is the epitome of tech sophistication, delivering bespoke IT solutions that redefine luxury in every line of code. Take advantage of the pinnacle of innovation to elevate your company, where creativity and technology come together to achieve digital excellence.
              </div>
              <div className="slider-btn">
                <Link to="/contactus" className="contact-btn">Contact Us<i className="fas fa-arrow-right" /></Link>
                <Link to="/portfolio" className="portfolio-btn">See Portfolio<i className="fas fa-arrow-right" /></Link>
              </div>
            </div>
            <div className="col-lg-8  col-md-6 col-sm-6 right-item" data-aos="fade-down" data-aos-duration="3000">
              <div className="img">
                <img src={Slider_bg_1} alt="slider-bg-1" />
              </div>
              <div className='social-item' data-aos-duration="3000" data-aos="fade-left">
                <span></span>
                <ul>
                  <li>
                    <Link to="https://www.linkedin.com/company/jbs-coder-infotech/" target='_blank'><i class="fab fa-linkedin-in"></i></Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/profile.php?id=61555676966897" target='_blank'><i class="fab fa-facebook-f"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to="https://wa.link/39qfii" target='_blank'><i class="fab fa-whatsapp"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-instagram"></i></Link>
                  </li>
                  <li>
                    <Link to=""><i class="fab fa-google"></i></Link>
                  </li>
                </ul>
                <span></span>

              </div>

            </div>
          </div>
          <div className='slider-title' >
            JBS TECHNOLOGY
          </div>
        </div>
      </div>


    </>
  )
}

export default HomeSlider;



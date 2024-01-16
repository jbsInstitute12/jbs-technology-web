import React, { useEffect, useState } from 'react'
import '../HomePage/HomePage.css'
import aboutbg from '../../assets/image/about-company/Layer_1.png'
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';


function AboutCompany() {
  return (
    <>
      <div class="about-company-outer">
        <div class="container">
          <div class="about-comapy-inner">
            <div class="about-item row align-items-center">
              <div class="left-item col-lg-5 col-md-4 col-sm-12 col-xs-12" data-aos="fade-right" data-aos-duration="3000">
                <div class="title fs-lg-14 fs-lg-18 fs-xsm-13">
                  <i class="fas fa-caret-right"></i>
                  About Company
                </div>
                <div class="sec-title fs-lg-60 fs-md-28">
                  Adding a pair of a wings to your business
                </div>
                <div class="text fs-md-20 fs-xsm-14">
                  Welcome to  JBS TECHNOLOGY, where the symphony of precision code and opulent innovation orchestrates a bespoke digital experience. Immerse yourself in the tailored sophistication of our exclusive IT solutions, meticulously crafted for discerning enterprises that seek not just technology, but a transcendent journey to elevate their digital presence. At the intersection of luxury and expertise, we redefine the boundaries of tech mastery, delivering not just solutions but a manifestation of elite craftsmanship. Unveil the extraordinary, embrace the exceptional – because at JBS TECHNOLOGY, we don't just code, we compose digital elegance for those who understand the true worth of refinement in every line of code. Your digital aspirations deserve nothing less than the pinnacle of tech sophistication, and that's precisely what we deliver — an investment in excellence that resonates with the grandeur of success.
                </div>
                <div className="about-compnay-bg">
                  <span></span>
                </div>
                <Link to="/aboutus">
                  <div class="about_btn">
                    <i class="fas fa-arrow-right"></i>
                    Learn more about us
                  </div>
                </Link>
              </div>
              <div class="right-item col-lg-7 col-md-8 col-sm-12 col-xs-12 " data-aos="fade-left" data-aos-duration="3000">
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
    </>
  )
}

export default AboutCompany



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
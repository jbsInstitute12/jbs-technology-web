import React, { useEffect, useState } from 'react'
import Footer_logo from '../../assets/image/footer/Header_logo.png'
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row footer-item">
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="logo">
                                <img src={Footer_logo} alt="Footer_logo" />
                            </div>
                            <div className="footer-text">
                                Thank you for visiting our Website. If you have not visited our blogs,
                                then it's a humble request to visit it once, maybe it will be useful
                                for you. You can also check the latest post and our blog section.
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="title">QUICK LINKS</div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link></li>
                                <li>
                                    <Link to="/aboutus">About Us</Link></li>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link></li>
                                <li>
                                    <Link to="/careers">Careers</Link></li>
                                <li>
                                    <Link to="/contactus">Contact US</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="title">Contact Me</div>
                            <div className="address mb-3">F-38, Yogi Chowk, Varachha,
                                <br />Surat, Gujarat 395010</div>
                            <div className="phone mb-3">
                                <a href="tel:+91 74844 43901">+91 74844 43901</a>
                                <a href="tel:+91 82008 63163">+91 82008 63163</a>
                            </div>
                            <div className="email mb-3">
                                <a href="mailto:jbs.technology26@gmail.com">jbs.technology26@gmail.com
</a>
                            </div>
                            <div className="social-icon">
                                <div className='d-flex justify-content-start'>
                                    <Link to="https://www.facebook.com/profile.php?id=61555676966897" target="_blank" className='social-list'><i class="fab fa-facebook-square"></i></Link>
                                    <Link to="https://www.linkedin.com/company/jbs-coder-infotech/" className='social-list' target="_blank"><i class="fab fa-linkedin"></i></Link>
                                    <Link to="https://twitter.com/JBSTechnology26" target="_blank" className='social-list'><i class="fab fa-twitter-square"></i></Link>
                                    <Link to="https://www.instagram.com/jbs_technology/?hl=en" className='social-list' target="_blank"><i class="fab fa-instagram-square"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="title">My Newsletter</div>
                            <div className="new-text">
                                By Subscribing, you can get updated news and our Blog. For any queries, you can contact us through our email or just submit the contact form with your requirements. Our team will contact you as soon as possible.
                            </div>
                            <form action="" method="POST">
                                <div className="d-lg-flex d-block news-item align-items-center justify-content-center">
                                    <div className="item mb-2 ">
                                        <input type="emaiil" id="email" name="email" placeholder='Enter Email' required/>
                                    </div>
                                    <div className="item mb-2 ">
                                        <input type="submit" value="Subscribe" className='subscribe ' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copy_right text-center">
                    Copyright © SkyBit Solutions 2023, All Rights Reserved.
                </div>
            </div>

            {isVisible && (
                <div className="scrollToTop" onClick={scrollToTop}>
                    <span>
                        <i class="fas fa-chevron-up"></i>
                    </span>
                </div>
            )}
        </footer>

    )
}

export default Footer
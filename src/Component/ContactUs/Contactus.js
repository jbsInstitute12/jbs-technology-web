import React, { useState } from 'react'
import '../About Us/About us.css'
import '../ContactUs/Contactus.css'
import Common from '../../Extra/Common'
import ContactImage from '../../assets/image/Contactus.png';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';


const Contactus = () => {
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState({
        Fullname: '',
        Email: '',
        Mobile: '',
        Subject: '',
        Message: '',
    });

    const [errors, setErrors] = useState({
        Fullname: '',
        Email: '',
        Mobile: '',
        Subject: '',
        Message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
        validateInput(name, value);
    };



    const validateInput = (name, value) => {
        switch (name) {
            case 'Fullname':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    Fullname: value.trim() === '' ? 'Full Name is required' : '',
                }));
                break;
            case 'Email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    Email: emailRegex.test(value) ? '' : 'Invalid email address',
                }));
                break;
            case 'Mobile':
                const mobileRegex = /^[0-9]{10}$/;
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    Mobile: mobileRegex.test(value) ? '' : 'Invalid mobile number',
                }));
                break;
            case 'Subject':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    Subject: value.trim() === '' ? 'Subject is required' : '',
                }));
                break;
            case 'Message':
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    Message: value.trim() === '' ? 'Message is required' : '',
                }));
                break;
            default:
                break;
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        for (const [name, value] of Object.entries(contact)) {
            validateInput(name, value);
        }

        if (Object.values(errors).some((error) => error !== '')) {
            alert('Please fix the errors in the form before submitting.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://jbs-technology-default-rtdb.firebaseio.com/ContactData.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setContact({
                    Fullname: '',
                    Email: '',
                    Mobile: '',
                    Subject: '',
                    Message: '',
                });
                setErrors({
                    Fullname: '',
                    Email: '',
                    Mobile: '',
                    Subject: '',
                    Message: '',
                });
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* COMMON BLOCK START*/}
            <div className="common-main-container">
                <div className="container">
                    <Common title={`Contatct Us`} />
                </div>
            </div>
            {/* COMMON BLOCK END*/}


            {/*NOTE BLOCK START  */}
            <div className="note-block-outer">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>
                            Please note that all message will be replied within the next 12hours.
                        </h2>
                    </div>
                    <div className="row note-item">
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="icon-block"><i class="fas fa-phone"></i></div>
                            <div className="item-inner">
                                <div className="title">CONTACTS INFO</div>
                                <div className="text">
                                    <Link to="tel:+91 79844 43901">+91 79844 43901</Link>
                                    <Link to="tel:+91 82008 63163">+91 82008 63163</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="icon-block"><i class="far fa-clock"></i></div>
                            <div className="item-inner">
                                <div className="title">WORKING HOURS</div>
                                <div className="text">
                                    <Link to="">
                                        Mon to Fri - 9.00 to 7.00
                                        <br />
                                        Saturday - 9.00 to 1.00
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="icon-block"><i class="far fa-envelope"></i></div>
                            <div className="item-inner">
                                <div className="title">EMAIL ADDRESS</div>
                                <div className="text">
                                    <Link to="mailto:jbs.technology26@gmail.com">jbs.technology26@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 item">
                            <div className="icon-block"><i class="fas fa-map-marker-alt"></i></div>
                            <div className="item-inner">
                                <div className="title">OUR LOCATION</div>
                                <div className="text">
                                    F-38, Yogi Chowk, Varachha, Surat, Gujarat 395010
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*NOTE BLOCK END  */}


            {/* START CONTACT BLOCK */}
            <section className="contact_us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row contact-item">
                                    <div className="item col-lg-10 col-md-10 col-sm-12">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h3>Contatc Us</h3>
                                                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                                                <form method="POST" onSubmit={handleSubmit}>
                                                    <input type="text" className="form-control form-group" placeholder="Full Name" id="fullname"
                                                        name="Fullname" required value={contact.Fullname} onChange={handleChange} />
                                                    <div className="error-message">{errors.Fullname}</div>

                                                    <input type="email" className="form-control form-group" placeholder="Email Address" id="email"
                                                        name="Email" required value={contact.Email} onChange={handleChange} />
                                                    <div className="error-message">{errors.Email}</div>

                                                    <input type="text" className="form-control form-group" placeholder="Mobile Number" id="mobilenumber"
                                                        name="Mobile" value={contact.Mobile} onChange={handleChange} required />
                                                    <div className="error-message">{errors.Mobile}</div>

                                                    <input type="text" className="form-control form-group" placeholder="Subject" required id="subject"
                                                        name="Subject" value={contact.Subject} onChange={handleChange} />
                                                    <div className="error-message">{errors.Subject}</div>

                                                    <textarea className="form-control form-group" placeholder="Message" required name="Message" value={contact.Message} onChange={handleChange} />
                                                    <div className="error-message">{errors.Message}</div>

                                                    <button
                                                        className="contact_form_submit"
                                                        type="submit"
                                                        disabled={loading || Object.values(errors).some((error) => error !== '')}
                                                    >
                                                        {loading ? <BeatLoader color="#ffffff" size={8} margin={2} /> : 'Send'}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-lg-2 col-md-2 col-sm-12">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex justify-content-center">
                                                <li><Link to="https://www.facebook.com/profile.php?id=61555676966897" target='_blank'><i class="fab fa-facebook-square"></i></Link></li>
                                                <li><Link to="https://www.instagram.com/jbs_technology/?hl=en" target='_blank'><i className="fab fa-instagram" ></i></Link></li>
                                                <li><Link to="https://twitter.com/JBSTechnology26" target='_blank'><i className="fab fa-twitter" ></i></Link></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_sec">
                                    <img src={ContactImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* START CONTACT BLOCK */}









            {/* MAP-BLOCK-STRAT */}
            <div className="map-outer">
                <div className="container">
                    <div className="map-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.415247244202!2d72.88572987600891!3d21.215376181341373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f155c0ad929%3A0x97b93382aed70c3a!2sJBS%20IT%20Institute!5e0!3m2!1sen!2sin!4v1703062095531!5m2!1sen!2sin"
                            width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="JBS TECHNOLOGY" />
                    </div>
                </div>
            </div>
            {/* MAP-BLOCK-END */}

            {/*CONTACT-FORM-end */}
        </>
    )
}

export default Contactus;

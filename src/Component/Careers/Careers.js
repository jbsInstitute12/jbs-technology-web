import React, { useState } from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../About Us/About us.css'
import '../Careers/Careers.css'
import webcardImg1 from '../../assets/image/Android.png'
import webcardImg2 from '../../assets/image/Flutter-Development.png'
import webcardImg3 from '../../assets/image/Reat JS.png'
import webcardImg4 from '../../assets/image/PHP-Development.png'
import webcardImg5 from '../../assets/image/Node JS.png'
import webcardImg7 from '../../assets/image/Nest JS.png'
import webcardImg8 from '../../assets/image/UIUX.png'
import webcardImg9 from '../../assets/image/Python-Development.png'
import Common from '../../Extra/Common';
import Career_1_bg from '../../assets/image/career_1_bg.svg'
import { Button, Modal, message } from 'antd';
import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';



const Careers = () => {
    const DeveloperApply = [
        {
            title: 'Android Developer',
            image: webcardImg1,
            experience: ' 1 to 3 Years',
            qualification: 'Graduation',
        },
        {
            title: 'Flutter Developer',
            image: webcardImg2,
            experience: ' 6 Month to 3 Years',
            qualification: 'BCA, MCA, BE, B Tech',
        },
        {
            title: 'Node.js Developer',
            image: webcardImg5,
            experience: '1 to 3 Years',
            qualification: 'Graduation',
        },
        {
            title: 'PHP Developer',
            image: webcardImg4,
            experience: ' 6 MOnth to 3 Years',
            qualification: 'BCA, MCA, BE, B Tech',
        },
        {
            title: 'React Native Developer',
            image: webcardImg3,
            experience: '1 to 3 Years',
            qualification: 'Graduation',
        },
        {
            title: 'Python  Developer',
            image: webcardImg9,
            experience: ' 6 Month to 3 Years',
            qualification: 'BCA, MCA, BE, B Tech',
        },
        {
            title: 'UI/UX  Developer',
            image: webcardImg8,
            experience: '0 to 3 Years',
            qualification: 'Graduation',
        },
        {
            title: 'Next js  Developer',
            image: webcardImg7,
            experience: ' 6 Month to 3 Years',
            qualification: 'BCA, MCA, BE, B Tech',
        }
    ]
    const SpanStyle = {
        color: '#252525',
        fontSize: '16px',
        fontWeight: '600',
    };
    var careerItems = [
        {
            title: "No Bond",
            description: "Because we welcome talent without signing a bond."
        },
        {
            title: "Global clients",
            description: "Work with companies from all around the world"
        },
        {
            title: "Free learning resources",
            description: "The latest books and online courses at your disposal"
        },
        {
            title: "Flexible working time",
            description: "We embrace earlybirds and night owls"
        },
        {
            title: "5.5 Days Working",
            description: "Your weekend will truly last longer."
        },
        {
            title: "Budget for education",
            description: " Conferences, courses, workshops – on the house."
        }
    ];
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        course: '',
        file: null,
    });

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                file: e.target.files[0],
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [e.target.id]: e.target.value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const firebaseConfig = {
                apiKey: 'AIzaSyB8S2Dc_j_bBgkQAVdK_GsB8im4ddqxjPU',
                authDomain: 'jbs-technology.firebaseapp.com',
                databaseURL: 'https://jbs-technology-default-rtdb.firebaseio.com',
                projectId: 'jbs-technology',
                storageBucket: 'jbs-technology.appspot.com',
                messagingSenderId: '299451176992',
                appId: '1:299451176992:web:a33fa121c85a3769838445',
            };

            firebase.initializeApp(firebaseConfig);

            const storageRef = firebase.storage().ref();

            const fileRef = storageRef.child(formData.file.name);
            await fileRef.put(formData.file);

            const fileURL = await fileRef.getDownloadURL();

            const data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                mobile: formData.mobile,
                course: formData.course,
                fileURL: fileURL,
            };

            const firebaseDatabaseUrl = 'https://jbs-technology-default-rtdb.firebaseio.com/';

            // Send data to Firebase Realtime Database
            await axios.post(`${firebaseDatabaseUrl}/ResumeData.json`, data);
            message.success('Data successfully sent!!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                course: '',
                file: null,
            });
            setOpen(false);

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                course: '',
                file: null,
            });
        } catch (error) {
            message.error('Error sending data to Firebase: ' + error.message);
        }
        finally {
            setLoading(false); // Set loading back to false after submission
        }
    };



    return (
        <>
            {/* COMMON BLOCK START*/}
            <div className="common-main-container">
                <div className="container">
                    <Common title={`careers`} />
                </div>
            </div>
            {/* COMMON BLOCK END*/}


            {/* CAREER BLOCK START */}
            <div className="carrer-section1-outer">
                <div className="container">
                    <div className="carrer-section1-inner">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-right" data-aos-duration="3000">
                                <div className="title">Career</div>
                                <p>Jbs Technoloogy welcomes all the IT professionals both fresher and experienced
                                    to join our growing team cum family and we also give the right space to lift up
                                    your career with us and within the IT industry. We are the leading Web-App and
                                    Android Development company. Growing together and sharing each other's success is our motto.</p>
                                <p>We are having a bunch of passionate, adventurous and crazy head developers, who always thrive to serve humbleness and die for each other.</p>
                                <p>Join our crazy minds.</p>

                            </div>
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration="3000">
                                <div className="image-block">
                                    <img src={Career_1_bg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CAREER BLOCK END */}


            {/* CAREER DIFFERNY START */}
            <div className="diffrent-outer">
                <div class="container">
                    <div className="section-title text-center">
                        <div className="title">What makes us different?</div>
                        <div className="text">Jbs Technology is becoming incredibly popular. We believe in pairing fresh ideas with passion.
                            Our expertise in Web-App and Blockchain Development will always serve the best in all forms.
                            Our goal is to match innovation with new possibilities.</div>
                    </div>
                    <div class="row justify-content-center">

                        {
                            careerItems.map((item) => {
                                return (
                                    <>
                                        <div class="col-lg-4 col-md-6 col-sm-12">
                                            <div class="careear-diff-item">
                                                <div class="overlay"></div>
                                                <div class="content">
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>

            {/* CAREER DIFFERNY END */}


            {/* DEVELOPER APPLY START */}
            <div className="career-outer">
                <div className="container">
                    <div className="containerr-inner">
                        <div className="row career-item">
                            {
                                DeveloperApply.map((item) => {
                                    return (
                                        <>
                                            <div className="col-lg-3 col-md-6 col-sm-12 item">
                                                <div className="icon-block">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="item-inner">
                                                    <div className="developer mb-2">{item.title}</div>
                                                    <div className="need mb-2"><span style={SpanStyle}>Experience:</span>{item.experience}</div>
                                                    <div className="qualification mb-3"><span style={SpanStyle}>Qualification:</span> {item.qualification}</div>
                                                    <div className="d-flex justify-content-between my-2">
                                                        <div className="time">Full time</div>
                                                        <Button to="" className='apply' onClick={() => setOpen(true)}>
                                                            Apply Now
                                                        </Button>

                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }
                            <Modal
                                centered
                                open={open}
                                onOk={() => setOpen(false)}
                                onCancel={() => setOpen(false)}
                                width={500}
                                footer={false}
                                maskClosable={false}
                            >
                                <div className="modal-outer">
                                    <div className="row justify-content-center g-3">
                                        <form className="row " onSubmit={handleSubmit}>
                                            <div className="col-12 mb-2">
                                                <input
                                                    type="text"
                                                    placeholder='Frist name'
                                                    className="form-control"
                                                    id="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-12 mb-2">
                                                <input
                                                    type="text"
                                                    placeholder='Last name'
                                                    className="form-control"
                                                    id="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-12 mb-2">
                                                <select className="form-control" aria-label="Default select example" onChange={handleChange} value={formData.course} id="course" name="course">
                                                    <option selected>----Selected Course---</option>
                                                    <option value="Android Developer">Android Developer</option>
                                                    <option value="Flutter Developer">Flutter Developer</option>
                                                    <option value="Node.js Developer">Node.js Developer</option>
                                                    <option value="PHP Developer">PHP Developer</option>
                                                    <option value="React Native Developer">React Native Developer</option>
                                                    <option value="Python Developer">Python Developer</option>
                                                    <option value="UI/UX Developer">UI/UX Developer</option>
                                                    <option value="Next js Developer">Next js Developer</option>
                                                </select>
                                            </div>

                                            <div className="col-12 mb-2">
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    className="form-control"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                                    title="Enter a valid email address"
                                                    required
                                                />

                                            </div>


                                            <div className="col-12 mb-2">
                                                <input
                                                    type="text"
                                                    placeholder='Mobile'
                                                    className="form-control"
                                                    pattern="[0-9]{10}"
                                                    max={10}
                                                    title="Plese Enter 10 Digit Number"
                                                    id="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>


                                            <div className="col-12 mb-2">
                                                <input
                                                    className="form-control upload-file"
                                                    type="file"
                                                    id="file"
                                                    onChange={handleChange}
                                                    accept=".jpg, .jpeg, .png, .gif"
                                                />
                                            </div>

                                            <div className="col-12 ">
                                                <button className="apply-btn" type="submit">
                                                    Send
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            {/* DEVELOPER APPLY END */}
        </>
    )
}

export default Careers

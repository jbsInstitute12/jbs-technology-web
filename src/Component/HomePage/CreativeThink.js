import React from 'react'
import create_1 from '../../assets/image/creative/cre1.svg'
import create_2 from '../../assets/image/creative/cre2.svg'
import create_3 from '../../assets/image/creative/cre3.svg'
import create_4 from '../../assets/image/creative/cre4.svg'
import create_5 from '../../assets/image/creative/cre5.svg'
import create_6 from '../../assets/image/creative/cre6.svg'

function CreativeThink() {
    return (
        <>
            <div className="create-outer">
                <div className="container">
                    <div className="create-inner">
                        
                        <div className="create-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 item">
                                    <div className="item-inner">
                                        <img src={create_1} alt="" />
                                        <div className="title">Front-End Developer / Designer</div>
                                        <div className="subtitle">Responsive designs fluidly expand, whereas adaptive designs hitch as you expand a browser or viewport. website & web application design or redesign existing products.</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 item">
                                    <div className="item-inner">
                                        <img src={create_2} alt="" />
                                        <div className="title">Web Development (WordPress, PHP)</div>
                                        <div className="subtitle">We have been working on WordPress sites for developing professional websites, installing themes, customizing themes and other modifications in which we are very successful.</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 item">
                                    <div className="item-inner">
                                        <img src={create_3} alt="" />
                                        <div className="title">HTML5, CSS3, SASS, ReactJs</div>
                                        <div className="subtitle">We are experts at building complex internet services using HTML5, CSS3, jQuery, cross browser compatibility, pixel-perfect, W3C validation, clean hand-code structure for ' PSD to HTML5 conversion ' services.</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 item">
                                    <div className="item-inner">
                                        <img src={create_4} alt="" />
                                        <div className="title">Search Engine Optimization (SEO)</div>
                                        <div className="subtitle">Using SEO strategies and tactics can increase organic search visibility on Google, leading to an increase in leads, sales and revenue.</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 item">
                                    <div className="item-inner">
                                        <img src={create_5} alt="" />
                                        <div className="title">Social Media Marketing</div>
                                        <div className="subtitle">In our team of digital marketers and creative thinkers, we help companies develop a world-class experience that helps them achieve success.</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 item">
                                    <div className="item-inner">
                                        <img src={create_6} alt="" />
                                        <div className="title">Website Speed Up / Optimization</div>
                                        <div className="subtitle">We are experts in WordPress performance optimization and website optimization. We can make your WordPress website load in under 2/3 seconds.</div>
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

export default CreativeThink

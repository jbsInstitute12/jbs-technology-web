import React from 'react'
import Common from '../../Extra/Common'
import '../Projects/Projects.css'
import App_1 from '../../assets/image/Appdevelopment/mobile_app1.jpg'
import web_1 from '../../assets/image/webdevelopment/webdev_1.avif'
import ui_1 from '../../assets/image/uiux/ui1.avif'

function Projects() {
    return (
        <>
            {/* COMMON BLOCK START*/}
            <div className="common-main-container">
                <div className="container">
                    <Common title={`Portfolio`} />
                </div>
            </div>
            {/* COMMON BLOCK END*/}

            {/* PORTFOLIO START */}
            {/* PORTFOLIO SECTION START */}
            <div className="portfolio-section-outer">
                <div className="container">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">ALL PRROJECTS</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-app-tab" data-bs-toggle="pill" data-bs-target="#pills-app" type="button" role="tab" aria-controls="pills-app" aria-selected="false">MOBILE APP DEVELOPMENT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-web-tab" data-bs-toggle="pill" data-bs-target="#pills-web" type="button" role="tab" aria-controls="pills-web" aria-selected="false">WEB DEVELOPMENT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-ui-tab" data-bs-toggle="pill" data-bs-target="#pills-ui" type="button" role="tab" aria-controls="pills-ui" aria-selected="false">UI/UX DESIGN</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade active show" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                            <div className="project-outer">
                                <div className="row">
                                    <div className="item col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner">
                                            <img src={App_1} alt="app" />
                                        </div>
                                    </div>
                                    <div className="item col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner">
                                            <img src={web_1} alt="app" />
                                        </div>
                                    </div>
                                    <div className="item col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner">
                                            <img src={ui_1} alt="app" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab">
                            <div className="project-outer">
                                <div className="row">
                                    <div className="item col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner">
                                            <img src={App_1} alt="app" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-web" role="tabpanel" aria-labelledby="pills-web-tab">
                            <div className="project-outer">
                                <div className="row">
                                    <div className="item col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner">
                                            <img src={web_1} alt="app" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-ui" role="tabpanel" aria-labelledby="pills-ui-tab">
                            <div className="project-outer">
                                <div className="row">
                                    <div className="item col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner">
                                            <img src={ui_1} alt="app" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PORTFOLIO SECTION END */}


        </>
    )
}

export default Projects;

import tech1 from '../../assets/image/tech1.png'
import tech2 from '../../assets/image/tech2.png'
import tech3 from '../../assets/image/tech3.png'
import tech4 from '../../assets/image/tech4.png'
import tech5 from '../../assets/image/tech5.png'
import leptop from '../../assets/image/lep.png'
import techvideo from '../../assets/image/tech_video.mp4'

function Technology() {
  return (
    <>
      <div className="technology-outer">
        <div className="container">
          <div className="technology-inner">
            <div className="technology-content">
             
               <div  className="technology-item"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <div className="item-inner">
                  <div className="title ">Web Design</div>
                  <div className="dec">Websites with unique and professional designs affect a business brand and helps it grow.</div>
                </div>
                <div className="tech d-flex justify-content-between">
                  <div className="number fs-md-60">01</div>
                  <div className="img">
                    <img src={tech1} alt="tech-img" />
                  </div>
                </div>
              </div> 
               <div className="technology-item"
                data-aos="fade-up-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" >
                <div className="item-inner">
                  <div className="title" >Web Development</div>
                  <div className="dec">Creating your virtual presence creatively that attracts your potential business prospects</div>
                </div>
                <div className="tech d-flex justify-content-between">
                  <div className="number">02</div>
                  <div className="img">
                    <img src={tech2} alt="tech-img" />
                  </div>
                </div>
              </div> 
               <div className="technology-item"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <div className="item-inner">
                  <div className="title">Mobile Apps</div>
                  <div className="dec ">
                    We build and design applications,
                    simplifying user experiences
                    across all platforms
                    and devices. </div>
                </div>
                <div className="tech d-flex justify-content-between">
                  <div className="number">03</div>
                  <div className="img">
                    <img src={tech3} alt="tech-img" />
                  </div>
                </div>
              </div> 
               <div className="technology-item"
                data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <div className="item-inner">
                  <div className="title">Digital Marketing</div>
                  <div className="dec">Let us help you with online marketing strategy to convert more visitors into leads  and sales</div>
                </div>
                <div className="tech d-flex justify-content-between">
                  <div className="number">04</div>
                  <div className="img">
                    <img src={tech4} alt="tech-img" />
                  </div>
                </div>
              </div> 
               <div className="technology-item"
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                <div className="item-inner">
                  <div className="title">UI/UX Design</div>
                  <div className="dec ">Websites with unique and professional designs affect a business  brand and helps it grow.</div>
                </div>
                <div className="tech d-flex justify-content-between">
                  <div className="number">05</div>
                  <div className="img">
                    <img src={tech5} alt="tech-img" />
                  </div>
                </div>
              </div> 
            </div>
            <div className="leptop-image">
              <img src={leptop} alt="" />
              <video width={478} height={380} className='video-container' loop autoPlay muted controls={false}>
                <source src={techvideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology

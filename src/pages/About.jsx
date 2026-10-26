import '../assets/styles/About.css'
import video2 from '../assets/images/videos/video2.mp4'
import people1 from '../assets/images/people1.jpg'
import people2 from '../assets/images/people2.jpg'
import people3 from '../assets/images/people3.jpg'
import concert3 from '../assets/images/videos/concert3.jpg'

function About(){
    return(
        <>
        {/* <!-- about one --> */}
       <section id="about-one">
        <h1 className="about-one-h1">About Us</h1>
       </section>

       {/* <!-- about two --> */}

       <section id="about-two">
        <div className="about-two-row row">
            <div className="col-12 col-md-6 about-two-left">
                <video
    className="about-two-video"
    controls
    preload="metadata"
    poster={concert3}
>
    <source src={video2} type="video/mp4" />
    Your browser does not support the video tag.
</video>
            </div>
            <div className="col-12 col-md-6 about-two-right">
                <h3 className="about-two-h3">OUR AMAZING MISSION</h3>
                <h2 className="about-two-h2">Events Are Our Life</h2>
                <p className="about-two-p">Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
            </div>
        </div>
       </section>
       {/* <!-- about four --> */}
        <section id="about-four">
            <div className="about-four-row row">
                <div className="col-12 col-md-6 about-four-col-left">
                    <h3 className="about-four-left-h3">OUR IMPRESSIVE EXPERIENCE</h3>
                    <h2 className="about-four-left-h2">Incredible Experience</h2>
                    <p className="about-four-left-p">Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                </div>
                <div className="col-12 col-md-6 about-four-col-right">
                    <h2 className="about-four-right-h2">347</h2>
                    <p className="about-four-right-p">ideas developed</p>
                    <h2 className="about-four-right-h2">545</h2>
                    <p className="about-four-right-p">events implemented</p>
                    <h2 className="about-four-right-h2">832</h2>
                    <p className="about-four-right-p">important persons</p>
                </div>
            </div>
        </section>
       {/* <!-- about three --> */}
        <section id="about-three">
            <h3 className="about-three-h3">OUR TEAM</h3>
            <h2 className="about-three-h2">Only Professionals</h2>
            <div className="about-three-container container">
               <div className="row about-three-row">
                <div className="col-12 col-md-4">
                  <img src={people1} alt="" className="about-three-img"/>
                  <h5 className="about-three-h5">Amanda Steve / CTO</h5>
                </div>
                <div className="col-12 col-md-4">
                    <img src={people3} alt="" className="about-three-img"/>
                     <h5 className="about-three-h5">John Doe / Manager</h5>
                </div>
                <div className="col-12 col-md-4">
                     <img src={people2} alt="" className="about-three-img"/>
                      <h5 className="about-three-h5">Sophie Smith / Art</h5>
                </div>
               </div>
            </div>
        </section>

        </>
    )
}
export default About;
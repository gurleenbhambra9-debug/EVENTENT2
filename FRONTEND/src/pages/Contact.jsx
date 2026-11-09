import '../assets/styles/Contact.css'

function Contact(){
    return(
        <>
        {/* <!-- contact one --> */}
       <section id="contact-one">
        <h1 className="contact-one-h1">Contact Us</h1>
       </section>

       {/* <!-- contact two --> */}
<section id="contact-two">
    <div className="contact-two-row row">
        <div className="col-12 col-lg-6 contact-two-left">
            <h3 className="contact-two-h3">WE ARE READY AND CONNECTED</h3>
            <h2 className="contact-two-h2">Events Are Our Life</h2>
            <p className="contact-two-p">Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et.</p>

            <form className="contact-form">
                <div className="form-group1">
                  <input type="text" placeholder="First Name"/>
                  <input type="text" placeholder="Last Name"/>
                </div>
                <div className="form-group2">
                  <input type="email" placeholder="Enter Email address"/>
                  
                </div>
                <div className="form-group3">
                  <textarea rows="4" placeholder="Message"></textarea>
                </div>
                <button className="contact-two-btn">SEND NOW</button>
            </form>
        </div>
        <div className="col-12 col-lg-6 contact-two-right">
            <h2 className="contact-two-right-h2">Our Working Schedule:</h2>
            <h6 className="contact-two-right-h6">Monday-Friday:</h6>
            <p className="contact-two-right-p">09:00 - 19:00</p>
            <h6 className="contact-two-right-h6">Saturday:</h6>
            <p className="contact-two-right-p">10:00 - 18:00</p>
            <h6 className="contact-two-right-h6">Sunday:</h6>
            <p className="contact-two-right-p">We are closed</p>
          <div className="details">
            <div className="detail1">
               <i className="fa-solid fa-phone" aria-hidden="true"></i>
               <div className="detail-right">
                <h5 className="contact-two-right-h5">Phone number:</h5>
                <p className="contact-two-right-p">+1 800-310-1010</p>
                </div>
            </div>
            <div className="detail2">
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
               <div className="detail-right">
                <h5 className="contact-two-right-h5">Our address:</h5>
                <p className="contact-two-right-p">27 Data St, New York, NY 10002, USA</p>
               </div>
          </div>
          <div className="detail3">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
               <div className="detail-right">
                <h5 className="contact-two-right-h5">Our mail:</h5>
                <p className="contact-two-right-p">yourmail@example.com</p>
            </div>
            </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- contact three --> */}
 <section id="contact-three">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 contact-three-col">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10764124.180519937!2d-95.3105447102215!3d48.80174195222778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x70f8425629621e09!2sOntario%2C%20Canada!5e0!3m2!1sen!2sin!4v1792331735692!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  title="Eventent location map"
></iframe>
      </div>
    </div>
     
  </div>
 
 </section>
        
        
        </>
    )
}

export default Contact
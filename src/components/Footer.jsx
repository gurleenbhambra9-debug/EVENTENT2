import '../assets/styles/Footer.css'

function Footer(){
    return(
        <>
          <section id="footer">
            <div className="footer-row row">
              <div className="col-12 col-md-4 footer-row-col1">
                <h5 className="footer-h5">Services We Offer</h5>
                <p className="footer-p">Trade show and any exhibitions
Brand events and fashion events
Presentation and honorary dinners
Birthdays, concerts & festivals
Weddings and community events</p>
              </div>
              <div className="col-12 col-md-4 footer-row-col2">
                <h4 className="footer-h4">EVENTENT</h4>
                <p className="footer-p">Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.</p>
                <div className="icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-square-instagram"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <div className="col-12 col-md-4 footer-row-col3">
                <h5 className="footer-h5">Subscribe</h5>
                <input type="email" className="footer-input" placeholder="Enter your email" />
                <button className="footer-btn">SUBSCRIBE</button>
              </div>
            </div>
            <hr/>
            <h6 className="footer-h6">Copyright © 2026 Event Management Agency. All Rights Reserved.</h6>
           </section>
        </>
    )
}

export default Footer;
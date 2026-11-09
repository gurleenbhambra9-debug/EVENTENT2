
import '../assets/styles/ThankYou.css'
import { Link } from 'react-router-dom'

function ThankYou() {
    return (
        <section className="thankyou-page">
            <div className="thankyou-overlay"></div>

            <div className="thankyou-card">

                <div className="success-icon">
                    <i className="fa-solid fa-check"></i>
                </div>

                <span className="thankyou-subtitle">
                    YOUR ENQUIRY HAS BEEN RECEIVED
                </span>

                <h1>Thank You!</h1>

                <div className="thankyou-line"></div>

                <h2>Your Event Journey Starts Here.</h2>

                <p className="thankyou-message">
                    Your enquiry has been successfully submitted.
                    Thank you for choosing EVENTENT to be a part
                    of your special celebration.
                </p>

                <p className="thankyou-followup">
                    Our team will get in touch with you soon
                    to discuss your event.
                </p>

                <div className="thankyou-status">
                    <i className="fa-solid fa-circle-check"></i>
                    Enquiry Submitted Successfully
                </div>

                <div className="thankyou-footer">
                    <h3>EVENTENT</h3>
                    <p>Let's make your celebration unforgettable.</p>
                </div>

                <Link to="/" className="thankyou-home-btn">
                    Back to Home <i className="fa-solid fa-arrow-right"></i>
                </Link>

            </div>
        </section>
    )
}

export default ThankYou

import '../assets/styles/Event.css'
import { Link } from 'react-router-dom';

function Event(){
    return(
        <>
        <section id="event-one">
            <h5 className="event-one-h5">YOUR DREAM EVENT, OUR EXPERTISE</h5>
            <h2 className="event-one-h2">Plan Your Event</h2>
            <p className="event-one-p">Tell us about your celebration and let us create something extraordinary.</p>
        </section>
        <section id="event-two">
            <div className="container event-two-container">
                <div className="row event-two-row d-flex g-5">
                    <div className="col-12 col-md-6 event-two-col1">
                        <i className="fa-solid fa-calendar-days event-two-i"></i>
                       <h2 className="event-two-col1-h2">Event Enquiry Form</h2>
                       <p className="event-two-col1-p">Complete the form in 3 simple steps and help us understand your needs. We'll get back to you with a customised quotation.</p>
                    </div>
                    <div className="col-12 col-md-6 event-two-col2">
                          <div className="row ">
                            <div className="col-12 ">
                              <h3 className="event-two-col2-h3">Customer Information</h3>
                              <p className="event-two-col2-p">Tell us how we can contact you</p>
                            </div>
                            <div className="col-12 mt-3 ">
                              <h3 className="event-two-col2-h3">Event Details</h3>
                              <p className="event-two-col2-p">Share details about your event</p>
                            </div>
                            <div className="col-12 mt-3 ">
                               <h3 className="event-two-col2-h3">Services & Requirements</h3>
                               <p className="event-two-col2-p">Let us know your preferences</p>
                            </div>
                          </div>
                    </div>
                </div>
                <div className="event-button">
                   <button className="event-two-btn"><Link to="/customer">Start</Link></button>
                </div>
                  
            </div>
           
              
            
        </section>
        
        
        </>
    )
}
export default Event;
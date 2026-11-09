import '../assets/styles/EventDetails.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import API from '../Api/Api.jsx'
import { useNavigate } from 'react-router-dom'

function EventDetails(){
    const navigate= useNavigate();
    const [eventData, setEventData] = useState({
        eventDate: '',
        eventCity: '', 
        startTime: '', 
        endTime: '', 
        expectedGuests: '',
        eventType: '',  
        eventDuration:'',
        eventDateFixed: '',  
        preference:''
    })

    const handleEventChange= (e)=>{
        try {
            setEventData({
                ...eventData,
                [e.target.name]: e.target.value
            })
        } catch (error) {
            console.log(error)
        }
    }
        const handleEventSubmit= async (e)=>{
        e.preventDefault();
        try {
            const response= await API.post('/api/eventdetails', eventData)
            console.log(response.data);
            alert("event details are submitted successfully")
            navigate('/requirements')
        } catch (error) {
             console.log(error.response?.data || error.message);
        alert("Failed to submit event details");
        }
    }
    return(
        <>
        <section id="eventDetails-one">
            <h2 className="eventDetails-h2">Event Details</h2>
            <p className="eventDetails-p">Tell us about your event</p>
            <form onSubmit={handleEventSubmit}>
                <div className="form-wrap1 row">
                <div className="form-group1-eventDetails col-12 col-lg-5">
                    <label htmlFor="">Event Date</label>
                    <input type="date" name="eventDate" value={eventData.eventDate} onChange={handleEventChange} placeholder='DD/MM/YYYY' required/>
            </div>
            <div className="form-group2-eventDetails col-12 col-lg-5">
                    <label htmlFor="">Event City</label>
                    <input type="text" name="eventCity" value={eventData.eventCity} onChange={handleEventChange}  placeholder='eg. Ludhiana' required/>
            </div>
            </div>
            <div className="form-wrap2 row mt-3">
                <div className="form-group3-eventDetails col-12 col-lg-5">
                    <label htmlFor="">Start Time</label>
                    <input type="time" name="startTime" value={eventData.startTime} onChange={handleEventChange}  placeholder='Select time' required/>
            </div>
             <div className="form-group4-eventDetails col-12 col-lg-5">
                    <label htmlFor="">End Time</label>
                    <input type="time" name="endTime" value={eventData.endTime} onChange={handleEventChange}  placeholder='Select time' required/>
            </div>
            </div>
            
            
             <div className="form-group5-eventDetails">
                    <label htmlFor="">Expected Number of Guests</label>
                    <input type="number" name="expectedGuests" value={eventData.expectedGuests} onChange={handleEventChange}  placeholder='enter guest count' required/>
            </div>
            <div className="form-group6-eventDetails">
                    <label htmlFor="">Event Type</label>
                    
                    <select name="eventType" value={eventData.eventType} onChange={handleEventChange}>
                        <option value="" disabled>Event Type</option>
                        <option value="Wedding/marriage">Wedding/marriage</option>
                        <option value="Engagement/Roka">Engagement/Roka</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Corporate Event/ Conference">Corporate Event/ Conference</option>
                        <option value="Exhibition/ Product Launch">Exhibition/ Product Launch</option>
                        <option value="Religious Function/ Jagran">Religious Function/ Jagran</option>
                    </select>
            </div>
            <div className="form-group7-eventDetails">
               <label htmlFor="eventDuration">Event Duration</label>

                <select  id="" name="eventDuration" value={eventData.eventDuration} onChange={handleEventChange} required>
                  <option value="" disabled>Select duration</option>
                  <option value="2-hours">2 Hours</option>
                  <option value="4-hours">4 Hours</option>
                  <option value="6-hours">6 Hours</option>
                  <option value="8-hours">8 Hours</option>
                  <option value="full-day">Full Day</option>
                  <option value="multiple-days">Multiple Days</option>
                 </select>
            </div>
             <div className="form-group8-eventDetails">
                    <label htmlFor="">Is the event date fixed?</label>
                    <div className="date-fixed">
                       <label htmlFor="">
                        <input type="radio" name="eventDateFixed" value="Fixed Date" onChange={handleEventChange}/>
                        Fixed Date
                    </label>
                     <label htmlFor="">
                        <input type="radio" name="eventDateFixed" value="Flexible Date" onChange={handleEventChange}/>
                        Flexible Date
                    </label>
                     <label htmlFor="">
                        <input type="radio" name="eventDateFixed" value="Not Decided Yet" onChange={handleEventChange}/>
                        Not Decided Yet
                    </label>
                    </div>
                    
            </div>
            <div className="form-group9-eventDetails">
                    <label htmlFor="">Indoor or Outdoor Preference</label>
                    <select name='preference' value={eventData.preference} onChange={handleEventChange}>
                        <option value="" disabled>Select Prefrence</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                    </select>
            </div>
              <div className="form-group10-eventDetails">
                    <button className='form-group10-btn1'> <Link to='/customer'><i className="fa-solid fa-arrow-left"></i> Back</Link> </button>
                    <button className='form-group10-btn2' type='submit'>Next: Services <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
            </form>
            
            
        </section>
        
        
        </>
    )
}
export default EventDetails
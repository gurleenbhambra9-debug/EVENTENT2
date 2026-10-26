import '../assets/styles/Customer.css'
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';
import API from '../Api/Api.jsx';

function Customer(){
    const navigate= useNavigate()
    const [customerForm, setCustomer]= useState({
        name: '',
        mobileNumber: '',
        emailAddress: '',
        preferredContactMethod: '',
        preferredLanguage: ''
    })

  const  handleCustomerChange= (e)=>{
        setCustomer({
            ...customerForm,
            [e.target.name]:e.target.value
        })
    }
   const  handleCustomerSubmit= async(e)=>{
        e.preventDefault()
        try {
            const customerResponse= await API.post('/test/customer', customerForm)
            console.log(customerResponse.data)
            alert("Customer information submitted")
            navigate('/')
        } catch (error) {
            console.log("Full error:", error);
    console.log("Response data:", error.response?.data);
    console.log("Status code:", error.response?.status);

    alert(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong"
    );
        }
    }
    return(
        <>
        <section id="customer-one">
            <form className="customer-one-form" onSubmit={handleCustomerSubmit}>
                <h2 className="customer-form-h2">Customer Information</h2>
                <p className="customer-form-p">Let us know how we can contact you</p>
                <div className="form-group1-customer">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='Enter your full name' name="name" value={customerForm.name} required onChange={handleCustomerChange}/>
                </div>
                <div className="form-group2-customer">
                    <label htmlFor="">Mobile Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" name="mobileNumber" value={customerForm.mobileNumber} required onChange={handleCustomerChange}/>
                </div>
                <div className="form-group3-customer">
                    <label htmlFor="">Email Address</label>
                    <input type="email" placeholder='Enter your email address' value={customerForm.emailAddress} name="emailAddress" required onChange={handleCustomerChange}/>
                </div>
                <div className="form-group4-customer">
                    <label htmlFor="" name="contact">Prefered Contact Method</label>
                    <div className="contact-options">
        <label>
            <input type="radio" name="preferredContactMethod" value="WhatsApp" onChange={handleCustomerChange}/>
            WhatsApp
        </label>

        <label>
            <input type="radio" value="Phone Call" name="preferredContactMethod" onChange={handleCustomerChange}/>
            Phone Call
        </label>

        <label>
            <input type="radio" value="Email" name="preferredContactMethod" onChange={handleCustomerChange}/>
            Email
        </label>
    </div>
                </div>
                <div className="form-group5-customer">
                      <label htmlFor="lang">Preferred Language</label>
                    <select  id="form-group5-customer-select" value={customerForm.preferredLanguage} name="preferredLanguage" required onChange={handleCustomerChange}>
                         <option value="" disabled>
            Select your preferred language
        </option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                        <option value="Punjabi">Punjabi</option>
                    </select>
                </div>
                <div className="form-group6-customer">
                    <button className="customer-btn1"><i className="fa-solid fa-arrow-left-long"></i> <Link to="/event">Back</Link></button>
                    <button type="submit" className="customer-btn2">Next: Event Details<i className="fa-solid fa-arrow-right-long"></i></button>
                </div>
            </form>
        </section>
        
        </>
    )
}
export default Customer;
import '../assets/styles/CustomerDisplay.css'
import { useState, useEffect } from 'react';
import API from '../Api/Api.jsx'

function CustomerDisplay(){
    const [customerData, setCustomerData]= useState([])
    const getCustomer = async()=>{
        try {
            const responseCustomer= await API.get('/test/getcustomer')
            console.log(responseCustomer.data.data)
            setCustomerData(responseCustomer.data.data)
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    useEffect(()=>{
        getCustomer()
    }, [])
    return(
        <>
        {customerData.map((c)=>(
            <div className="customer-one" key={c._id}>
              <p>Name:{c.name}</p>
              <p>Mobile Number:{c.mobileNumber}</p>
              <p>Email Address:{c.emailAddress}</p>
              <p>Preferred Contact Method:{c.preferredContactMethod}</p>
              <p>Preferred Language:{c.preferredLanguage}</p>
            </div>
        ))}
        
        
        </>
    )
}

export default CustomerDisplay;
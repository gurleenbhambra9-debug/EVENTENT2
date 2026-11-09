import '../assets/styles/Requirements.css'
import { useState } from 'react';
import API from '../Api/Api';
import { useNavigate } from 'react-router-dom';

function Requirements(){
  const [requirementsData, setRequirementsData]= useState({
     budget: '', 
     services: [], 
     theme: '', 
     accessibilityRequirements: '', 
     transportRequirements: '',
     notes:''
  })
 const navigate= useNavigate();
  // const handleRequirementsChange=(e)=>{
  //   setRequirementsData({
  //     ...requirementsData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const handleRequirementsChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
        setRequirementsData((prev) => ({
            ...prev,
            services: checked
                ? [...prev.services, value]
                : prev.services.filter((service) => service !== value)
        }));
    } else {
        setRequirementsData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
};
  const handleRequirementsSubmit= async (e)=>{
    e.preventDefault();
    try {
      const response= await API.post('/api/requirements', requirementsData)
      console.log(response.data)
      alert("Requirements details are submitted")
      navigate('/thankyou')
    } catch (error) {
       console.log(error)
       alert(error.message)
    }
  }
    return(
        <>
        <section id="requirementsss">
            <h2 className="requirements-h2">Services & Special Requirements</h2>
            <p className="requirements-p">Tell us your budget, service preferences and any special requests</p>
            <form onSubmit={handleRequirementsSubmit}>
                <div className="form-wrap2 row">
                    <div className="form-group1-requirements col-12 col-lg-5">
                   <label htmlFor="">Approximate Total Budget</label>
                   <input type="text" name='budget' value={requirementsData.budget} onChange={handleRequirementsChange} placeholder='enter your budget'/>
                </div>
                <div className="form-group2-requirements col-12 col-lg-5">
                   <label htmlFor="">Services Required</label>
                   <label htmlFor="">
                    <input type="checkbox" name='services' onChange={handleRequirementsChange} value="Venue/Banquet Hall"/>
                     Venue/Banquet Hall
                   </label>
                   <label htmlFor="">
                    <input type="checkbox" name='services' onChange={handleRequirementsChange}  value="Decoration & Stage"/>
                     Decoration & Stage
                   </label>
                   <label htmlFor="">
                    <input type="checkbox" name='services' onChange={handleRequirementsChange}  value="Catering/ Food"/>
                     Catering/ Food
                   </label>
                   <label htmlFor="">
                    <input type="checkbox"  name='services' onChange={handleRequirementsChange}  value="Photography /Videography"/>
                     Photography /Videography
                   </label>
                   <label htmlFor="">
                    <input type="checkbox" name='services' onChange={handleRequirementsChange}  value="DJ / Sound/ Lighting"/>
                     DJ / Sound/ Lighting
                   </label>
                   <label htmlFor="">
                    <input type="checkbox" name='services' onChange={handleRequirementsChange}  value="other"/>
                     other
                   </label>
                </div>
                </div>
                <div className="form-wrap3 row">
                    <div className="form-group3-requirements col-12 col-lg-6">
                   <label htmlFor="">Preferred Event Theme</label>
                   <input type="text" name='theme' value={requirementsData.theme} onChange={handleRequirementsChange} placeholder='select theme'/>
                </div>
                </div>
                
                <div className="form-wrap1 row">
                     <div className="form-group4-requirements col-12 col-lg-5">
                   <label htmlFor="">Accessibility Requirements</label>
                   <textarea placeholder="Enter any accessibility requirements..." name='accessibilityRequirements' value={requirementsData.accessibilityRequirements} onChange={handleRequirementsChange} rows={6}> </textarea>
                </div>
                <div className="form-group5-requirements col-12 col-lg-5">
                   <label htmlFor="">Parking/ Guest Transport Requirements</label>
                   <textarea rows={6} name='transportRequirements' value={requirementsData.transportRequirements} onChange={handleRequirementsChange} placeholder='Tell us about parking or transport needs'> </textarea>
                </div>
                </div>
                
                <div className="form-group6-requirements">
                   <label htmlFor="">Additional Notes</label>
                   <textarea  rows={6} name='notes' value={requirementsData.notes} onChange={handleRequirementsChange} placeholder='share any other preferences or requests'> </textarea>
                </div>
                <div className="form-group7-requirements">
                  <button type="submit" className='requirements-submit-btn'>Submit</button>
                </div>
                
            </form>
        </section>
        
        </>
    )
}

export default Requirements;
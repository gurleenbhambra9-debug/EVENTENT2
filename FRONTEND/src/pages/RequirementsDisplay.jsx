import '../assets/styles/RequirementsDisplay.css'
import { useState, useEffect } from 'react'
import API from '../Api/Api.jsx'
function RequirementsDisplay(){
    const [requirementsData, setRequirementsData]= useState([])

    const getRequirements = async()=>{
        try {
            const responseRequirements= await API.get('/api/getrequirements')
            console.log(responseRequirements.data.data)
            setRequirementsData(responseRequirements.data.data)

        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
    useEffect(()=>{
      getRequirements()
    }, [])
    return(
        <>
        {requirementsData.map((r)=>(
            <div className="requirements-one" key={r._id}>
               <p>Budget: {r.budget}</p>

                    <p>Services: {r.services?.join(', ')}</p>

                    <p>Theme: {r.theme}</p>

                    <p>Accessibility: {r.accessibilityRequirements}</p>

                    <p>Transport: {r.transportRequirements}</p>

                    <p>Notes: {r.notes}</p>
            </div>
            
            
        ))}
        
        </>
    )
}

export default RequirementsDisplay
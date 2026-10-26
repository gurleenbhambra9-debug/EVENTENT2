import customer from "../model/Customer.js";

export const customerInformation= async(req,res)=>{
    try {
        const {name,  mobileNumber,  emailAddress,  preferredContactMethod, preferredLanguage} =req.body;
        if(!name || !mobileNumber || !emailAddress){
            return res.status(400).json({
                success:false,
                message:"name, mobile number, email are required"
            })
        }
        const customerData= await customer.create({
            name,  
            mobileNumber,  
            emailAddress,  
            preferredContactMethod, 
            preferredLanguage
        })
        return res.status(200).json({
            success:true,
            message:"customer information is submitted",
            data:customerData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
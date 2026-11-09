import requirements from "../model/requirements.js";

export const createRequirements= async (req,res)=>{
    try {
        const {budget, services, theme, accessibilityRequirements, transportRequirements,notes} =req.body;
        if(!budget|| !services || !theme){
           return res.status(400).json({
                success:false,
                message:"budget, services and theme are required"
            })
        }
        const createdRequirements= await requirements.create({
            budget, 
            services, 
            theme, 
            accessibilityRequirements, 
            transportRequirements,
            notes,
            userId: req.user._id
        })
        res.status(200).json({
            success:true,
            data:createdRequirements
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// get requirements

export const getRequirements= async(req,res)=>{
    try {
        const requirementsData= await requirements.find()
        return res.status(200).json({
            success:true,
            data:requirementsData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
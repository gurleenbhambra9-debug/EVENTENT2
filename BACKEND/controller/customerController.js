import customer from "../model/Customer.js";

export const customerInformation = async (req, res) => {
    try {
        const { name, mobileNumber, emailAddress, preferredContactMethod, preferredLanguage } = req.body;
        const newCustomer = await customer.create({
            name,
            mobileNumber,
            emailAddress,
            preferredContactMethod,
            preferredLanguage,
            userId: req.user._id // Safely attached from authMiddle
        });

        res.status(201).json({
            success: true,
            message: "Customer information saved successfully",
            data: newCustomer
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// get customer information

export const getCustomerInformation = async(req,res)=>{
    try {
        const AllCustomerData= await customer.find()
        return res.status(200).json({
            success:true,
            data:AllCustomerData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
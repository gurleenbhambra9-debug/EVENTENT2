import user from "../model/user.js";
import Customer from "../model/Customer.js";

export const getUserDashboard = async (req, res) => {
    try {
        const userData = await user.findById(req.user._id)
            .select("-password");

        const enquiries = await Customer.find({
            userId: req.user._id
        });

        return res.status(200).json({
            success: true,
            data: {
                user: userData,
                totalEnquiries: enquiries.length,
                enquiries
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
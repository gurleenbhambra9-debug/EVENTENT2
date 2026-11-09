import user from "../model/user.js";
import Customer from "../model/Customer.js";

export const getAdminDashboard = async (req, res) => {
    try {
        const totalUsers = await user.countDocuments({
            role: "user"
        });

        const allUsers = await user.find({
            role: "user"
        }).select("-password");

        const totalEnquiries = await Customer.countDocuments();

        return res.status(200).json({
            success: true,
            data: {
                totalUsers,
                totalEnquiries,
                users: allUsers
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
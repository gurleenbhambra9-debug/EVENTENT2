import jwt from 'jsonwebtoken'
import user from '../model/user.js';

const authMiddle = async (req, res, next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token not found, authorization denied"
            });
        }

        // Debug logs to verify environment variables
        console.log("Authorization header exists:", !!req.headers.authorization);
        console.log("Secret available:", !!process.env.SECRETKEY);

        if (!process.env.SECRETKEY) {
            return res.status(500).json({
                success: false,
                message: "Server configuration error: SECRETKEY is missing"
            });
        }
console.log("🔍 TOKEN RECEIVED:", token);
console.log("🔍 EXACT SECRET:", JSON.stringify(process.env.SECRETKEY));
        const decode = jwt.verify(token, process.env.SECRETKEY);
        console.log("🔴 VERIFYING with SECRETKEY:", process.env.SECRETKEY); // ADD THIS
        
        const userData = await user.findById(decode.id).select("-password");
        if (!userData) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = userData;
        next();
    } catch (error) {
        console.log("Auth Middleware Error:", error.message);
        
        // Return 401 Unauthorized for any token/verification errors
        return res.status(401).json({
            success: false,
            message: error.message || "Invalid or expired token"
        });
    }
};

export default authMiddle;
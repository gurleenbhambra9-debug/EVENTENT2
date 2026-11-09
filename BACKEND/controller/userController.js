import user from '../model/user.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/utils.js';

// Register user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const normalizedEmail = email.trim().toLowerCase();
        const existUser = await user.findOne({ email: normalizedEmail });
         
        if (existUser) {
            return res.status(400).json({
                success: false,
                message: "User is already registered"
            });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const registeredUser = await user.create({
            name,
            email: normalizedEmail,
            password: hashpassword,
            role: "user"
        });
        return res.status(201).json({
            message: "User is registered successfully",
            success: true,
            data: {
                id: registeredUser._id,
                name: registeredUser.name,
                email: registeredUser.email,
                role: registeredUser.role
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            });
        }
        
        const normalizedEmail = email.trim().toLowerCase();
        const existUser = await user.findOne({ email: normalizedEmail });
        
        if (!existUser) {
            return res.status(400).json({
                success: false,
                message: "User is not registered yet"
            });
        }

        const checkpassword = await bcrypt.compare(password, existUser.password);
        if (!checkpassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            });
        }

        const token = generateToken(existUser._id, existUser.role);
        
        const message = existUser.role === "admin" 
            ? "Admin login successful" 
            : "User login successful";

        return res.status(200).json({
            success: true,
            message,
            token,
            data: {
                id: existUser._id,
                name: existUser.name,
                email: existUser.email,
                role: existUser.role
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
};
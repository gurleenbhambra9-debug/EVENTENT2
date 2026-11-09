import user from '../model/user.js'
import bcrypt from 'bcryptjs'
import generateToken from '../utils/utils.js'
// register user
export const registerUser= async(req,res)=>{
    try {
        const{name,email,password}=req.body
        if(!name || !email || !password){
            res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const existUser= await user.findOne({email})
        if(existUser){
            res.status(400).json({
                message:"User is already registered"
            })
        }
        const hashpassword= await bcrypt.hash(password,10)
        const registeredUser= await user.create({
            name,
            email,
            password:hashpassword
        })
        return res.status(200).json({
            message:"user is registered successfully",
            sucess:true,
            data:registeredUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// login user
export const loginUser= async(req,res)=>{
    try {
        const {email, password}=req.body
        if(!email || !password){
            return res.status(400).json({
                message:"All fields are required",
                success:false
            })
        }
        const existUser= await user.findOne({email})
        if(!existUser){
            return res.status(400).json({
                success:false,
                message:"user is not registered yet"
            })
        }
        const checkpassword= await bcrypt.compare(password, existUser.password)
        if(!checkpassword){
            return res.status(400).json({
                success:false,
                message:"Invalid Password"
            })
        }
        const token=generateToken(existUser._id)
        return res.status(200).json({
            success:true,
            message:"user logined successfull",
            token,
            data:existUser
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
}
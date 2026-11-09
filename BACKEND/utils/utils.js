import jwt from 'jsonwebtoken'

const generateToken= (id, role)=>{
    console.log("🟢 SIGNING with SECRETKEY:", process.env.SECRETKEY); // ADD THIS
    return jwt.sign(
        {
            id,
            role
        },
        process.env.SECRETKEY,
        {
            expiresIn:"7d"
        }
    )
}
export default generateToken
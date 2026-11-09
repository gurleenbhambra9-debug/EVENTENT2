import jwt from 'jsonwebtoken'

const generateToken= (id)=>{
    return jwt.sign(
        {
            id
        },
        process.env.SECRETKEY,
        {
            expiresIn:"7d"
        }
    )
}
export default generateToken
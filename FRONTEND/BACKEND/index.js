import express from 'express';
import dotenv from 'dotenv'
import connectDb from './db/db.js';
import dns from 'dns'
import userRoute from './routes/userRoutes.js'
import customerRouter from './routes/customerRoute.js'
import cors from 'cors'

dotenv.config()
dns.setServers(['8.8.8.8','1.1.1.1'])
const app=express();
app.use(express.json())
app.use(cors())
connectDb()
const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.send("this is the home")
})
app.use('/api', userRoute)
app.use('/test', customerRouter)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})
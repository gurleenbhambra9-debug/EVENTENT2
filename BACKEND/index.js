import 'dotenv/config';
import express from 'express';
import dotenv from 'dotenv'
import connectDb from './db/db.js';
import dns from 'dns'
import userRoute from './routes/userRoutes.js'
import customerRouter from './routes/customerRoute.js'
import eventRouter from './routes/eventDetailsRoute.js'
import cors from 'cors'
import requirementsRoute from './routes/requirementsRoute.js'
import adminDashboard from "./routes/adminDashboard.js";
import userDashboard from "./routes/userDashboard.js";

// dotenv.config()
dns.setServers(['8.8.8.8','1.1.1.1'])
const app=express();
app.use(express.json())
app.use(cors())
connectDb()
const PORT=process.env.PORT || 2000;
app.get('/',(req,res)=>{
    res.send("this is the home")
})
app.use('/api', userRoute)
app.use('/test', customerRouter)
app.use('/api', eventRouter)
app.use('/api', requirementsRoute)
app.use("/api/admin/dashboard", adminDashboard);
app.use("/api/user/dashboard", userDashboard);

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})
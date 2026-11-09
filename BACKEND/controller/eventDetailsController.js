import eventDetails from "../model/eventDetails.js";

export const createEventDetails= async(req,res)=>{
    try {
        const {eventDate, eventCity, startTime, endTime, expectedGuests, eventType, eventDuration,  eventDateFixed,  preference} =req.body;
        if(!eventDate || !eventCity || !startTime || !endTime || !expectedGuests || !eventType || !eventDuration ||  !eventDateFixed ||  !preference){
           return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const createdEventDetails= await eventDetails.create(
            {
                eventDate, 
                eventCity, 
                startTime, 
                endTime, 
                expectedGuests, 
                eventType,  
                eventDuration,
                eventDateFixed,  
                preference,
                userId: req.user._id
            }
        )
        return res.status(200).json({
            success:true,
            message:"event details is submitted",
            data:createdEventDetails
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// get event details

export const getEventDetails= async(req,res)=>{
    try {
        const getEventData= await eventDetails.find()
        return res.status(200).json({
            success:true,
            data:getEventData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
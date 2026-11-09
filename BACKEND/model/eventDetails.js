import mongoose from 'mongoose'

const eventDetailsSchema= new mongoose.Schema({
    eventDate:{
        type:Date,
        required:true
    },
    eventCity:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    expectedGuests:{
        type:Number,
        required:true
    },
    eventType:{
        type:String,
        required:true,
        enum:['Wedding/marriage',
    'Engagement/Roka',
    'Birthday Party',
    'Anniversary',
    'Corporate Event/ Conference',
    'Exhibition/ Product Launch',
    'Religious Function/ Jagran']
    },
    eventDuration:{
        type:String,
        required:true
    },
    eventDateFixed:{
        type:String,
        required:true,
        enum:[ 'Fixed Date',
    'Flexible Date',
    'Not Decided Yet']
    },
    preference:{
        type:String,
        enum:['Indoor', 'Outdoor']
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
}
},
{
    timestamps: true
})

const eventDetails = mongoose.model("eventDetails", eventDetailsSchema)
export default eventDetails;
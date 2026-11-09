import mongoose from 'mongoose'

const requirementsSchema= new mongoose.Schema({
    budget:{
        type:String,
        required:true
    },
    services:{
        type:[String],
        required:true,
        enum:['Venue/Banquet Hall','Decoration & Stage','Catering/ Food', 'Photography /Videography','DJ / Sound/ Lighting','other']
    },
    theme:{
        type:String,
        required:true
    },
    accessibilityRequirements:{
        type:String
    },
    transportRequirements:{
        type:String
    },
    notes:{
        type:String
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
}
},{
    timestamps:true
})
const requirements= mongoose.model("requirements", requirementsSchema)
export default requirements;
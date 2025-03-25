import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    firstName: {
        type: String,
        trim: true, 
    },

    lastName: {
        type: String,
        trim: true,
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
    },

    image: {
        type: String,
    },

    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile",
    },

    resetPasswordExpires: {
        type: Date,
    },

    token: {
        type: String,
    },

})

export default mongoose.model('user',userSchema);
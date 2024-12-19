import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    id:{type:mongoose.Schema.Types.ObjectId},
    name: {type:String, require:true},
    email: {type:String},
    password: {type:String}
    
}, {versionKey: false})

const user = mongoose.model('user', userSchema)
export default user
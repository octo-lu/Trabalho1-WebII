import mongoose from "mongoose";

const newsLetterSchema = new mongoose.Schema({

    id:{type:mongoose.Schema.Types.ObjectId},
    name: {type:String, require:true},
    email: {type:String}
    
}, {versionKey: false})

const newsLetter = mongoose.model('newsLetter', newsLetterSchema)
export default newsLetter
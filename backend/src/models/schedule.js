import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({

    id:{type:mongoose.Schema.Types.ObjectId},
    name: {type:String, require:true},
    telefone: {type:String},
    dataMarcada: {type:String},
    numeroPessoas: {type:Number}

}, {versionKey: false})

const schedule = mongoose.model('schedule', scheduleSchema)
export default schedule
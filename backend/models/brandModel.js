import mongoose from "mongoose"

const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
        default: ""
    },
    logoUrl:{
        type: String, 
        required: true,
    }
  });
  
const Brand = mongoose.model('Brand',brandSchema);

export default Brand;
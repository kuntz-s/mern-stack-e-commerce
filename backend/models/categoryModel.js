import mongoose from "mongoose"

//category schema
const categorySchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    url:{
      type: String,
      required: true
    }
  })

const Category = mongoose.model('Category', categorySchema);

export default Category;
  
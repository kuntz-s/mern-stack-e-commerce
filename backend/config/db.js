import mongoose from "mongoose";

const connectDB = async () => {

    try {
        mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        
        console.log(`MongoDb connected`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1) //passing one as argument means it is going to exit with failure status
    }
}

export default connectDB;
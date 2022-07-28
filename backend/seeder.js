import mongoose from 'mongoose';
import dotenv from 'dotenv'
import colors from 'colors';
import usersData from './data/users.js';
import User from "./models/userModel.js";
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try{
       await User.deleteMany();

       await User.insertMany(usersData);

       console.log('Data imported'.green.inverse);
       process.exit()
    }catch(error){
        console.log(`${error}`.red.inverse);
        process.exit()
    }
}

const destroyData = async () => {
    try{
       await User.deleteMany();

       console.log('Data destroyed'.green.inverse);
       process.exit()
    }catch(error){
        console.log(`${error}`.red.inverse);
        process.exit()
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else {
    importData()
}



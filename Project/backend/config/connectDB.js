const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to Database');
    }
    catch(err){
        console.log('Error connecting to DB', err);
    }
}

module.exports = connectDB;
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Succesfully connected mongoDB.✅`);
    } catch (error) {
        console.log(error);
        
    }
}

exports default connectDB;
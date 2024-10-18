import mongoose from "mongoose";



const MongoConnection = async (): Promise<void> => {
    try {
        const mongoUri: string = process.env.MONGO_URI as string
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


export default MongoConnection;
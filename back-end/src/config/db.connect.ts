import mongoose from 'mongoose';
import {config} from './env.config'



interface IMongoDBConnection{
    connect():Promise<void>
}


export class MongoDBConnection implements IMongoDBConnection {
    async connect(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_URI)
            console.log("MongoDB connection successful");
        } catch (error) {
            console.log("Error connecting mongodb", error)
            process.exit(1)
        }
    }
}
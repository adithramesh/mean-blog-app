import mongoose, {Schema, Document} from 'mongoose'


export interface IUser extends Document {
  username: string;
  phoneNumber: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema:Schema = new Schema(
      {    
        username: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
        password: { type: String, required: true },
       
      },
      { timestamps: true } 
    
)

export default mongoose.model<IUser>('User',userSchema)
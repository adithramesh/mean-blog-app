import mongoose, { Schema, Document, Types } from "mongoose";

export interface IBlog extends Document {
  title: string;
  content: string;
  imageUrl: string;
  author: Types.ObjectId; 
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: false, 
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);


export default mongoose.model<IBlog>("Blog", blogSchema);

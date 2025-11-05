import mongoose from "mongoose";
import User, { IUser } from "../../models/user.model";

import { injectable } from "inversify";
import { BaseRepository } from "../base-repository";
import { IAuthRepository } from "./auth.repository.interface";

@injectable()
export class AuthRepository extends BaseRepository<IUser> implements IAuthRepository {
    constructor() {
    super(User); 
    }
    async createUser(signUpData: Partial<IUser>): Promise<string> { 
        const user = await this.create(signUpData);
        return (user._id as mongoose.Types.ObjectId).toString();
    }
    async findUserByPhone(phoneNumber: string): Promise<IUser | null> {
        return await this.findOne({phoneNumber})
    }
  
    async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id,updateData,{new:true})
    } 
   

}
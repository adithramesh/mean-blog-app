import { IUser } from "../../models/user.model";

export interface IAuthRepository{
    createUser(signUpData:Partial<IUser>):Promise<string>;
    findUserByPhone(phoneNumber:string):Promise<IUser |null>;
    updateUser(id:string, updateData:Partial<IUser>): Promise<IUser |null>
}



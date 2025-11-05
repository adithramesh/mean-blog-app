import { inject, injectable } from "inversify";
import { TYPES } from "../../types/types";
import { IAuthController } from "./auth.controller.interface";
import { Request, Response } from "express";
import { HttpStatus } from "../../utils/http-status.enum";
import { AuthRequestDTO, AuthResponseDTO } from "../../dto/auth.dto";
import { IAuthService } from "../../services/auth/auth.service.interface";

@injectable()
export class AuthController implements IAuthController {
constructor(
        @inject(TYPES.IAuthService) private _authService:IAuthService
    ){}

    async signup(req: Request<AuthRequestDTO>, res:Response<AuthResponseDTO>):Promise<void>{
        try {
            const signupData:AuthRequestDTO=req.body
            const response= await this._authService.signup(signupData)
            res.status(response.status).json(response)
        } catch (error) {
            console.log("error occured", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false, message: "Internal server error",
                status: HttpStatus.INTERNAL_SERVER_ERROR
            });
        }
    }

    async login(req:Request<AuthRequestDTO>,res:Response<AuthResponseDTO>):Promise<void>{
        try {
            const loginData:AuthRequestDTO=req.body
            const response = await this._authService.login(loginData)
            res.status(response.status).json(response)
        } catch (error) {
            console.log("error occured", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false, message: "Internal server error",
                status: HttpStatus.INTERNAL_SERVER_ERROR
            });
        }
    }

}



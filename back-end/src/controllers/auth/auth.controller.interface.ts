import {Request, Response} from "express"
import { AuthRequestDTO, AuthResponseDTO } from "../../dto/auth.dto"

export interface IAuthController {
    signup(req: Request<AuthRequestDTO>, res: Response<AuthResponseDTO>): Promise<void>
    login(req: Request<AuthRequestDTO>, res: Response<AuthResponseDTO>):Promise<void>
}
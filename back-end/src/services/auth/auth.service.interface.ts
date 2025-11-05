import { AuthRequestDTO, AuthResponseDTO } from "../../dto/auth.dto"



export interface IAuthService{
    signup(signUpData:AuthRequestDTO):Promise<AuthResponseDTO>
    login(loginData:AuthRequestDTO):Promise<AuthResponseDTO>
}
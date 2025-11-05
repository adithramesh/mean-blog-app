import { Router } from 'express'
import { inject, injectable } from 'inversify'
import { TYPES } from '../types/types'
import { IAuthController } from '../controllers/auth/auth.controller.interface'



@injectable()
export class AuthRoutes{
    private _router:Router
    constructor(
        @inject(TYPES.IAuthController) private _authController:IAuthController
    ){
        this._router=Router()
        this.initializeRoutes()
    }

    private initializeRoutes(){
        this._router.post('/signup',this._authController.signup.bind(this._authController))
        this._router.post('/login',this._authController.login.bind(this._authController))
    }

    public getRouter(){
        return this._router
    }


}
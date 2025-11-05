import { Container } from "inversify"
import { AuthRepository } from "../repositories/auth/auth.repository"
import { IAuthRepository } from "../repositories/auth/auth.repository.interface"
import { TYPES } from "../types/types"
import { AuthController } from "../controllers/auth/auth.controller"
import { IAuthController } from "../controllers/auth/auth.controller.interface"
import { AuthRoutes } from "../routes/auth.routes"
import { AuthService } from "../services/auth/auth.service"
import { IAuthService } from "../services/auth/auth.service.interface"
import { IPasswordService, PasswordService } from "../services/auth/password.service"
import { BlogController } from "../controllers/blog/blog.controller"
import { IBlogController } from "../controllers/blog/blog.controller.interface"
import { BlogRepository } from "../repositories/blog/blog.repository"
import { IBlogRepository } from "../repositories/blog/blog.repository.interface"
import { BlogRoutes } from "../routes/blog.routes"
import { BlogService } from "../services/blog/blog.service"
import { IBlogService } from "../services/blog/blog.service.interface"

const container = new Container()

container.bind<IPasswordService>(TYPES.IPasswordService).to(PasswordService)

container.bind<IAuthRepository>(TYPES.IAuthRepository).to(AuthRepository)
container.bind<IAuthService>(TYPES.IAuthService).to(AuthService)
container.bind<IAuthController>(TYPES.IAuthController).to(AuthController)
container.bind<AuthRoutes>(TYPES.AuthRoutes).to(AuthRoutes)

container.bind<IBlogRepository>(TYPES.IBlogRepository).to(BlogRepository)
container.bind<IBlogService>(TYPES.IBlogService).to(BlogService)
container.bind<IBlogController>(TYPES.IBlogController).to(BlogController)
container.bind<BlogRoutes>(TYPES.BlogRoutes).to(BlogRoutes)

export default container;
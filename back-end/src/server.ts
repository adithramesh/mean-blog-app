import { App } from "./app";
import { config } from "./config/env.config";
import { MongoDBConnection } from "./config/db.connect";
import container from "./container/container";
import { AuthRoutes } from "./routes/auth.routes";
import { TYPES } from "./types/types";
import { BlogRoutes } from "./routes/blog.routes";

export class Server {
  private appInstance: App;
  private dataBaseConnection: MongoDBConnection;
  constructor() {
    this.appInstance = new App();
    this.dataBaseConnection = new MongoDBConnection();
    this.configureRoutes()
  }

    private configureRoutes(): void {
    try {
     
      const authRoutes = container.get<AuthRoutes>(TYPES.AuthRoutes);
      const blogRoutes = container.get<BlogRoutes>(TYPES.BlogRoutes); // Resolve the new blog routes
  

      this.appInstance.setupRoutes(authRoutes, blogRoutes);
      console.log("All application routes configured successfully.");
    } catch (error) {
        console.error("Failed to configure application routes. Check Inversify bindings.", error);
    }
  }

  public async startServer(): Promise<void> {
    try {
      await this.dataBaseConnection.connect();
      this.appInstance.getServer().listen(config.PORT, () => {
        console.log(
          `blog_management server is running at http://localhost:${config.PORT}`
        );
      });
    } catch (error) {
      console.log("Server not started");
    }
  }
}

const server = new Server();
server.startServer();

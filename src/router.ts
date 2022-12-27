import { Application, Request, Response, Router } from "express";
import userrouter from "./Components/User/UserRouter";
class RouteEngine {
  private app: Application;
  private routers:Map<string,Router> = new Map<string,Router>();
  constructor(App: Application) {
    this.app = App;
    this.registerRouters("/api/v1/users" , userrouter)
  }
  private registerRouters(route:string , router:Router){
    this.routers.set(route , router)
  }
  public run(): void {
    this.routers.forEach((router:Router , route : string) => {
      this.app.use(route , router)
    })
  }
}
export default RouteEngine
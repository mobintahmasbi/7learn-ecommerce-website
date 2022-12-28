import { Application, Router } from "express";
import RouteEngine from "./router";
import userrouter from "../Components/User/UserRouter";
import productRouter from "../Components/Products/productRouter";
class RouteService {
  private app: Application;
  private router: RouteEngine;
  constructor(App: Application) {
    this.app = App;
    this.router = new RouteEngine();
    this.bindRouters();
  }
  public bindRouters() {
    this.router.registerRouters("/api/v1/users", userrouter);
    this.router.registerRouters("/api/v1/products", productRouter);
  }
  public run(): void {
    this.router.getRouters().forEach((router: Router, route: string) => {
      this.app.use(route, router);
    });
  }
}
export default RouteService;

import express from "express";
import { Application } from "express";
import RouteService from "./router/RouteService";
class App {
  public app: Application;
  public port: number;
  private router: RouteService;
  constructor(Port: number) {
    this.port = Port;
    this.app = express();
    this.router = new RouteService(this.app);
    this.router.run();
  }
  public start(): void {
    this.app.listen(this.port, () => {
      console.log("app is runnig");
    });
  }
}
export default App;

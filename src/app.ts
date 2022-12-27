import express from "express";
import { Application } from "express";
import Router from "./router";
class App {
  public app: Application;
  public port: number;
  private router: Router;
  constructor(Port: number) {
    this.port = Port;
    this.app = express();
    this.router = new Router(this.app);
    this.router.run();
  }
  public start(): void {
    this.app.listen(this.port, () => {
      console.log("app is runnig");
    });
  }
}
export default App;

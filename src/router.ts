import { Application, Request, Response } from "express";
class Router {
  private app: Application;
  constructor(App: Application) {
    this.app = App;
  }
  public run(): void {
    this.app.get("/api/v1/users", (req: Request, res: Response) => {
      res.send({ success: true });
    });
  }
}
export default Router
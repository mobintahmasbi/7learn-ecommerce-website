import { Request , Response } from "express";
class UserController{
    constructor(){}
    public index(req:Request,res:Response){
        res.send({allUsers: []})
    }
}
export default UserController
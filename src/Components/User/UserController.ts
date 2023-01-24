import { Request , Response } from "express";
import User from "./model/User";
class UserController{
    constructor(){}
    public index(req:Request,res:Response){
        res.send({allUsers: []})
    }
    public async create(req:Request, res:Response){
        const usercreated = await User.create({
            first_name: 'mobin',
            last_name: 'tahmasbi',
            phone:'09035083850',
            email:'mobintahmasbi13801202@gmail.com'
        })
        res.send({ usercreated })
    }
}
export default UserController
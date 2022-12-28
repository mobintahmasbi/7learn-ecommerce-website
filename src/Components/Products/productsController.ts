import { Request , Response } from "express";
class PorductsController{
    constructor(){}
    public index(req:Request,res:Response){
        res.send({allProduct: []})
    }
}
export default PorductsController
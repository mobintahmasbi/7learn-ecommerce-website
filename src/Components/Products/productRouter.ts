import { Router } from "express";
import PorductController from './productsController';
const productRouter: Router =  Router()
const PorductControllerInstance = new PorductController()
productRouter.get("/" , PorductControllerInstance.index)
export default productRouter
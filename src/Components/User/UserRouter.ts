import { Router } from "express";
import UserController from './UserController';
const userrouter: Router =  Router()
const UserControllerInstance = new UserController()
userrouter.get("/" , UserControllerInstance.index)
export default userrouter
import { Document } from "mongoose";
import IProductAttribute from './IProductAttribute';

export default interface IporductCategory extends Document{

    title: String;
    name: String;
    total_product: number;
    attributes: [IProductAttribute]
}

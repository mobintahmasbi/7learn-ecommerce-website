import { Document } from "mongoose";
import ProductStatus from './ProductStatus';

export default interface ProductModel extends Document{
    
    title: String;
    price: number;
    sales_price: number;
    tumbnail: String;
    gallery: [String];
    created_At: Date;
    updated_At: Date;
    status: ProductStatus
    
}
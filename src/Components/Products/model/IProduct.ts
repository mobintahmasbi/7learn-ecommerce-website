import { Document } from "mongoose";
import ProductStatus from './ProductStatus';

export default interface ProductModel extends Document{
    
    title: String;
    price: number;
    sales_price: number;
    tumbnail: String;
    gallery: [String];
    prodct_category: String;
    attributes: [Object];
    created_At: Date;
    updated_At: Date;
    status: ProductStatus
    
}
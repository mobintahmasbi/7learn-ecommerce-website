import { Document } from "mongoose";

export default interface IOrderLine extends Document{
    
    product: string;
    pirce: number;
    created_at: Date;

}

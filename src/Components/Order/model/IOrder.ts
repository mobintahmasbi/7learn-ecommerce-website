import { Document } from "mongoose";

export default interface IOrder extends Document{

    user: string;
    total_price: number;
    coupon: object;
    final_price: number;
    status: number;
    created_at: Date;
    updated_at: Date;
}
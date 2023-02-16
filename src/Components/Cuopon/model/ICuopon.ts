import { Document } from "mongoose";
import CuoponStatus from './CuoponStatus';

export default interface ICuopon extends Document{

    code: string;
    amount: number;
    limit: number;
    used: number;
    constraints: {
        users: string[],
        products: string[]
    };
    expires_at: Date;
    status: CuoponStatus;
}
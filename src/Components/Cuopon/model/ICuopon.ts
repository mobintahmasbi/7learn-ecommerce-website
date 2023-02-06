import { Document } from "mongoose";
import CuoponStatus from './CuoponStatus';

export default interface ICuopon extends Document{

    code: string;
    amount: number;
    limit: number;
    used: number;
    constraints: object;
    expires_at: Date;
    status: CuoponStatus;
}
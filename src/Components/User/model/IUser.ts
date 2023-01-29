import { Document } from "mongoose";

interface IUser extends Document {
    
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    total_order: number;
    wallet: number;
    address: [object]
    created_At: Date;
    
}
export default IUser
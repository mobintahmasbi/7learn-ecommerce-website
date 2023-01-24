import { Schema, model } from 'mongoose';
import IUser from './IUser';

const UserSchema: Schema = new Schema({

    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    total_order: {type: Number, default: 0},
    wallet: {type: Number, default: 0},
    created_At: {type: Date, default: Date.now}

})
export default model<IUser>('User', UserSchema)
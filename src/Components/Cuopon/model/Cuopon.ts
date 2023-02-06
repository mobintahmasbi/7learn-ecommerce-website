import { Schema, model } from "mongoose";
import CuoponStatus from './CuoponStatus';

const CuoponSchema: Schema = new Schema({

    code: { type: String, required: true },
    amount: { type: Number, required: true },
    limit: { type: Number, default: 0 },
    used: { type: Number, default: 0},
    constraints: { type: Object, default: null },
    expires_at: { type: Date, default: null},
    status: { type: CuoponStatus, default : CuoponStatus.ACTIVE}

})

export default model<CuoponStatus>( 'Coupon', CuoponSchema )

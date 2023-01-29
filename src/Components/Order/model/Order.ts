import { model, Schema } from "mongoose";
import OrderStatus from './OrderStatus';
import IOrder from './IOrder';

const OrderSchema: Schema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    total_price: { type: Number, required: true},
    final_price: { type: Number, required: true},
    coupon: { type: Object, default: null},
    status: { type: OrderStatus, required: true, default: OrderStatus.INIT },
    created_at: { type: Date, required: true, default: Date.now},
    updated_at: { type: Date, required: true, default: Date.now}

})

export default model<IOrder>('Oreder', OrderSchema)

import { Schema } from "mongoose";

const OrderLineSchema: Schema = new Schema({
    
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    price: {type: Number, required: true},
    created_at: {type: Date, default: Date.now}

})

export default OrderLineSchema;

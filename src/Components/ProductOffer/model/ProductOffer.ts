import { model, Schema } from "mongoose";
import ProductOfferItemSchema from './ProductOfferItem';
import IProductOffer from './IProductOffer';

const ProductOfferSchema: Schema = new Schema({

    products: { type: [ ProductOfferItemSchema ], required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    created_at: { type: Date, default: Date.now }
})

export default model<IProductOffer>("ProductOffer", ProductOfferSchema)

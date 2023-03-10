import { Schema, model } from "mongoose";
import IProduct from './IProduct'
import ProductStatus from './ProductStatus';
const ProductSchema: Schema = new Schema({
    
    title: {type: String, required: true},
    price: {type: Number, required: true},
    sales_price: {type: Number, default: 0},
    tumbnail: {type: String},
    gallery: {type: [String]},
    prodct_category: {type: Schema.Types.ObjectId, ref: 'ProductCategory'},
    attributes: {type: [Object], required: true},
    created_At: {type: Date, default: Date.now},
    updated_At: {type: Date, default: Date.now},
    status: {type: Number, default: ProductStatus.INIT}
    
})

export default model<IProduct>('product', ProductSchema)
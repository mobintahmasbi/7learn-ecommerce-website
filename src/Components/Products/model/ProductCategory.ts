import { Schema, model} from 'mongoose'
import IporductCategory from './IProductCategory';

const ProductCategorySchema: Schema = new Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    attributes: {type: [Object] , required: true}
})

export default model<IporductCategory>('ProductCategory', ProductCategorySchema)
import * as mongoose from 'mongoose'
console.log(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,(err) => {
    if(err) throw err
    console.log('mongo is running correctly');
    
})

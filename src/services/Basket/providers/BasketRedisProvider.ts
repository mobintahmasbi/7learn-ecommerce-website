import IBasket from "../contract/IBasket";
import IProduct from 'src/Components/Products/model/IProduct';
import { client } from "infrustructural/connection/redis";

export default class BaketRedisProvider implements IBasket{
    
    private key:string;

    constructor(Key:string){
        this.key = Key;
    }

    public add(product: IProduct): void {
        client.get(this.key)
        .then(result => {
            if(result){
                const items = JSON.parse(result)
                items.push(product)
                client.set(this.key, JSON.stringify(items))
            }
        })
        .catch(err => {
            console.log('the operation failed')
            console.log(err.message)            
        })
    }
    public remove(product: IProduct): void {
        client.get(this.key)
        .then(result => {
            if(result){
                const items = JSON.parse(result)
                items.splice(items.indexOf(product), 1);
                client.set(this.key, JSON.stringify(items))
            }
        })
        .catch(err => {

            console.log('the operation failed')
            console.log(err)
        })
    }
    public async items(): Promise<IProduct[]> {
        const items = await this.getItems()
        return items
    }
    public async count(): Promise<number> {
        const items = await this.getItems()
        return items.length
    }
    public async has(product: IProduct): Promise<boolean> {
        const items = await this.getItems()
        return items.includes(product)
    }
    clear(): void {
        client.del(this.key)
    }
    public async total(): Promise<number> {
        const items = await this.getItems()
        const price = items.reduce((total, product: IProduct) => {
            return total + product.price;
        }, 0)
        return price
    }
    private async getItems(): Promise<IProduct[]>{
        const items = await client.get(this.key)
        .then(result => result)
        .catch(err => err)
        if(items){
            JSON.parse(items)
        }
        return items
    }
}
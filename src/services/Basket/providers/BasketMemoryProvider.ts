import IBasket from '../contract/IBasket';
import IProduct from 'src/Components/Products/model/IProduct';

export default class BasketMemoryProvider implements IBasket{
    
    private BasketItems: IProduct[] = [];
    
    public add(product: IProduct): void {

        this.BasketItems.push(product);

    }
    public remove(product: IProduct): void {

        this.BasketItems.splice(this.BasketItems.indexOf(product), 1);
    
    }
    public items(): Promise<IProduct[]> {

        return Promise.resolve(this.BasketItems);

    }
    public count(): Promise<number> {

        return Promise.resolve(this.BasketItems.length);

    }
    public has(product: IProduct): Promise<boolean> {
        return Promise.resolve(this.BasketItems.includes(product));
    }
    clear(): void {
        this.BasketItems = [];
    }
    total(): Promise<number> {
        const price = this.BasketItems.reduce((total, product: IProduct) => {
            return total + product.price;
        }, 0)
        return Promise.resolve(price)
        
    }
    
}

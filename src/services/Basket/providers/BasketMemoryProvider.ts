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
    public items(): IProduct[] {

        return this.BasketItems;

    }
    public count(): number {

        return this.BasketItems.length;

    }
    public has(product: IProduct): boolean {
        return this.BasketItems.includes(product);
    }
    clear(): void {
        this.BasketItems = [];
    }
    total(): number {

        return this.BasketItems.reduce((total, product: IProduct) => {
            return total + product.price;
        }, 0)
        
    }
    
}

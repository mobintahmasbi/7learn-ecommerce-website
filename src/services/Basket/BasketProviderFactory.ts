import IBasket from './contract/IBasket';
import BasketMemoryProvider from './providers/BasketMemoryProvider';
import BasketRedisProvider from './providers/BasketRedisProvider';
export default class BaketProviderFactory{

    private providers: Map<string, IBasket> = new Map<string , IBasket>();

    constructor(){
        this.providers.set('BasketMemoryProvider', new BasketMemoryProvider())
        this.providers.set('BasketRedisProvider', new BasketRedisProvider())
    }

    public setProvider(name: string, provider: IBasket){
        if(this.has(name)){
            throw new Error(`provider ${name} already exist`)
        }
        this.providers.set(name , provider)
    }

    public getProvider(name: string): IBasket{
        if(!this.has(name)){
            throw new Error(`provider ${name} is not founded`)
        }
        return this.providers.get(name)
    }

    private has(name: string): boolean{
        return this.providers.has(name)
    }
}
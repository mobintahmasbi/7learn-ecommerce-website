import IProduct from 'src/Components/Products/model/IProduct'

export default interface IBasket{

    add(product: IProduct): void;

    remove(product: IProduct): void;

    items(): Promise<IProduct[]>;

    count(): Promise<number>;

    has(product: IProduct): Promise<boolean>;

    clear(): void;

    total(): Promise<number>;
}
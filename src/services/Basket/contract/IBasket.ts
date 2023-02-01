import IProduct from 'src/Components/Products/model/IProduct'

export default interface IBasket{

    add(product: IProduct): void;

    remove(product: IProduct): void;

    items(): IProduct[];

    count(): number;

    has(product: IProduct): boolean;

    clear(): void;

    total(): number;
}
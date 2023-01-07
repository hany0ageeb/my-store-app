import { Product } from "./product.model";
export class ProductLine{
    constructor(public product: Product, public quantity: number = 1){
    }
    get total(): number{
        return this.product.price * this.quantity;
    }
}
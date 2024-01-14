import { Item } from "./item.js";
import {Promotion} from "./promotion.js";

export class Checkout {

    private cartTotal: number;

    constructor(private promotions: Promotion[]) {
        this.promotions = promotions;
        this.cartTotal = 0;
    }

    public scan(item: Item) {
        this.cartTotal = this.cartTotal + item.price;
    }

    public total() : number {
        return this.cartTotal;
    }
}
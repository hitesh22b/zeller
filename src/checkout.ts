import { Item } from "./item.js";
import {Promotion} from "./promotion.js";

export class Checkout {

    private cartItems: Map<string, number>  = new Map<string, number>();
    private itemPricing: Map<string, number> = new Map<string, number>();

    constructor(private promotions: Promotion[]) {
        this.promotions = promotions;
    }

    public scan(item: Item) {
        if(!this.itemPricing.has(item.sku)) {
            this.itemPricing.set(item.sku, item.price);
        }
        const previousCount = this.cartItems.has(item.sku) ? this.cartItems.get(item.sku) : 0;
        this.cartItems.set(item.sku, previousCount + 1);
    }

    public total() : number {
        let sum = 0;
        for(let [sku, quantity] of this.cartItems) {
            sum = sum + (quantity * this.itemPricing.get(sku) )
        }

        for(let promotion of this.promotions) {
            sum = sum - promotion.getDiscount(this.cartItems, this.itemPricing);
        }

        return sum;
    }

    public clearCart() {
        this.cartItems.clear();
    }
}
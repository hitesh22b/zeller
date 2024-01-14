import {Promotion} from "./promotion.js";
import { v4 as uuidv4 } from 'uuid';

export class DropPrice implements Promotion {

    readonly id: string;

    constructor(private itemSku: string, private itemsCount: number, private newPrice: number) {
        this.id = uuidv4();
        this.itemSku = itemSku;
        this.itemsCount = itemsCount;
        this.newPrice = newPrice;
    }
    getDiscount(shoppingCart: Map<string, number>, itemsPricing: Map<string, number>): number {
        let discount = 0;
        if(shoppingCart.get(this.itemSku) >= this.itemsCount) {
            discount = discount +  ((itemsPricing.get(this.itemSku) - this.newPrice) * shoppingCart.get(this.itemSku));
        }
        return discount;
    }


}
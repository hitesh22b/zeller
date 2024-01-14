import {Promotion} from "./promotion.js";
import {it} from "node:test";

export class BuyXForY implements Promotion {

    readonly id: string;

    constructor(private itemSku: string, private numberOfPaidItems: number, private numberOfFreeItems: number) {
        this.itemSku = itemSku;
        this.numberOfFreeItems = numberOfFreeItems;
        this.numberOfPaidItems = numberOfPaidItems;
    }

    getDiscount(shoppingCart: Map<string, number>, itemsPricing: Map<string, number>): number {
        let discount = 0;
        if(shoppingCart.get(this.itemSku) >= this.numberOfPaidItems) {
            let discountMultiple= Math.floor(shoppingCart.get(this.itemSku) / this.numberOfPaidItems);
            discount = discount + discountMultiple * (itemsPricing.get(this.itemSku) * this.numberOfPaidItems -
                itemsPricing.get(this.itemSku) * this.numberOfFreeItems)
        }
        return discount;
    }


}
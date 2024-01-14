import {Promotion} from "./promotion.js";

export class BuyXgetY implements Promotion {

    readonly id: string;

    constructor(private itemSku: string, private numberOfPaidItems: number, private numberOfFreeItems: number) {
        this.itemSku = itemSku;
        this.numberOfFreeItems = numberOfPaidItems;
        this.numberOfPaidItems = numberOfPaidItems;
    }

    getDiscount(): number {
        return 0;
    }


}
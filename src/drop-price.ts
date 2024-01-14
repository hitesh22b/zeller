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
    getDiscount(): number {
        return 0;
    }


}
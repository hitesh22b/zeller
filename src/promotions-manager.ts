import { Promotion } from "./promotion.js";
import {DropPrice} from "./drop-price.js";
import {BuyXForY} from "./buyXForY.js";

export class PromotionsManager {
    private promotions:  Promotion[] = [];

    public createDropPrice(itemSku: string,  itemsCount: number, newPrice: number): void {
        this.promotions.push(new DropPrice(itemSku, itemsCount, newPrice));
    }

    public createBuyXForY(itemSku: string, numberOfPaidItems: number, numberOfFreeItems: number): void {
        this.promotions.push(new BuyXForY(itemSku, numberOfPaidItems, numberOfFreeItems));
    }

    // Sales Manager if decides to remove a promotion can use the below functionality
    public removePromotion(promotionId: string) {
        this.promotions = this.promotions.filter(promotion => promotion.id !== promotionId);
    }

    public getAllPromotions(): Promotion[] {
        return this.promotions;
    }
}
import { Promotion } from "./promotion.js";
import {DropPrice} from "./drop-price.js";
import {BuyXgetY} from "./buyXgetY.js";

export class PromotionsManager {
    private promotions:  Promotion[] = [];

    public createDropPrice(itemSku: string,  itemsCount: number, newPrice: number): void {
        this.promotions.push(new DropPrice(itemSku, itemsCount, newPrice));
    }

    public createBuyXForY(itemSku: string, numberOfPaidItems: number, numberOfFreeItems: number): void {
        this.promotions.push(new BuyXgetY(itemSku, numberOfPaidItems, numberOfFreeItems));
    }

    public removePromotion(promotionId: string) {
        this.promotions = this.promotions.filter(promotion => promotion.id !== promotionId);
    }

    public getAllPromotions(): Promotion[] {
        return this.promotions;
    }
}
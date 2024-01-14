export interface Promotion {
    getDiscount(shoppingCart: Map<string, number>, itemPricing: Map<string, number>): number;
    readonly id: string;
}
export class Item {

    constructor(readonly sku: string, readonly name: string, readonly price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price
    }
}
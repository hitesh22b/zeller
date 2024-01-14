import { PromotionsManager } from "./promotions-manager.js";
import {Checkout} from "./checkout.js";
import {Item} from "./item.js";

let ipd = new Item('ipd', 'Super iPad', 549.99);
let mbp = new Item('mbp', 'Macbook Pro', 1399.99);
let atv = new Item('atv', 'Apple TV', 109.50);
let vga = new Item('vga', 'VGA Adapter', 30);

let promotionsManager =  new PromotionsManager();

promotionsManager.createBuyXForY('atv', 3, 2);
promotionsManager.createDropPrice('ipd', 4, 499.99);

let co = new Checkout(promotionsManager.getAllPromotions());

co.scan(ipd);
co.scan(mbp);
co.scan(atv);
co.scan(vga);

console.log(co.total());



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
co.scan(atv);
co.scan(atv);
co.scan(atv);
co.scan(vga);

console.log(`3 atv, 1vga -> ${co.total()}   (Buy X for price of Y promotion)`);


co.clearCart();

co.scan(atv);
co.scan(ipd);
co.scan(ipd);
co.scan(atv);
co.scan(ipd);
co.scan(ipd);
co.scan(ipd);

console.log(`2 atv and 5 ipd -> ${co.total()} (Drop Price Promotion)`);

co.clearCart();

co.scan(atv);
co.scan(atv);
co.scan(atv);
co.scan(atv);
co.scan(atv);
co.scan(atv);
co.scan(mbp);

console.log(`6 atv and 1 mbp ${co.total()} (Buy X for price of Y promotion)`);



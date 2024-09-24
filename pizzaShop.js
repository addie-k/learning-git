const EventEmitter = require("events")
//class based inheritance
class PizzaShop extends EventEmitter{
    constructor() {
        super();
        this.orderNumber = 0;
    }
    placeOrder() {
        this.orderNumber++
        this.emit('an-event', this.orderNumber)
        return 'event emitted'
    }
    displayOrderNumber() {
        return this.orderNumber
    }
}
// console.log(new PizzaShop())
module.exports = PizzaShop
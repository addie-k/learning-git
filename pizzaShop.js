class PizzaShop{
    constructor(){
        this.number = 0 
    }
    placeOrder(){
        this.number ++
    }
    displayOrderNumber(){
        return this.number
    }
}
module.exports = PizzaShop
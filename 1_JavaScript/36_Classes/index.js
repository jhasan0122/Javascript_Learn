
class Product{
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculatePrice(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pant",22.50);
const product3 = new Product("Underwear",100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculatePrice(salesTax);

console.log(total.toFixed(2));
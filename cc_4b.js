// Step 1 is to create the .js and html file

// Step 2 building the array
let products = [{
    sku: "sku-1001",
    name: "Hammer",
    category: "Tools",
    price: 19.99,
    inventory: 25,
},
{
    sku: "sku-1002",
    name: "Bread",
    category: "Grocery",
    price: 2.99,
    inventory: 120,
},
{
    sku: "sku-1003",
    name: "Computer",
    category: "Electronics",
    price: 699.99,
    inventory: 15,
},
{
    sku: "sku-1004",
    name: "Hose",
    category: "Household",
    price: 29.99,
    inventory: 20,
},
{
    sku: "sku-1005",
    name: "Shirt",
    category: "Apparel",
    price: 12.99,
    inventory: 10,
},
]
// Step 3 category discounts with switch

for(let product of products){
    let discount =0

switch(product.category){
    case "Electronics":
        discount = 0.20
    break
    case "Apparel":
        discount = 0.15
        break
    case "Grocery":
    case "Household":
        discount = 0.10
        break
    default:
        discount = 0;
}
let promoPrice = product.price - (product.price * discount);
product.promoPrice = promoPrice.toFixed(2);

}

console.log(products)

// Step 4 customer type adjustment

let customerType = ["Regular", "Student", "Senior"]

if (customerType == "Student"){
    products.price * (.95)
} else if(customerType == "Senior"){
    products.price * (.93)
} else{
    products.price * 1
}





// Task 1: Implement Conditional Statement to Check if a User is Logged In

let isLoggedIn = false; 


// Task 2: Use a Loop to Display the List of Available Products and Add Functionality to Add Products to the Cart
const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 199.99 },
    { id: 4, name: 'Monitor', price: 299.99 },
];

const cart = [];

function displayProducts() {
    console.log("Available Products:");
    for (let i = 0; i < products.length; i++) {
        console.log(`${products[i].id}. ${products[i].name} - $${products[i].price}`);
    }
}

function addToCart(product) {
    if (isLoggedIn) {
        cart.push(product);
        console.log(`${product.name} has been added to your cart`);
    } else {
        console.log("You must be logged in to add items to your cart");
    }
}

function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        addToCart(product);
    } else {
        console.log("Product not found");
    }
}

// Task 3: Calculate the Total Cost of the Items in the Cart and Display It to the User

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    console.log(`Total cost of items in your cart: $${total.toFixed(2)}`);
}

// Display products to the user
displayProducts();

// Simulate user actions
isLoggedIn = true;  // Simulating a user logging in
addProductToCart(1);
addProductToCart(3);

// Calculate and display the total cost
calculateTotal();

//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------Data Setup--------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//Create the Menu Array  
//item object with these properties :  
// id — unique number | name — item name | category — Food / Drink / Dessert | price — number in NIS | available — true or false
const menu = [
    {
        id: 1,
        name: "Burger",
        category: "Food",
        price: 57,
        available: true
    },
    {
        id: 2,
        name: "Pasta",
        category: "Food",
        price: 45,
        available: false
    },
    {
        id: 3,
        name: "Pizza",
        category: "Food",
        price: 60,
        available: true
    },
    {
        id: 4,
        name: "Coca Cola",
        category: "Drink",
        price: 10,
        available: false
    },
    {
        id: 5,
        name: "Orange Juice",
        category: "Drink",
        price: 18,
        available: true
    },
    {
        id: 6,
        name: "Coffee",
        category: "Drink",
        price: 14,
        available: true
    },
    {
        id: 7,
        name: "Ice Cream",
        category: "Dessert",
        price: 22,
        available: true
    },
    {
        id: 8,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 29,
        available: true
    },
    {
        id: 9,
        name: "Treliche Cake",
        category: "Dessert",
        price: 35,
        available: true
    },
    {
        id: 10,
        name: "Cheesecake",
        category: "Dessert",
        price: 25,
        available: false
    },
    {
        id: 11,
        name: "Salad",
        category: "Food",
        price: 45,
        available: true
    },
    {
        id: 12,
        name: "Milkshake",
        category: "Drink",
        price: 24,
        available: true
    }
];
console.log(menu);
//Create a Customer Object  
//Create an object called customer with:  
// name — customer's name 
// budget — amount of money in NIS (example: 120) 
//isStudent — true or false 
const customer = {
  name: "Arkan",
  budget: 250,
  isStudent: true
};
console.log(customer);
//Create an Order Array  
//Create an array called order that contains item IDs from the menu.  
const orders = [1, 4, 9, 11];
//--------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------Menu Functions------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//Create a function that prints all menu items in a clear format.
//3 - Orange Juice - Drink - 12 NIS - Not Available 
function displayMenu(){
    menu.forEach((item)=>{
        let isAvailable;
        if(item.available){
            isAvailable = "Available";
        } else {
            isAvailable = "Not Available";
        }
        console.log(`${item.id} - ${item.name} - ${item.category} - ${item.price} NIS - ${isAvailable}`);
    });
}
displayMenu();
//Create a function that returns only the items where available is true.  
//Requirement: Use filter(). 
function getAvailableItems(){
    const availableItem =  menu.filter((item)=>{
        return item.available === true;
    });
    return availableItem;
}
console.log(getAvailableItems());
//Create a function that searches the menu and returns the item matching the given id. If no item is 
//found, return a message: Item not found.  
//Requirement: Use find(). 
function findItemById(id){
    //// Search inside the menu
    const foundItem = menu.find((item)=>{
        return item.id === id;
    });
    if (foundItem){
        return foundItem;
    } else {
        return "Item not found"
    }
}
console.log(findItemById(7));
console.log(findItemById(15));
//Convert the order array (list of IDs) into an array of full item objects from the menu. 
// Input:  const order = [1, 3, 5];  
// Output:  
// [burgerObject, colaObject, iceCreamObject] 
//Requirement: Use map() and find().
const order = [1, 3, 5];// Array of item IDs
function getOrderItems(){
    //// Loop through each ID
    return order.map((id)=>{
        // Search inside the menu
        return menu.find((item)=>{
            return item.id === id;
        });
    });
}
console.log(getOrderItems());
//Check two things for every item in the order: 
//✓ The item exists in the menu 
//✓ The item is available (available === true)
function validateOrder() {
    const results = order.map(function(id) {
        let foundItem = menu.find(function(item) {
            return item.id === id;
        });
        if (!foundItem) {
            console.log("This item does not exist.");
            return false;
        }
        if (!foundItem.available) {
            console.log("Sorry, this item is currently not available.");
            return false;
        }
        return true;
    });
    //     return !results.includes(false);
    return results.every(result => result === true);
}
console.log(validateOrder());
//Function: calculateTotal()  
//Calculate the total price of all ordered items.  
//Requirement: Use reduce(). 
function calculateTotal(){
    //using reduce to calculate a one final value : total
    let total = order.reduce((sum, id)=>{
    let foundItem = menu.find((item)=>{
      return item.id === id;
    });
    //Stores the total price into sum
    // Adds price to total price => sum
    console.log(`${foundItem.name}: ${foundItem.price} NIS`);
    return sum + foundItem.price;
  }, 0);
  console.log(`Total: ${total} NIS`);
  return total;
}
calculateTotal();
//Function: applyDiscount()  
//Apply discount rules to the total. Use only the biggest applicable discount:  
//✓ Customer is a student → 10% discount 
//✓ Total is more than 100 NIS → 15% discount 
//✓ Total is more than 150 NIS → 20% discount 
//✓ No rule applies → no discount
//the function should return an object with:  
//{  originalTotal: 120,  discountPercentage: 15,  discountAmount: 18,  finalTotal: 102,  } 
function applyDiscount(total, isStudent) {
    let discountPercentage = 0;
    if (total > 150) {
        discountPercentage = 20;
    } else if (total > 100) {
        discountPercentage = 15;
    } else if (isStudent) {
        discountPercentage = 10;
    }
    const discountAmount = total * discountPercentage / 100;
    const finalTotal = total - discountAmount;
    return {
        originalTotal: total,
        discountPercentage: discountPercentage,
        discountAmount: discountAmount,
        finalTotal: finalTotal
    };
}
console.log(applyDiscount(140, false));
console.log(applyDiscount(90, true));
console.log(applyDiscount(190, true));
//Function: canCustomerPay()  
//Check if the customer's budget covers the final total.  
//✓ If customer has enough money → return true 
//✓ If not → return false 
function canCustomerPay(budget, finalTotal) {
    return budget >= finalTotal;
}
//Function: printReceipt() 
//Print a complete receipt to the console. The receipt must include:  
//✓ Restaurant name 
//✓ Customer name 
//✓ Ordered items with prices 
//✓ Original total 
//✓ Discount percentage 
//✓ Discount amount 
//✓ Final total 
//✓ Customer budget 
//✓ Payment status  
//Expected output:  
//========== RECEIPT ==========  
//Restaurant: JavaScript Burger House  
//Customer: Ahmad  
//Items:  - Burger: 35 NIS  - Cola: 8 NIS  - Ice Cream: 15 NIS  
//Original Total: 58 NIS  
//Discount: 10%  
//Discount Amount: 5.8 NIS  
//Final Total: 52.2 NIS  
//Customer Budget: 100 NIS  
//Payment Status: Paid Successfully  
//============================= 
//Note: If the customer cannot pay, the Payment Status should be: Not Enough Money
function printReceipt(customerName, order, discountInfo, budget) {

    console.log("========== RECEIPT ==========");
    console.log("Restaurant: JavaScript Burger House");
    console.log("Customer: " + customerName);
    console.log("Items:");

    order.forEach(function(id) {
        const item = menu.find(item => item.id === id);
        console.log("- " + item.name + ": " + item.price + " NIS");
    });

    console.log("Original Total: " + discountInfo.originalTotal + " NIS");
    console.log("Discount: " + discountInfo.discountPercentage + "%");
    console.log("Discount Amount: " + discountInfo.discountAmount + " NIS");
    console.log("Final Total: " + discountInfo.finalTotal + " NIS");
    console.log("Customer Budget: " + budget + " NIS");

    if (budget >= discountInfo.finalTotal) {
        console.log("Payment Status: Paid Successfully");
    } else {
        console.log("Payment Status: Not Enough Money");
    }

    console.log("=============================");
}
const myOrder = [1, 5, 7];
const discountInfo = {
    originalTotal: 97,
    discountPercentage: 10,
    discountAmount: 9.7,
    finalTotal: 87.3
};
printReceipt("Arkan", myOrder, discountInfo, 100);
//At the end of your file, connect all functions together in this order: 
//Step  Action 
//1  Display the full menu 
//2  Display only available items 
//3  Convert order IDs into full item objects 
//4  Validate the order 
//5a  If valid: calculate total → apply discount → check budget → print receipt 
//5b  If invalid: stop the order and print a clear error message
// 1. Display full menu
displayMenu();
// 2. Display available items
console.log(getAvailableItems());
// 3. Convert order IDs to full objects
const orderedItems = getOrderItems();
// 4. Validate order
if (validateOrder()) {
    // 5a. Calculate total
    const total = calculateTotal();
    // Apply discount
    const discountInfo = applyDiscount(total, customer.isStudent);
    // Check budget
    const canPay = canCustomerPay(
        customer.budget,
        discountInfo.finalTotal
    );
    // Print receipt
    printReceipt(
        customer.name,
        order,
        discountInfo,
        customer.budget
    );
} else {
    // 5b. Invalid order
    console.log("Order failed. Please check unavailable or invalid items.");
}
//Create a function called countItemsByCategory() that counts how many ordered items belong to 
//each category.  
//Requirement: Use reduce(). 
// Expected output:  
//{  
//Food: 2,  
//Drink: 1,  
//Dessert: 1  
//} 
function countItemsByCategory() {
    return order.reduce(function(counts, id) {

        const item = menu.find(function(item) {
            return item.id === id;
        });
        counts[item.category] = (counts[item.category] || 0) + 1;
        return counts;
    }, {});
}
console.log(countItemsByCategory());
//Create a function called getMostExpensiveItem() that returns the most expensive item in the 
//customer's order.  
// Expected output:  
//Most expensive item: Pizza - 50 NIS 
function getMostExpensiveItem() {
    const items = getOrderItems();

    return items.reduce((mostExpensive, item) =>
        item.price > mostExpensive.price ? item : mostExpensive
    );
}
const expensiveItem = getMostExpensiveItem();
console.log(
    `Most expensive item: ${expensiveItem.name} - ${expensiveItem.price} NIS`
);
//Change the order structure to include quantities, then update your total calculation:  
// New order structure:  
//const order = [  
//{ id: 1, quantity: 2 },  
//{ id: 3, quantity: 1 },  
//{ id: 5, quantity: 3 },  
//];  
// Expected total calculation:  
//Burger x2 = 70  
//Cola x1 = 8 
//Ice Cream x3 = 45  
//Total = 123
const order1 = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
    { id: 5, quantity: 3 }
];
function newCalculateTotal() {
    const total = order1.reduce((sum, orderItem) => {
        const item = menu.find(item => item.id === orderItem.id);
        const itemTotal = item.price * orderItem.quantity;
        console.log(
            `${item.name} x${orderItem.quantity} = ${itemTotal} NIS`
        );
        return sum + itemTotal;
    }, 0);
    console.log(`Total = ${total} NIS`);
    return total;
}
newCalculateTotal();
//Add a variable called orderStatus and update it based on the result:  
//✓ Order invalid → Rejected 
//✓ Order valid, customer cannot pay → Rejected 
//✓ Order valid, customer can pay → Paid 
//let orderStatus = "Pending";  
// Update to one of:  
//"Pending" | "Approved" | "Rejected" | "Paid"
const newMenu = [
    { id: 1, name: "Burger", price: 25 },
    { id: 2, name: "Pizza", price: 40 },
    { id: 3, name: "Salad", price: 20 },
    { id: 4, name: "Pasta", price: 35 },
    { id: 5, name: "Sandwich", price: 15 }
];
const newOrder = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
    { id: 5, quantity: 3 }
];
const customerBudget = 100;
let orderStatus = "Pending";
function UpdatedCalculateTotal() {
    const isValidOrder = newOrder.every(orderItem => 
        newMenu.find(item => item.id === orderItem.id)
    );
    if (!isValidOrder) {
        orderStatus = "Rejected";
        console.log("Order invalid → Rejected");
        return 0;
    }
    const total = order1.reduce((sum, orderItem) => {
        const item = newMenu.find(item => item.id === orderItem.id);
        const itemTotal = item.price * orderItem.quantity;
        console.log(`${item.name} x${orderItem.quantity} = ${itemTotal} NIS`);
        return sum + itemTotal;
    }, 0);
    console.log(`Total = ${total} NIS`);    
    if (total > customerBudget) {
        orderStatus = "Rejected";
        console.log("Order valid, customer cannot pay → Rejected");
    } else {
        orderStatus = "Paid";
        console.log("Order valid, customer can pay → Paid");
    }
    console.log(`Order Status: ${orderStatus}`);
    return total;
}
UpdatedCalculateTotal();
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
    //I can use order.map(function(id)...}
    for(let i = 0; i < order.length; i++){
        let foundItem = menu.find(function(item){
            return item.id === order[i];
        });
    // If item doesn't exist
    if(!foundItem){
        console.log("This item does not exist.");
        return false;        
    }
    // If item exists but unavailable
    if (!foundItem.available){
        console.log("Sorry, this item is currently not available.");
        return false;
    }
    }
    return true;// Return true if all valid
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

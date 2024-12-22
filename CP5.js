// Create an empty array to hold grocery items
let groceryStack = [];

// Function to check if the stack is empty and return the top value
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty.");
        return null; // Return null if the stack is empty
    } else {
        console.log("Top item:", groceryStack[groceryStack.length - 1]);
        return groceryStack[groceryStack.length - 1]; // Return the top item
    }
}

// Function to add an item to the stack
function push(item) {
    if (groceryStack.length < 5) { // Check if the stack has space for more items
        groceryStack.push(item); // Add the item to the top of the stack
        console.log(`Pushed: ${item}`);
        peek(); // Call peek to show the top item
        console.log("Current Stack:", groceryStack);
    } else {
        console.log("Stack is full. Cannot add more items.");
    }
}

// Function to remove the last added item from the stack
function pop() {
    if (peek() !== null) { // Check if the stack is not empty
        const removedItem = groceryStack.pop(); // Remove the last item
        console.log(`Popped: ${removedItem}`);
        peek(); // Call peek to show the new top item
        console.log("Current Stack:", groceryStack);
    }
}

// Example usage
push("Apples");
push("Bananas");
push("Carrots");
push("Dairy");
push("Eggs");
push("Flour"); // This should indicate that the stack is full

pop(); // Remove the last item
pop(); // Remove another item
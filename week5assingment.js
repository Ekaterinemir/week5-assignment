
//There are two classes in this code: GeorgianRestaurant class and MenuApp class. The 
//GeorgianRestaurant class handles the adding, deleting and viewing of dishes using an array - this.dishes.

class GeorgianRestaurant{
  constructor() {
    this.dishes = [];
  }

  addDish(dish) {
    this.dishes.push(dish);
    console.log(`Dish '${dish}' has been added to the restaurant's menu.`);
  }

  viewMenu() {
    if (this.dishes.length === 0) {
      console.log("The restaurant's menu is currently empty");
    } else {
      console.log("Menu Dishes:");
      this.dishes.forEach((dish) => {
        console.log(`- ${dish}`);
      });
    }
  }

  deleteDish(dish) {
    const index = this.dishes.indexOf(dish);
    if (index !== -1) {
      this.dishes.splice(index, 1);
      console.log(`Dish '${dish}' has been removed from the restaurant's menu.`);
    } else {
      console.log(`Dish '${dish}' is not available in the restaurant's menu.`);
    }
  }
}

// The MenuApp class runs the application and provides a menu-driven interface. It creates an instance of 
//GeorgianRestaurant and provides a run while loop where the user can choose menu options using prompt().

class MenuApp {
  constructor() {
    this.restaurant = new GeorgianRestaurant();
  }

  run() {
    while (true) {
      console.log("\nMenu Options:");
      console.log("1. Add a new dish");
      console.log("2. View the restaurant's menu");
      console.log("3. Delete a dish from the menu");
      console.log("4. Exit the program");

      const choice = prompt("Enter your choice (1-4):");

      if (choice === "1") {
        const dish = prompt("Enter the name of the dish:");
        this.restaurant.addDish(dish);
      } else if (choice === "2") {
        this.restaurant.viewMenu();
      } else if (choice === "3") {
        const dish = prompt("Enter the name of the dish to remove:");
        this.restaurant.deleteDish(dish);
      } else if (choice === "4") {
        console.log("Exiting the program...");
        break;
      } else {
        console.log("Invalid choice. Please try again.");
      }
    }
  }
}
const restaurant = new GeorgianRestaurant();
restaurant.addDish("khachapuri");
restaurant.addDish("Khinkali");
restaurant.viewMenu();
const app = new MenuApp();
app.run();
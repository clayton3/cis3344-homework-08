function foodListContent() {

    //Initial Content
    var content = `
      <h2>This is a Food List page!</h2>
      <p>
        This page contains a demo of object lists for my food page
      </p>
    `;

    //Creates initial element
    var ele = document.createElement("div");
    ele.classList.add("foodList");
    ele.innerHTML = content;

    //Creates container for the object list
    var foodListContainer = document.createElement("div")
    ele.appendChild(foodListContainer);

    foodList1 = MakeFoodList({
        foodType: "Italian",
        recipes: [MakeFood({ name: "Pasta Carbonara", image: "pics/pasta-carbonara.jpg", rating: 5, qty: 4, list: [" Eggs", " Pasta", " Guanciale", " Peccorino"] }),
        MakeFood({ name: "Pizza", image: "pics/pizza.jpg", rating: 9, qty: 3, list: [" Cheese", " Dough", " Sauce"] })]
    });
    foodListContainer.appendChild(foodList1);

    foodList2 = MakeFoodList({
        foodType: "Indian",
        recipes: [MakeFood({ name: "Tofu Masala", image: "pics/tofu-masala.jpg", rating: 7, qty: 3, list: [" Curry", " Tofu", " Rice"] }),
        MakeFood({ name: "Spinach Chaat", image: "pics/spinach-chaat.jpg", rating: 9, qty: 2, list: [" Spinach", " Batter"] })]
    });
    foodListContainer.appendChild(foodList2);

    foodList3 = MakeFoodList({});
    foodListContainer.appendChild(foodList3);

    return ele;
}
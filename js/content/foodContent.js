function foodContent() {
    //Content generator for Employees
    var content = ` 
      <h2>Some Recipes!</h2>
      <p>
        Here are some really awesome recipes. 
      </p>
    `;

    var ele = document.createElement("div");
    ele.classList.add("food");
    ele.innerHTML = content;

    var foodContainer = document.createElement("div");
    ele.appendChild(foodContainer);

    food1 = MakeFood({ name: "Pizza", image: "pics/pizza.jpg", rating: 9, qty: 3, list: [" Cheese", " Dough", " Sauce"] });
    foodContainer.appendChild(food1);

    food2 = MakeFood({ name: "Tofu Masala", image: "pics/tofu-masala.jpg", rating: 7, qty: 3, list: [" Curry", " Tofu", " Rice"] });
    foodContainer.appendChild(food2);

    food3 = MakeFood({});
    foodContainer.appendChild(food3);
    
    return ele;
}
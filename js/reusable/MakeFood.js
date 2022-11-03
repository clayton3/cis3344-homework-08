function MakeFood(params) {
    if (!params)
        throw "Make: Parameters are required to make this food object!";

    var foodObj = document.createElement("div");
    foodObj.classList.add("food");

    //Declares variables foodName, foodList, foodQty, image, rating
    var foodName = params.name || "Unnamed Food";
    var image = params.image || "pics/unknown.jpg";
    var rating = params.rating || "N/A";
    var foodQty = params.qty || 0;
    var foodList = params.list || ["N/A"];

    var foodInfo = document.createElement("div");
    foodObj.appendChild(foodInfo);

    var display = function () {
        foodInfo.innerHTML = "Recipe name: " + foodName + "</br>Rating: " + rating + "</br>Quantity: " + foodQty + "</br>Ingredients: " + foodList;
    };

    foodObj.setName = function (newName) {
        foodName = newName;

        display();
    };

    foodObj.changeIngredients = function (ingredient, checkChange) {
        if (checkChange) {
            foodList.push(" " + ingredient);
            if (foodList[0] == "N/A")
                foodList.shift();
        } else {
            var x = foodList.length - 1;
            for (let i = 0; i < foodList.length; i++)
                if (foodList[i].trim() == ingredient.trim())
                    x = i;

            if (x == 0)
                foodList.shift();
            else
                foodList.splice(x, x);

            if (foodList[0] == "N/A")
                foodList.shift();
        }
            

        foodQty = foodList.length;

        display();
    };

    //Image
    var foodImage = document.createElement("img");
    foodImage.src = image;
    foodObj.append(foodImage);

    foodObj.appendChild(document.createElement("br"));

    //Button to change the name
    var nameBtn = document.createElement("button");
    nameBtn.innerHTML = "Change recipe name";
    var nameInput = document.createElement("input");

    foodObj.append(nameInput);
    foodObj.appendChild(document.createElement("br"));
    foodObj.append(nameBtn);

    nameBtn.onclick = function () {
        foodObj.setName(nameInput.value);
    };

    foodObj.appendChild(document.createElement("br"));
    foodObj.appendChild(document.createElement("br"));

    //Changing ingredients list
    var ingredientInput = document.createElement("input");

    var ingredientAddBtn = document.createElement("button");
    ingredientAddBtn.innerHTML = "Add Ingredient";
    var ingredientRemoveBtn = document.createElement("button");
    ingredientRemoveBtn.innerHTML = "Remove Ingredient";

    ingredientAddBtn.onclick = function () {
        foodObj.changeIngredients(ingredientInput.value, true);
    }

    ingredientRemoveBtn.onclick = function () {
        foodObj.changeIngredients(ingredientInput.value, false);
    }

    foodObj.appendChild(ingredientInput);
    foodObj.appendChild(document.createElement("br"));
    foodObj.appendChild(ingredientAddBtn);
    foodObj.appendChild(ingredientRemoveBtn);

    display();
    return foodObj;
}
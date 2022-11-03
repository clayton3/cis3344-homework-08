function MakeFoodList(params) {
    //Checks if parameters are present
    if (!params)
        throw "Parameters are required for this function to operate";

    //Initializes the given parameters
    var foodType = params.foodType || "No Food Type Selected";
    var foodList = params.recipes || [MakeFood({})];

    //Entry Point
    var container = document.createElement("div");
    container.classList.add("foodList");

    //Denotes what type of food is being displayed
    var extension = " [-]";
    var foodTypeTitle = document.createElement("h2");
    foodTypeTitle.innerHTML = foodType + extension;
    container.appendChild(foodTypeTitle);

    //Loops through the given objects
    var recipeContainer = document.createElement("div");
    for (var i = 0; i < foodList.length; i++)
        recipeContainer.appendChild(foodList[i]);
    container.appendChild(recipeContainer);

    var listStatus = false;
    foodTypeTitle.onclick = function () {
        if (listStatus) {
            listStatus = false;
            extension = " [-]";
        } else {
            listStatus = true;
            extension = " [+]";
        }

        foodTypeTitle.innerHTML = foodType + extension;
        recipeContainer.hidden = listStatus;
    };

    return container;
}
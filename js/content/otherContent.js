function otherContent(){
    const myDiv = document.createElement("div");

    ajax("json/italianFood.json", processFoodData, myDiv);
    function processFoodData(foodList) {
        const newFoodList = []; // empty array
        // modify properties (image and price) of the array of objects so it will look
        // better on the page.
        for (let i = 0; i < foodList.length; i++) {
            newFoodList[i] = {};

            newFoodList[i].Image = SortableTableUtils.makeImage(foodList[i].pic, "5rem");
            newFoodList[i].Name = SortableTableUtils.makeText(foodList[i].name);

            const ingredientArr = foodList[i].ingredients;
            let ingredients = "";
            for(let j = 0; j < ingredientArr.length; j++) {
                if (j + 1 < ingredientArr.length)
                    ingredients += ingredientArr[j] + ", ";
                else
                    ingredients += ingredientArr[j];
            }
            console.log(ingredients);
            newFoodList[i].Ingredients = SortableTableUtils.makeText(ingredients);

            //Prep
            newFoodList[i].PrepTime = SortableTableUtils.makeNumber(foodList[i].prepTime, false);

            //Cook
            newFoodList[i].CookTime = SortableTableUtils.makeNumber(foodList[i].cookTime, false);

            //Author
            newFoodList[i].Author = SortableTableUtils.makeText(foodList[i].author);

            //Views
            newFoodList[i].Views = SortableTableUtils.makeNumber(foodList[i].views, false);

            newFoodList[i].Rating = SortableTableUtils.makeNumber(foodList[i].rating, false);
        }
        myDiv.append(MakeTable("Italian Food", newFoodList, "Rating", "icons/sortUpDown16.png"));
    }

    const ele = document.createElement("div");
    ele.appendChild(myDiv);

    return ele;
}
"use strict";

function editListContent() {

    var container = document.createElement("div");

    var italianFoodListDiv = document.createElement("div");

    ajax("json/italianFood.json", processitalianFoodList, italianFoodListDiv);

    function processitalianFoodList(italianFoodList) {

        // Defining the edit area and how values will be validated.
        var italianFoodInputSpecs = [
            {
                "prompt": "Recipe Name: ",
                "fieldName": "name",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50
            },
            {
                "prompt": "Recipe Image (URL): ",
                "fieldName": "pic",
                "dataType": "string",
                "minLen": 0, // empty string is OK
                "maxLen": 500
            },
            {
                "prompt": "Ingredients: ",
                "fieldName": "ingredients",
                "dataType": "array",
                "minLen": 1
            },
            {
                "prompt": "Prep Time: ",
                "fieldName": "prepTime",
                "dataType": "number",
                "minLen": 1, // means optional
                "maxLen": 3// 10 characters including decimal point
            },
            {
                "prompt": "Cook Time: ",
                "fieldName": "cookTime",
                "dataType": "number",
                "minLen": 1, // means optional
                "maxLen": 3// 10 characters including decimal point
            },
            {
                "prompt": "Author: ",
                "fieldName": "author",
                "dataType": "string",
                "minLen": 0, // means optional
                "maxLen": 50
            },
            {
                "prompt": "Views: ",
                "fieldName": "views",
                "dataType": "integer",
                "minLen": 1, // means optional
            },
            {
                "prompt": "Rating: ",
                "fieldName": "rating",
                "dataType": "number",
                "minLen": 1, // means optional
                "maxLen": 1// 10 characters including decimal point
            }
        ];

        // defining how you want the objects shown in the child elements within the list
        var displayTemplate = "<img src='${obj.pic}'/> <span>${obj.name}</span>";

        italianFoodListDiv.appendChild(MakeInsertEditList("Italian", italianFoodList, italianFoodInputSpecs, displayTemplate));
    }

    var americanFoodListDiv = document.createElement("div");

    ajax("json/americanFood.json", processAmericanFoodList, americanFoodListDiv);

    function processAmericanFoodList(americanFoodList) {

        // Defining the edit area and how values will be validated.
        var americanFoodInputSpecs = [
            {
                "prompt": "Recipe Name: ",
                "fieldName": "name",
                "dataType": "string",
                "minLen": 1, // required field
                "maxLen": 50
            },
            {
                "prompt": "Recipe Image (URL): ",
                "fieldName": "pic",
                "dataType": "string",
                "minLen": 0, // empty string is OK
                "maxLen": 500
            },
            {
                "prompt": "Ingredients: ",
                "fieldName": "ingredients",
                "dataType": "array",
                "minLen": 1
            },
            {
                "prompt": "Prep Time: ",
                "fieldName": "prepTime",
                "dataType": "number",
                "minLen": 1, // means optional
                "maxLen": 3// 10 characters including decimal point
            },
            {
                "prompt": "Cook Time: ",
                "fieldName": "cookTime",
                "dataType": "number",
                "minLen": 1, // means optional
                "maxLen": 3// 10 characters including decimal point
            },
            {
                "prompt": "Author: ",
                "fieldName": "author",
                "dataType": "string",
                "minLen": 0, // means optional
                "maxLen": 50
            },
            {
                "prompt": "Views: ",
                "fieldName": "views",
                "dataType": "integer",
                "minLen": 1, // means optional
            },
            {
                "prompt": "Rating: ",
                "fieldName": "rating",
                "dataType": "number",
                "minLen": 1, // means optional
                "maxLen": 1// 10 characters including decimal point
            }
        ];

        // defining how you want the objects shown in the child elements within the list
        var displayTemplate = "<img src='${obj.pic}'/> <span>${obj.name}</span>";

        americanFoodListDiv.appendChild(MakeInsertEditList("american", americanFoodList, americanFoodInputSpecs, displayTemplate));
    }

    container.appendChild(italianFoodListDiv);
    container.appendChild(americanFoodListDiv);
    return container;
} // userListComponent
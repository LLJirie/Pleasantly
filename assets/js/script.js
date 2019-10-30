//Make a call if user make a search based on coktail name / ingredient 
//to have access to their full database we would need to pay .  What  they have available is for testing and it's quite small 
// I dont think we are going to need a separate call for ingredients and coktail name 
//I tested and if you search main ingredients like the licquor(vodka, wine, tequila, etc) they will give results back. 




$("button").on("click", function drinkSearch(e) {
    e.preventDefault();


    var userInput = $("#drinkname").val();


    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput


    $.ajax({
        url: queryURL,
        method: "GET"


    }).then(function (response) {



        var drink = response.drinks
        drink.forEach(element => {


            var drinkName = $("<h2>").text(element.strDrink);
            console.log(drinkName);
            var drinkImage = $("<img>").attr("src", element.strDrinkThumb);
            // var ingredients = //I dont know how to access these values

            var instructions = $("<p>").text(element.strInstructions);


            $("#resultsDiv").prepend(drinkName, drinkImage, instructions);
            console.log(response)

            /// needs to resize img drinkImage.attr("style", "size:100px")


        });




    })






})

// var numIngredients = $("#numIngredients")
// var ingredientDisplay = $("#indgredientDisplay")
// var ingredientsUsed = []
// var list = $("ul")

// //Build the URL based on input from the user
// function buildQueryURL() {

//     //Get the info from the home page local storage

//     console.log(ingredientsUsed)
//     var mainIngredientStorage = localStorage.getItem("ingredientsUsed")
//     var recipeSearchStorage = localStorage.getItem("recipeSearch");

//     // var dietInput = $("#dietInput").val();
//     // var healthInput = $("#healthInput").val();
//     // var cuisineTypeInput = $("#cuisineTypeInput").val();
//     // var mealTypeInput = $("#mealTypeInput").val();
//     // var caloriesInput = $("#caloriesInput").val().trim();
//     // var timeInput = $("#timeInput").val().trim();
//     // var excludedInput = $("#excludedInput").val().trim();

//     //starting URL for the basic search to api
//     var queryURL = "https://api.edamam.com/search?";

//     var queryParams = {
//         "app_key": "8957d27cc38cf199423e6dda197aacc5",
//         "app_id": "013f9e16",
//     };

//     //Gets the main search weather an ingredient or a recipe
//     if (mainIngredientStorage) {
//         queryParams.q = mainIngredientStorage;
//     } else {
//         queryParams.q = recipeSearchStorage;
//     }

//     // if (dietInput) {
//     //     //Input of what they want for there diet
//     //     queryParams.diet = dietInput;
//     // }
//     // if (healthInput) {
//     //     //Find vegan vegetarian stuff
//     //     queryParams.health = healthInput;
//     // }
//     // if (cuisineTypeInput) {
//     //     //Type of food
//     //     queryParams.cuisineType = cuisineTypeInput;
//     // }
//     // if (mealTypeInput) {
//     //     //breakfast lunch etc...
//     //     queryParams.mealType = mealTypeInput;
//     // }
//     // if (caloriesInput) {
//     //     //Number of max calories in a dish
//     //     queryParams.calories = caloriesInput;
//     // }
//     // if (timeInput) {
//     //     //Max amount of time it will take to make the dish
//     //     queryParams.time = timeInput;
//     // }
//     // if (excludedInput) {
//     //     //exclude any ingredients in the search
//     //     queryParams.excluded = excludedInput;
//     // }

//     //return the newly created url to the AJAX call
//     return queryURL + $.param(queryParams)
// }


// //Stores the first input from the home page based on a recipe search or ingredient search
// $("#buttonRecipe").on("click", function () {

//     //Clear the local storage to set new values
//     localStorage.clear()

//     var recipeSearch = $("#recipeSearch").val().trim();

//     if (recipeSearch) {
//         localStorage.setItem("recipeSearch", recipeSearch)
//     } else {
//         alert("Please enter a recipe or an ingredient to search for")
//     }

//     //Sets the input value to nothing on click

//     $("#recipeSearch").val("")

// })

// $("#buttonMain").on("click", function () {

//     localStorage.clear()

//     var mainIngredient = $("#mainIngredient").val().trim();

//     if (mainIngredient) {
//         localStorage.setItem("mainIngredient", mainIngredient)
//     }

//     $("#mainIngredient").val("")

// })



// $("#addIngredient").on("click", function () {
//     var mainIngredient = $("#mainIngredient").val().trim();
//     if (!mainIngredient) {
//         alert("Please enter something in the text box")
//     }

//     ingredientsUsed.push(mainIngredient)
//     $("#mainIngredient").val("")

//     renderIngredients()
//     localStorage.setItem("ingredientsUsed", ingredientsUsed)

// })

// list.on("click", function (event) {
//     element = event.target

//     if (element.matches("button")) {
//         var index = element.parentElement.getAttribute("data-index");
//         ingredientsUsed.splice(index, 1)
//     }
//     renderIngredients()
// })

// function renderIngredients() {

//     list.text("")
//     for (var i = 0; i < ingredientsUsed.length; i++) {
//         var item = ingredientsUsed[i];

//         var li = document.createElement("li");
//         li.textContent = item;
//         li.setAttribute("data-index", i)
//         var button = document.createElement("button")
//         button.textContent = "remove"


//         li.append(button)
//         list.append(li);
//     }

// }


// $("#search").on("click", function () {

//     customizedURL()
// })

// function initialURL() {
//     $.ajax({
//         url: buildQueryURL(),
//         method: "GET"
//     }).then(response => {

//     })
// }

// function customizedURL() {


//     //makes the first call with the specified requirments
//     $.ajax({
//         url: buildQueryURL(),
//         method: "GET"
//     }).then(response => {
//         console.log(response)

//         var item = response.hits

//         //for each item in the responses array of recipes
//         item.forEach(element => {

//             //Create all the different elements and put them in a div
//             var recipeImage = $("<img>").attr("src", element.recipe.image)
//             var recipeTitle = $("<h3>").text(element.recipe.label)
//             var recipeCalorieCount = $("<p>").text("Calories: " + element.recipe.calories.toFixed(0))

//             //Have to append to a created div
//             var divFoodDisplay = $("<div>").data("site", element.recipe.uri)
//             $("body").append(divFoodDisplay.append(recipeImage, recipeTitle, recipeCalorieCount))


//             //click event for the food display div
//             divFoodDisplay.on("click", function () {

//                 //grab the data-site tag from the element that is clicked on
//                 var siteRedirect = $(this).data("site")

//                 //build a new queryURL for the specific recipe
//                 var queryURL = "https://api.edamam.com/search?";

//                 var queryParams = {
//                     "app_key": "8957d27cc38cf199423e6dda197aacc5",
//                     "app_id": "013f9e16",
//                     "r": siteRedirect
//                 };
//                 var search = queryURL + $.param(queryParams)

//                 //ajax call for the recipe id 
//                 $.ajax({
//                     url: search,
//                     method: "GET"
//                 }).then(function (response) {
//                     console.log(response)
//                 })


//             })


//         });


//     })

// }
// // modal
//  $('.modal').modal();


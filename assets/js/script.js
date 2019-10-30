<<<<<<< HEAD
// var numIngredients = $("#numIngredients")
// var ingredientDisplay = $("#indgredientDisplay")
// var submitRecipe = $("#submitRecipe")
// var submitIngredient = $("#submitIngredient")
// var ingredientsUsed = []
// var list = $("#ingredientList")
// var listDisplay = true;
=======



var numIngredients = $("#numIngredients")
var ingredientDisplay = $("#indgredientDisplay")
var submitRecipe = $("#submitRecipe")
var submitIngredient = $("#submitIngredient")
var ingredientsUsed = []
var list = $("#ingredientList")
var listDisplay = true;
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

// //Build the URL based on input from the user
// function buildQueryURL() {

//     //Get the info from the home page local storage
//     console.log(ingredientsUsed)
//     var mainIngredientStorage = localStorage.getItem("ingredientsUsed")
//     var recipeSearchStorage = localStorage.getItem("recipeSearch");

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

//     //return the newly created url to the AJAX call
//     return queryURL + $.param(queryParams)
// }

function renderRecipes(arrayOfOptions) {
    $("#foodLineupDisplay").empty()

<<<<<<< HEAD
// //Stores the first input from the home page based on a recipe search or ingredient search
// submitRecipe.on("click", function () {

//     //Clear the local storage to set new values
//     localStorage.clear()

//     var recipeSearch = $("#recipeSearch").val().trim();

//     if (recipeSearch) {
//         localStorage.setItem("recipeSearch", recipeSearch)
//         $("#recipeSearch").val("")

//         window.location.href = 'recipe-returns.html';
=======
    arrayOfOptions.forEach(element => {

        var colDiv = $("<div>").data("site", element.recipe.uri)
        colDiv.addClass("col s12 m6 l4")
        colDiv.append(cardDiv)

        //Append most the stuff to this
        var cardImgDiv = $("<div>")
        cardImgDiv.addClass("card-image waves-effect waves-block waves-light")
        cardImgDiv.append(recipeImage)

        var cardDiv = $("<div>")
        cardDiv.addClass("card")
        cardDiv.append(cardImgDiv)

        var cardContentDiv = $("<div>")
        cardContentDiv.addClass("card-content")
        cardContentDiv.css("height", "100px")
        cardDiv.append(cardContentDiv)
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

        var recipeTitle = $("<span>").text(element.recipe.label)
        recipeTitle.addClass("card-title grey-text  activator text-darken-4")
        cardContentDiv.append(recipeTitle)

<<<<<<< HEAD
//     } else {
//         alert("Please enter a recipe or an ingredient to search for")
//     }
=======
        //Create all the different elements and put them in a div
        var recipeImage = $("<img>").attr("src", element.recipe.image)
        recipeImage.addClass("activator")
        recipeImage.css("height", "300px")
        cardImgDiv.append(recipeImage)
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

        var cardRevealDiv = $("<div>")
        cardRevealDiv.addClass("card-reveal")
        cardDiv.append(cardRevealDiv)

<<<<<<< HEAD

=======
        var recipeTitleReveal = $("<span>").text(element.recipe.label)
        recipeTitleReveal.addClass("card-title grey-text text-darken-4")
        cardRevealDiv.append(recipeTitleReveal)

        var rowDiv = $("<div>")
        rowDiv.addClass("row")
        cardRevealDiv.append(rowDiv)
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

        var ingredientColDiv = $("<div>")
        ingredientColDiv.addClass("col s6")
        rowDiv.append(ingredientColDiv)

<<<<<<< HEAD
//     $("button").on("click", function drinkSearch(e) {
//         e.preventDefault();


//         var userInput = $("#drinkname").val();


//         var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput
//         submitIngredient.on("click", function () {
//             var mainIngredient = $("#mainIngredient").val().trim();


//             if (listDisplay) {
//                 var submitButton = $("<button>")
//                 submitButton.text("Search")
//                 $("#appendedContent").append(submitButton)

//                 listDisplay = false
//                 submitButton.on("click", function () {
//                     window.location.href = 'recipe-returns.html';

//                 })

//             }
=======
        var ingredientHeading = $("<h6>").text("Ingredients:")
        ingredientColDiv.append(ingredientHeading)

        var ingredientList = $("<ul>")
        ingredientColDiv.append(ingredientList)

        var ingredientLine = element.recipe.ingredientLines
        ingredientLine.forEach(element => {
            var listItem = $("<li>").text(element)
            ingredientList.append(listItem)
        });

        var timeColDiv = $("<div>")
        ingredientColDiv.addClass("col s6")
        rowDiv.append(timeColDiv)

        var cookTimeInt = parseInt(element.recipe.totalTime)
        if (cookTimeInt === 0) {
            cookTimeInt = "Unknown"
        }
        else {
            cookTimeInt = cookTimeInt + " min"
        }

        var cookTime = $("<p>").text("Cook Time: " + cookTimeInt)
        var calorieCount = parseInt(element.recipe.calories.toFixed(0))
        var numServe = parseInt(element.recipe.yield)
        var numCalories = calorieCount / numServe

        var recipeLink = $("<button>").text("See Full Recipe")
        recipeLink.attr("src", element.recipe.url)

        var caloriesPerServe = $("<p>").text("Calories: " + numCalories.toFixed(0) + "cal/serving")
        timeColDiv.append(cookTime, caloriesPerServe, recipeLink)



        //Have to append to a created div

        $("#foodLineupDisplay").append(colDiv.append(cardDiv))


        //open a new window on click
        recipeLink.on("click", function () {
            window.open($(this).attr("src"))
        })

    });
}
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

//             $.ajax({
//                 url: queryURL,
//                 method: "GET"


<<<<<<< HEAD
//             }).then(function (response) {
=======
        var li = document.createElement("li");
        li.textContent = item;
        li.setAttribute("data-index", i)
        var buttonRemove = document.createElement("button")
        buttonRemove.className = "bttnSubmit waves-effect waves-light btn-small"
        buttonRemove.textContent = "remove"
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

//                 if (!mainIngredient) {
//                     alert("Please enter something in the text box")
//                 } else {

<<<<<<< HEAD
//                     ingredientsUsed.push(mainIngredient)
//                     $("#mainIngredient").val("")
=======
        li.append(buttonRemove)
        list.append(li);
    }
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

//                     renderIngredients()
//                     localStorage.setItem("ingredientsUsed", ingredientsUsed)

<<<<<<< HEAD
//                 }
//             })


//             var drink = response.drinks
//             drink.forEach(element => {


//                 var drinkName = $("<h2>").text(element.strDrink);
//                 console.log(drinkName);
//                 var drinkImage = $("<img>").attr("src", element.strDrinkThumb);
//                 // var ingredients = //I dont know how to access these values

//                 var instructions = $("<p>").text(element.strInstructions);


//                 $("#resultsDiv").prepend(drinkName, drinkImage, instructions);
//                 console.log(response)

//                 /// needs to resize img drinkImage.attr("style", "size:100px")


//             });




//         })



//         function initialURL() {
//             $.ajax({
//                 url: buildQueryURL(),
//                 method: "GET"
//             }).then(response => {
//                 console.log(response)



//             })

//             // var numIngredients = $("#numIngredients")
//             // var ingredientDisplay = $("#indgredientDisplay")
//             // var ingredientsUsed = []
//             // var list = $("ul")

//             // //Build the URL based on input from the user
//             // function buildQueryURL() {
=======
function initialURL() {
    $.ajax({
        url: buildQueryURL(),
        method: "GET"
    }).then(response => {
        var item = response.hits

        renderRecipes(item)
    })

}

function customizedURL() {
    var mainIngredientStorage = localStorage.getItem("ingredientsUsed")
    var recipeSearchStorage = localStorage.getItem("recipeSearch");

    var dietInput = $("#dietInput").val();
    var healthInput = $("#healthInput").val();
    var cuisineTypeInput = $("#cuisineTypeInput").val();
    var mealTypeInput = $("#mealTypeInput").val();
    var caloriesInput = $("#caloriesInput").val().trim();
    var timeInput = $("#timeInput").val().trim();
    var excludedInput = $("#excludedInput").val().trim();

    //starting URL for the basic search to api
    var queryURL = "https://api.edamam.com/search?";

    var queryParams = {
        "app_key": "8957d27cc38cf199423e6dda197aacc5",
        "app_id": "013f9e16",
    };

    //Gets the main search weather an ingredient or a recipe
    if (mainIngredientStorage) {
        queryParams.q = mainIngredientStorage;
    } else {
        queryParams.q = recipeSearchStorage;
    }

    if (dietInput) {
        //Input of what they want for there diet
        queryParams.diet = dietInput;
    }
    if (healthInput) {
        //Find vegan vegetarian stuff
        queryParams.health = healthInput;
    }
    if (cuisineTypeInput) {
        //Type of food
        queryParams.cuisineType = cuisineTypeInput;
    }
    if (mealTypeInput) {
        //breakfast lunch etc...
        queryParams.mealType = mealTypeInput;
    }
    if (caloriesInput) {
        //Number of max calories in a dish
        queryParams.calories = caloriesInput;
    }
    if (timeInput) {
        //Max amount of time it will take to make the dish
        queryParams.time = timeInput;
    }
    if (excludedInput) {
        //exclude any ingredients in the search
        queryParams.excluded = excludedInput;
    }

    //return the newly created url to the AJAX call
    return queryURL + $.param(queryParams)
}
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

//             //     //Get the info from the home page local storage

<<<<<<< HEAD
//             //     console.log(ingredientsUsed)
//             //     var mainIngredientStorage = localStorage.getItem("ingredientsUsed")
//             //     var recipeSearchStorage = localStorage.getItem("recipeSearch");

//             //     // var dietInput = $("#dietInput").val();
//             //     // var healthInput = $("#healthInput").val();
//             //     // var cuisineTypeInput = $("#cuisineTypeInput").val();
//             //     // var mealTypeInput = $("#mealTypeInput").val();
//             //     // var caloriesInput = $("#caloriesInput").val().trim();
//             //     // var timeInput = $("#timeInput").val().trim();
//             //     // var excludedInput = $("#excludedInput").val().trim();

//             //     //starting URL for the basic search to api
//             //     var queryURL = "https://api.edamam.com/search?";

//             //     var queryParams = {
//             //         "app_key": "8957d27cc38cf199423e6dda197aacc5",
//             //         "app_id": "013f9e16",
//             //     };

//             //     //Gets the main search weather an ingredient or a recipe
//             //     if (mainIngredientStorage) {
//             //         queryParams.q = mainIngredientStorage;
//             //     } else {
//             //         queryParams.q = recipeSearchStorage;
//             //     }
//             var colDiv = $("<div>").data("site", element.recipe.uri)
//             colDiv.addClass("col m2 l3")
//             colDiv.append(cardDiv)

//             //Append most the stuff to this
//             var cardImgDiv = $("<div>")
//             cardImgDiv.addClass("card-image waves-effect waves-block waves-light")
//             cardImgDiv.append(recipeImage)

//             var cardDiv = $("<div>")
//             cardDiv.addClass("card")
//             cardDiv.append(cardImgDiv)



//             var cardContentDiv = $("<div>")
//             cardContentDiv.addClass("card-content")
//             cardDiv.append(cardContentDiv)

//             var recipeTitle = $("<span>").text(element.recipe.label)
//             recipeTitle.addClass("card-title grey-text  activator text-darken-4")
//             cardContentDiv.append(recipeTitle)

//             //Create all the different elements and put them in a div
//             var recipeImage = $("<img>").attr("src", element.recipe.image)
//             recipeImage.addClass("activator")
//             recipeImage.css("height", "200px")
//             cardImgDiv.append(recipeImage)

//             var cardRevealDiv = $("<div>")
//             cardRevealDiv.addClass("card-reveal")
//             cardDiv.append(cardRevealDiv)

//             var recipeTitleReveal = $("<span>").text(element.recipe.label)
//             recipeTitleReveal.addClass("card-title grey-text text-darken-4")
//             cardRevealDiv.append(recipeTitleReveal)

//             var rowDiv = $("<div>")
//             rowDiv.addClass("row")
//             cardRevealDiv.append(rowDiv)

//             var ingredientColDiv = $("<div>")
//             ingredientColDiv.addClass("col s6")
//             rowDiv.append(ingredientColDiv)

//             var ingredientHeading = $("<h6>").text("Ingredients:")
//             ingredientColDiv.append(ingredientHeading)

//             var ingredientList = $("<ul>")
//             ingredientColDiv.append(ingredientList)

//             var ingredientLine = element.recipe.ingredientLines
//             ingredientLine.forEach(element => {
//                 var listItem = $("<li>").text(element)
//                 ingredientList.append(listItem)
//             });

//             var timeColDiv = $("<div>")
//             ingredientColDiv.addClass("col s6")
//             rowDiv.append(timeColDiv)

//             var cookTimeInt = parseInt(element.recipe.totalTime)
//             if (cookTimeInt === 0) {
//                 cookTimeInt = "Unknown"
//             }
//             else {
//                 cookTimeInt = cookTimeInt + " min"
//             }

//             var cookTime = $("<p>").text("Cook Time: " + cookTimeInt)
//             var calorieCount = parseInt(element.recipe.calories.toFixed(0))
//             var numServe = parseInt(element.recipe.yield)
//             var numCalories = calorieCount / numServe

//             var recipeLink = $("<button>").text("See Full Recipe")
//             recipeLink.attr("src", element.recipe.url)

//             var caloriesPerServe = $("<p>").text("Calories: " + numCalories.toFixed(0) + "cal/serving")
//             timeColDiv.append(cookTime, caloriesPerServe, recipeLink)
=======
//Stores the first input from the home page based on a recipe search or ingredient search
submitRecipe.on("click", function () {

    //Clear the local storage to set new values
    localStorage.clear()

    var recipeSearch = $("#recipeSearch").val().trim();

    if (recipeSearch) {
        localStorage.setItem("recipeSearch", recipeSearch)
        $("#recipeSearch").val("")

        window.location.href = 'recipe-returns.html';


    } else {
        alert("Please enter a recipe or an ingredient to search for")
    }


})

submitIngredient.on("click", function () {
    var mainIngredient = $("#mainIngredient").val().trim();


    if (listDisplay) {
        var submitButton = $("<button>")
        submitButton.addClass("bttnSubmit waves-effect waves-light btn-small")
        submitButton.text("Search")
        $("#appendedContent").append(submitButton)

        listDisplay = false
        submitButton.on("click", function () {
            window.location.href = 'recipe-returns.html';

        })

    }

    if (!mainIngredient) {
        alert("Please enter something in the text box")
    } else {

        ingredientsUsed.push(mainIngredient)
        $("#mainIngredient").val("")

        renderIngredients()
        localStorage.setItem("ingredientsUsed", ingredientsUsed)

    }
})

list.on("click", function (event) {
    element = event.target
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721

    if (element.matches("button")) {
        var index = element.parentElement.getAttribute("data-index");
        ingredientsUsed.splice(index, 1)
        localStorage.setItem("ingredientsUsed", ingredientsUsed)
    }
    renderIngredients()
})


<<<<<<< HEAD
//             //Have to append to a created div

//             $("#foodLineupDisplay").append(colDiv.append(cardDiv))


//             recipeLink.on("click", function () {

//                 var iframe = $("<iframe>")
//                 $(this).attr("src")
//                 iframe.attr("src", $(this).attr("src"))
//                 $("body").append(iframe)


//             })

//             //click event for the food display div
//             // colDiv.on("click", function () {

//             //     //grab the data-site tag from the element that is clicked on
//             //     var siteRedirect = $(this).data("site")

//             //     //build a new queryURL for the specific recipe
//             //     var queryURL = "https://api.edamam.com/search?";

//             //     var queryParams = {
//             //         "app_key": "8957d27cc38cf199423e6dda197aacc5",
//             //         "app_id": "013f9e16",
//             //         "r": siteRedirect
//             //     };
//             //     var search = queryURL + $.param(queryParams)

//             //     //ajax call for the recipe id 
//             //     $.ajax({
//             //         url: search,
//             //         method: "GET"
//             //     }).then(function (response) {
//             //         console.log(response)
//             //     })

//             //     // if (dietInput) {
//             //     //     //Input of what they want for there diet
//             //     //     queryParams.diet = dietInput;
//             //     // }
//             //     // if (healthInput) {
//             //     //     //Find vegan vegetarian stuff
//             //     //     queryParams.health = healthInput;
//             //     // }
//             //     // if (cuisineTypeInput) {
//             //     //     //Type of food
//             //     //     queryParams.cuisineType = cuisineTypeInput;
//             //     // }
//             //     // if (mealTypeInput) {
//             //     //     //breakfast lunch etc...
//             //     //     queryParams.mealType = mealTypeInput;
//             //     // }
//             //     // if (caloriesInput) {
//             //     //     //Number of max calories in a dish
//             //     //     queryParams.calories = caloriesInput;
//             //     // }
//             //     // if (timeInput) {
//             //     //     //Max amount of time it will take to make the dish
//             //     //     queryParams.time = timeInput;
//             //     // }
//             //     // if (excludedInput) {
//             //     //     //exclude any ingredients in the search
//             //     //     queryParams.excluded = excludedInput;
//             //     // }

//             // })


//             // //Stores the first input from the home page based on a recipe search or ingredient search
//             // $("#buttonRecipe").on("click", function () {

//             //     //Clear the local storage to set new values
//             //     localStorage.clear()

//             //     var recipeSearch = $("#recipeSearch").val().trim();

//             //     if (recipeSearch) {
//             //         localStorage.setItem("recipeSearch", recipeSearch)
//             //     } else {
//             //         alert("Please enter a recipe or an ingredient to search for")
//             //     }

//             //     //Sets the input value to nothing on click

//             //     $("#recipeSearch").val("")

//             // })

//             // $("#buttonMain").on("click", function () {

//             //     localStorage.clear()

//             //     var mainIngredient = $("#mainIngredient").val().trim();

//             //     if (mainIngredient) {
//             //         localStorage.setItem("mainIngredient", mainIngredient)
//             //     }

//             //     $("#mainIngredient").val("")

//             // })



//             // $("#addIngredient").on("click", function () {
//             //     var mainIngredient = $("#mainIngredient").val().trim();
//             //     if (!mainIngredient) {
//             //         alert("Please enter something in the text box")
//             //     }

//             //     ingredientsUsed.push(mainIngredient)
//             //     $("#mainIngredient").val("")

//             //     renderIngredients()
//             //     localStorage.setItem("ingredientsUsed", ingredientsUsed)

//             // })

//             // list.on("click", function (event) {
//             //     element = event.target

//             //     if (element.matches("button")) {
//             //         var index = element.parentElement.getAttribute("data-index");
//             //         ingredientsUsed.splice(index, 1)
//             //     }
//             //     renderIngredients()
//             // })

//             // function renderIngredients() {

//             //     list.text("")
//             //     for (var i = 0; i < ingredientsUsed.length; i++) {
//             //         var item = ingredientsUsed[i];

//             //         var li = document.createElement("li");
//             //         li.textContent = item;
//             //         li.setAttribute("data-index", i)
//             //         var button = document.createElement("button")
//             //         button.textContent = "remove"


//             //         li.append(button)
//             //         list.append(li);
//             //     }

//             // }


//             // $("#search").on("click", function () {

//             //     customizedURL()
//             // })

//             // function initialURL() {
//             //     $.ajax({
//             //         url: buildQueryURL(),
//             //         method: "GET"
//             //     }).then(response => {

//             //     })
//             // }

//             // function customizedURL() {


//             //     //makes the first call with the specified requirments
//             //     $.ajax({
//             //         url: buildQueryURL(),
//             //         method: "GET"
//             //     }).then(response => {
//             //         console.log(response)

//             //         var item = response.hits

//             //         //for each item in the responses array of recipes
//             //         item.forEach(element => {

//             //             //Create all the different elements and put them in a div
//             //             var recipeImage = $("<img>").attr("src", element.recipe.image)
//             //             var recipeTitle = $("<h3>").text(element.recipe.label)
//             //             var recipeCalorieCount = $("<p>").text("Calories: " + element.recipe.calories.toFixed(0))

//             //             //Have to append to a created div
//             //             var divFoodDisplay = $("<div>").data("site", element.recipe.uri)
//             //             $("body").append(divFoodDisplay.append(recipeImage, recipeTitle, recipeCalorieCount))


//             //             //click event for the food display div
//             //             divFoodDisplay.on("click", function () {

//             //                 //grab the data-site tag from the element that is clicked on
//             //                 var siteRedirect = $(this).data("site")

//             //                 //build a new queryURL for the specific recipe
//             //                 var queryURL = "https://api.edamam.com/search?";

//             //                 var queryParams = {
//             //                     "app_key": "8957d27cc38cf199423e6dda197aacc5",
//             //                     "app_id": "013f9e16",
//             //                     "r": siteRedirect
//             //                 };
//             //                 var search = queryURL + $.param(queryParams)

//             //                 //ajax call for the recipe id 
//             //                 $.ajax({
//             //                     url: search,
//             //                     method: "GET"
//             //                 }).then(function (response) {
//             //                     console.log(response)
//             //                 })


//             //             })


//             //         });


//             //     })

//             // }
//             // // modal
//             //  $('.modal').modal();
//         }


//         function customizedURL() {


//             //makes the first call with the specified requirments
//             $.ajax({
//                 url: buildQueryURL(),
//                 method: "GET"
//             }).then(response => {
//                 console.log(response)

//                 console.log(ingredientsUsed)
//                 var mainIngredientStorage = localStorage.getItem("ingredientsUsed")
//                 var recipeSearchStorage = localStorage.getItem("recipeSearch");

//                 var dietInput = $("#dietInput").val();
//                 var healthInput = $("#healthInput").val();
//                 var cuisineTypeInput = $("#cuisineTypeInput").val();
//                 var mealTypeInput = $("#mealTypeInput").val();
//                 var caloriesInput = $("#caloriesInput").val().trim();
//                 var timeInput = $("#timeInput").val().trim();
//                 var excludedInput = $("#excludedInput").val().trim();

//                 //starting URL for the basic search to api
//                 var queryURL = "https://api.edamam.com/search?";

//                 var queryParams = {
//                     "app_key": "8957d27cc38cf199423e6dda197aacc5",
//                     "app_id": "013f9e16",
//                 };

//                 //Gets the main search weather an ingredient or a recipe
//                 if (mainIngredientStorage) {
//                     queryParams.q = mainIngredientStorage;
//                 } else {
//                     queryParams.q = recipeSearchStorage;
//                 }

//                 if (dietInput) {
//                     //Input of what they want for there diet
//                     queryParams.diet = dietInput;
//                 }
//                 if (healthInput) {
//                     //Find vegan vegetarian stuff
//                     queryParams.health = healthInput;
//                 }
//                 if (cuisineTypeInput) {
//                     //Type of food
//                     queryParams.cuisineType = cuisineTypeInput;
//                 }
//                 if (mealTypeInput) {
//                     //breakfast lunch etc...
//                     queryParams.mealType = mealTypeInput;
//                 }
//                 if (caloriesInput) {
//                     //Number of max calories in a dish
//                     queryParams.calories = caloriesInput;
//                 }
//                 if (timeInput) {
//                     //Max amount of time it will take to make the dish
//                     queryParams.time = timeInput;
//                 }
//                 if (excludedInput) {
//                     //exclude any ingredients in the search
//                     queryParams.excluded = excludedInput;
//                 }

//                 //return the newly created url to the AJAX call
//                 return queryURL + $.param(queryParams)

//             })
//         }


//         // modal
//         // $('.modal').modal();
=======
$("#filterButton").on("click", function () {

    $.ajax({
        url: customizedURL(),
        method: "GET"
    }).then(response => {
        var item = response.hits

        renderRecipes(item)

    })

})



// modal
// $('.modal').modal();
>>>>>>> 9e210834650648eef97b28e484e07a1688ee4721


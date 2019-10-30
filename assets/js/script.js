


var numIngredients = $("#numIngredients")
var ingredientDisplay = $("#indgredientDisplay")
var submitRecipe = $("#submitRecipe")
var submitIngredient = $("#submitIngredient")
var ingredientsUsed = []
var list = $("#ingredientList")
var listDisplay = true;

//Build the URL based on input from the user
function buildQueryURL() {

    //Get the info from the home page local storage
    console.log(ingredientsUsed)
    var mainIngredientStorage = localStorage.getItem("ingredientsUsed")
    var recipeSearchStorage = localStorage.getItem("recipeSearch");

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

    //return the newly created url to the AJAX call
    return queryURL + $.param(queryParams)
}

function renderRecipes(arrayOfOptions) {
    $("#foodLineupDisplay").empty()

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

        var recipeTitle = $("<span>").text(element.recipe.label)
        recipeTitle.addClass("card-title grey-text  activator text-darken-4")
        cardContentDiv.append(recipeTitle)

        //Create all the different elements and put them in a div
        var recipeImage = $("<img>").attr("src", element.recipe.image)
        recipeImage.addClass("activator")
        recipeImage.css("height", "300px")
        cardImgDiv.append(recipeImage)

        var cardRevealDiv = $("<div>")
        cardRevealDiv.addClass("card-reveal")
        cardDiv.append(cardRevealDiv)

        var recipeTitleReveal = $("<span>").text(element.recipe.label)
        recipeTitleReveal.addClass("card-title grey-text text-darken-4")
        cardRevealDiv.append(recipeTitleReveal)

        var rowDiv = $("<div>")
        rowDiv.addClass("row")
        cardRevealDiv.append(rowDiv)

        var ingredientColDiv = $("<div>")
        ingredientColDiv.addClass("col s6")
        rowDiv.append(ingredientColDiv)

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

function renderIngredients() {

    list.text("")
    for (var i = 0; i < ingredientsUsed.length; i++) {
        var item = ingredientsUsed[i];

        var li = document.createElement("li");
        li.textContent = item;
        li.setAttribute("data-index", i)
        var buttonRemove = document.createElement("button")
        buttonRemove.className = "bttnSubmit waves-effect waves-light btn-small"
        buttonRemove.textContent = "remove"
        // var buttonRemove = $("<a>").text($("<i>").attr("class", "small material-icons"));
        // // var listIcon = $("<i>").attr("class", "small material-icons")
        // listIcon.text("cancel");
        // buttonRemove.text(listIcon);
        // // buttonRemove.className = "bttnSubmit waves-effect waves-light btn-small"
        // // buttonRemove.text('cancel');
        // console.log(buttonRemove);

        // li.prepend(buttonRemove)
        // li.append(buttonRemove);
        list.append(li);
        list.append(buttonRemove);
    }

}

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

    if (element.matches("button")) {
        var index = element.parentElement.getAttribute("data-index");
        ingredientsUsed.splice(index, 1)
        localStorage.setItem("ingredientsUsed", ingredientsUsed)
    }
    renderIngredients()
})


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


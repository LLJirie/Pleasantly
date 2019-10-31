var numIngredients = $("#numIngredients");
var ingredientDisplay = $("#indgredientDisplay");
var submitRecipe = $("#submitRecipe");
var submitIngredient = $("#submitIngredient");
var submitIngredientButton = $("#submitIngredientButton")
var ingredientsUsed = [];
var list = $("#ingredientList");

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
        colDiv.addClass("col s12 m4 12")
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
        cardContentDiv.css({ "height": "70px", "align-content": "middle" })
        cardDiv.append(cardContentDiv)

        var recipeTitle = $("<span>").text(element.recipe.label)
        recipeTitle.addClass("card-title grey-text  activator text-darken-4")
        cardContentDiv.append(recipeTitle)

        //Create all the different elements and put them in a div
        var recipeImage = $("<img>").attr("src", element.recipe.image)
        recipeImage.addClass("activator")
        recipeImage.css("height", "390px")
        cardImgDiv.append(recipeImage)

        var cardRevealDiv = $("<div>")
        cardRevealDiv.addClass("card-reveal reveal")
        cardDiv.append(cardRevealDiv)

        var recipeTitleReveal = $("<span>").text(element.recipe.label)
        recipeTitleReveal.addClass("card-title grey-text text-darken-4")
        cardRevealDiv.append(recipeTitleReveal)

        var seeRecipe = $("<div>")
        seeRecipe.addClass("row see-recipe")
        cardRevealDiv.append(seeRecipe)

        var rowCal = $("<div>")
        rowCal.addClass("row cal-time")
        cardRevealDiv.append(rowCal)



        var rowDiv = $("<div>")
        rowDiv.addClass("row")
        cardRevealDiv.append(rowDiv)

        var ingredientColDiv = $("<div>")
        ingredientColDiv.addClass("col 12")
        rowDiv.append(ingredientColDiv)

        var ingredientHeading = $("<h6>").text("Ingredients:")
        ingredientColDiv.append(ingredientHeading)

        var ingredientList = $("<ul>")
        ingredientList.addClass("ingredientLi")
        ingredientColDiv.append(ingredientList)

        var ingredientLine = element.recipe.ingredientLines
        ingredientLine.forEach(element => {
            var listItem = $("<li>").text(element)
            ingredientList.append(listItem)
        });

        var timeColDiv = $("<div>")
        timeColDiv.addClass("col 6")
        rowCal.append(timeColDiv)

        var calColDiv = $("<div>")
        calColDiv.addClass("col 6")
        rowCal.append(calColDiv)

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

        var recipeLink = $("<button>").text("Full Recipe")
        recipeLink.attr({ "src": element.recipe.url, "id": "fullRecipe", "class": "bttnSubmit waves-effect waves-light btn-small" })

        var caloriesPerServe = $("<p>").text("Calories: " + numCalories.toFixed(0) + "cal/serving")
        timeColDiv.append(cookTime);
        calColDiv.append(caloriesPerServe);
        seeRecipe.append(recipeLink);

        var closeRecipe = $("<i>").attr("class", "close-recipe small material-icons");
        closeRecipe.text("highlight_off");
        cardRevealDiv.append(closeRecipe);


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
        li.textContent = "  " + item.charAt(0).toUpperCase() + item.slice(1);
        li.setAttribute("data-index", i);
        var listIcon = document.createElement("i")
        listIcon.className = "tiny material-icons ingredIcon";
        listIcon.textContent = "cancel";

        list.append(li);
        li.prepend(listIcon);
    }
}

function initialURL() {
    $.ajax({
        url: buildQueryURL(),
        method: "GET"
    }).then(response => {
        var item = response.hits
        renderRecipes(item)

        if (localStorage.getItem("recipeSearch")) {

            $.ajax({
                url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + localStorage.getItem("recipeSearch") + "&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyBzuZVaBsuTjM00D3jSNYjOL4U9kTmkbpo",
                method: "GET"
            }).then(response => {
                console.log(response)
                var videoID = response.items[0].id.videoId
                var youtubeButton = $("<button>")
                youtubeButton.text("Here")
                youtubeButton.attr("src", "https://www.youtube.com/watch?v=" + videoID)
                youtubeButton.addClass("bttnSubmit waves-effect waves-light btn-small")

                var videoTitle = $("<p>").text("Check out a video for our favorite " + localStorage.getItem("recipeSearch") + " Recipe ")
                videoTitle.append(youtubeButton)

                var videoRow = $("#videoRow")
                videoRow.addClass("row")
                videoRow.append(videoTitle)



                youtubeButton.on("click", function () {
                    window.open($(this).attr("src"))
                })

            })
        }
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

    list.css("display", "inline")
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

submitIngredientButton.on("click", function () {
    window.location.href = 'recipe-returns.html';
    console.log("clcik")
})

submitIngredient.on("click", function () {

    list.css("display", "unset")

    localStorage.clear()
    var mainIngredient = $("#mainIngredient").val().trim();

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

    console.log(element);
    if (element.matches("i")) {

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

$(".modal").modal()

var clickListner = true

$('.carousel.carousel-slider').carousel({
    duration: 600,
    indicators: true,
    fullWidth: true
});
var interval = setInterval(function () {
    $('.carousel').carousel('next');
}, 6000);

$(".carousel").on("click", function (event) {

    if (clickListner) {
        clearInterval(interval)
        clickListner = false
    } else {
        $(".carousel").carousel("next")
        interval = setInterval(function () {
            $('.carousel').carousel('next');
        }, 6000);
        clickListner = true;
    }
})

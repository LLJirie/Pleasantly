
//sets variable that will hold the results
var divResults = $("#resultsDiv");


//when user gets to the page and click on search we will make the Ajax call to the  get the results 

$("#bttnDrinkSearch").on("click", function drinkSearch(e) {
    e.preventDefault();

    divResults.empty()


    var userInput = $("#drinkName").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var drinkInstr = response.drinks.instructions;

        //if response it's null a pop up shows up informing the user 
        var drinks = response.drinks;
        if (!drinks) {
            alert("#Opsi");
        }

        drinks.forEach(drink => {

            var drinkImage = $("<img>").attr("src", drink.strDrinkThumb);
            drinkImage.addClass("img-responsive activator");


            var colDiv = $("<div>");
            colDiv.addClass("col s12 m6 l4")
            colDiv.append(cardDiv)

            //Append most the stuff to this
            var cardImgDiv = $("<div>")
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light activator")
            cardImgDiv.append(drinkImage)

            var cardDiv = $("<div>")
            cardDiv.addClass("card")
            cardDiv.append(cardImgDiv)

            var cardContentDiv = $("<div>")
            cardContentDiv.addClass("card-content")
            cardContentDiv.css("height", "70px")
            cardDiv.append(cardContentDiv)

            var drinkTitle = $("<span>").text(drink.strDrink)
            drinkTitle.addClass("card-title grey-text  activator text-darken-4")
            cardContentDiv.append(drinkTitle);

            var cardRevealDiv = $("<div>")
            cardRevealDiv.addClass("card-reveal")
            cardDiv.append(cardRevealDiv)

            var drinkTitleReveal = $("<span>").text(drink.strDrink)
            drinkTitleReveal.addClass("card-title grey-text text-darken-4")
            cardRevealDiv.append(drinkTitleReveal)

            var rowDiv = $("<div>")
            rowDiv.addClass("row")
            cardRevealDiv.append(rowDiv)

            var ingredientColDiv = $("<div>")
            ingredientColDiv.addClass("col s12")
            rowDiv.append(ingredientColDiv)

            var ingredientHeading = $("<h6>").text("Ingredients:")
            ingredientColDiv.append(ingredientHeading);


            for (let i = 1; i < 16; i++) {
                const strIngredient = "strIngredient" + i;
                const strMeasure = "strMeasure" + i;


                if (drink[strIngredient] === null && drink[strMeasure] === null) {
                    drInstructions();
                    return;
                } else if (drink[strIngredient] && drink[strMeasure] === null) {
                    var ingredient = drink[strIngredient];
                    var measurement = "";
                } else if (drink[strIngredient] === null && drink[strMeasure]) {
                    var ingredient = "";
                    var measurement = drink[strMeasure];
                } else if (drink[strIngredient] && drink[strMeasure]) {
                    var measurement = drink[strMeasure];
                    var ingredient = drink[strIngredient];
                } else {
                    console.log("its broken")
                }

                console.log(drink[strIngredient], drink[strMeasure]);


                var ingredientList = $("<ul>");
                ingredientList.addClass("drinkLi")
                ingredientColDiv.append(ingredientList);

                listItemMeasurement = measurement + ingredient;
                var listItem = $("<li>").text(listItemMeasurement);
                ingredientList.append(listItem);

                divResults.append(colDiv.append(cardDiv));

            }

            drInstructions();
            function drInstructions() {
                var instructions = $("<p>").text(drink.strInstructions);
                ingredientColDiv.append(instructions)
                instructions.addClass("col s12")
            }
        })
    })

})






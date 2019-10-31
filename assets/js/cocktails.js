
//sets variable that will hold the results
var divResults = $("#resultsDiv");


//when user gets to the page and click on search we will make the Ajax call to the  get the results 

$("#bttnDrinkSearch").on("click", function drinkSearch(e) {
    e.preventDefault();

    divResults.empty()


    var userInput = $("#drinkname").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        //if response it's null a pop up shows up informing the user 
        var drinks = response.drinks;
        if (!drinks) {

            alert("#Opsi");

        }

        drinks.forEach(drink => {

            var drinkImage = $("<img>").attr("src", drink.strDrinkThumb);
            drinkImage.css("height", "300px");




            var colDiv = $("<div>");
            colDiv.addClass("col s12 m6 l4")
            colDiv.append(cardDiv)

            //Append most the stuff to this
            var cardImgDiv = $("<div>")
            cardImgDiv.addClass("card-image waves-effect waves-block waves-light")
            cardImgDiv.append(drinkImage)

            var cardDiv = $("<div>")
            cardDiv.addClass("card")
            cardDiv.append(cardImgDiv)

            var cardContentDiv = $("<div>")
            cardContentDiv.addClass("card-content")
            cardContentDiv.css("height", "100px")
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
            ingredientColDiv.addClass("col s6")
            rowDiv.append(ingredientColDiv)

            var ingredientHeading = $("<h6>").text("Ingredients:")
            ingredientColDiv.append(ingredientHeading);







            for (let i = 1; i < 16; i++) {
                const strIngredient = "strIngredient" + i;
                const strMeasure = "strMeasure" + i;


                if (drink[strIngredient]) {
                    var ingredient = drink[strIngredient];
                    var measurement = drink[strMeasure];
                    console.log(drink[strIngredient], drink[strMeasure]);


                    var ingredientList = $("<ul>");
                    ingredientColDiv.append(ingredientList);

                    var listItem = $("<li>").text(drink[strIngredient])
                    ingredientList.append(listItem);

                    var itemMeas = $("<li>").text(drink[strMeasure]);
                    ingredientList.append(itemMeas);



                    divResults.append(colDiv.append(cardDiv))


                }



            }

            var instructions = $("<p>").text(drink.strInstructions);
            ingredientList.append(instructions)
            instructions.addClass("col s6")









        })








    })

})
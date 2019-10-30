
//when user gets to the page and click on search we will make the Ajax call to the  get the results 


$("#bttnDrinkSearch").on("click", function drinkSearch(e) {
    e.preventDefault();

    $("#resultsDiv").empty()


    var userInput = $("#drinkname").val();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + userInput
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        //if resonse it's null a pop up shows up informing the user 
        var drinks = response.drinks;
        if (!drinks) {

            instance.open("#modalIfStatment");



        }



        drinks.forEach(drink => {


            var drinkName = $("<h2>").text(drink.strDrink);
            var drinkImage = $("<img>").attr("src", drink.strDrinkThumb);
            drinkImage.css("height", "250px");
            var instructions = $("<p>").text(drink.strInstructions);
            $("#resultsDiv").append(
                drinkName, drinkImage, instructions
            )
            console.log(drink)

            for (let i = 1; i < 16; i++) {
                const strIngredient = "strIngredient" + i;
                const strMeasure = "strMeasure" + i;


                if (drink[strIngredient]) {
                    var ingredient = drink[strIngredient];
                    var measurement = drink[strMeasure];
                    console.log(drink[strIngredient], drink[strMeasure]);
                    $("#resultsDiv").append(ingredient, measurement);

                }


            };














        })








    })

})
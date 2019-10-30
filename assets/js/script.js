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


            /// needs to resize img drinkImage.attr("style", "size:100px")


        });








    })






})



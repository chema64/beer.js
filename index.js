function beer() {
    beerTotal = 99;
    // var bString1= beerTotal+ " bottles of beer on the wall, "+beerTotal+"bottles of beer.";
    // var bString2= " Take 1 down, pass it around,  "+beerTotal+" bottles of beer on the wall.";
    
    while (beerTotal > 0) {
        // console.log(beerTotal+ " bottles of beer on the wall, "+beerTotal+"bottles of beer." );

        var txt1 = $("<p></p>").text(beerTotal+ " bottles of beer on the wall, "+beerTotal+" bottles of beer.");
        $("#title1").append(txt1);

        beerTotal--;

        var txt2 = $("<p></p>").text(" Take 1 down, pass it around,  "+beerTotal+" bottles of beer on the wall.");
        $("#title1").append(txt2);
        // console.log(" Take 1 down, pass it around,  "+beerTotal+" bottles of beer on the wall.");

        
        
        // console.log("beerTotal "+beerTotal);
        if(beerTotal === 0) {
            var txt3 = $("<p></p>").text("No more bottles of beeer on the wall, no more bottles of beerr. Go to the store and buy some more, 99 bottles of beer on the wall");
       	    $("#title1").append(txt3);
            // console.log("No more bottles of beeer on the wall, no more bottles of beerr. Go to the store and buy some more, 99 bottles of beer on the wall");
        }
    }
}

$("button").click(function() {
    beer();
})
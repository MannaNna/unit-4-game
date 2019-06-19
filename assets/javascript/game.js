// Variables
var targetCristalNumber = 0;
var winCounter =0;
var lossCounter = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var totalCrystals =0;


// Check to see if the document is ready
$(document).ready(function(){
    console.log("ready!");

// Computer randomly generates a number  
    gem1 = Math.floor(Math.random() * 12) + 1;
    console.log("gem1 value: "+ gem1);
    gem2 = Math.floor(Math.random() * 12) + 1;
    console.log("gem2 value: "+ gem2);
    gem3 = Math.floor(Math.random() * 12) + 1;
    console.log("gem3 value: "+ gem3);
    gem4 = Math.floor(Math.random() * 12) + 1;
    console.log("gem4 value: "+ gem4);
    targetCristalNumber = Math.floor(Math.random() * 101) + 19;
    console.log("target number: "+ targetCristalNumber);

// Sets the value to the counters
    $("#winCounter").text(winCounter);
    $("#lossCounter").text(lossCounter);
    $("#totalCrystals").text(totalCrystals);
    $("#targetCrystalsNumber").text(targetCristalNumber);

    $("#gem1").click(function(){
        totalCrystals += gem1;
        checkForWin(); 

    });
    $("#gem2").click(function(){
        totalCrystals += gem2;
        checkForWin();
    });
    $("#gem3").click(function(){
        totalCrystals += gem3;
        checkForWin();
    });
    $("#gem4").click(function(){
        totalCrystals += gem4;
        checkForWin();
    });

});

function checkForWin(){
    //debugger;
 if (totalCrystals == targetCristalNumber){
     winCounter ++;
     totalCrystals = 0;
    targetCristalNumber = Math.floor(Math.random() * 101) + 19;
    $("#targetCrystalsNumber").text(targetCristalNumber);


     $("#winCounter").text(winCounter);
     $("#lossCounter").text(lossCounter);
     $("#totalCrystals").text(totalCrystals);
 }
 else if (totalCrystals > targetCristalNumber){
    lossCounter ++;
    totalCrystals = 0;
    targetCristalNumber = Math.floor(Math.random() * 101) + 19;
    $("#targetCrystalsNumber").text(targetCristalNumber);


    $("#winCounter").text(winCounter);
    $("#lossCounter").text(lossCounter);
    $("#totalCrystals").text(totalCrystals);
} 
else {
    $("#totalCrystals").text(totalCrystals);
}
};
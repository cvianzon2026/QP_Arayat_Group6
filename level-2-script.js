function trackClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("coord").innerHTML = "X,Y:" + x + ", " + y;
}
function clearstuff() {
    document.getElementById("coord").innerHTML = "X,Y:";
}
function differences(event){
var x = event.clientX;
var y = event.clientY;
if( (event.clientX > 628) && (event.clientX < 659 ) && ( event.clientY > 100) && ( event.clientY < 123) ){
    document.getElementById("ufo").innerHTML = "Above the UFO";
    alert("You found a Difference!");
}
else if( (event.clientX > 113) && (event.clientX < 145) && ( event.clientY > 100) && ( event.clientY < 123) ){
    document.getElementById("ufo").innerHTML = "Above the UFO";
    alert("You found a Difference!");
}
else if( (event.clientX > 689) && (event.clientX < 701) && ( event.clientY > 306) && ( event.clientY < 316) ){
    document.getElementById("planet_spot").innerHTML = "Spot on the planet";
    alert("You found a Difference!");
}
else if( (event.clientX > 173) && (event.clientX < 185) && ( event.clientY > 306) && ( event.clientY < 316) ){
    document.getElementById("planet_spot").innerHTML = "Spot on the planet";
    alert("You found a Difference!");
}
else if( (event.clientX > 855) && (event.clientX < 867) && ( event.clientY > 161) && ( event.clientY < 174) ){
    document.getElementById("star").innerHTML = " There is a missing star";
    alert("You found a Difference!");
}
else if( (event.clientX > 338) && (event.clientX < 350) && ( event.clientY > 161) && ( event.clientY < 174) ){
    document.getElementById("star").innerHTML = " There is a missing star";
    alert("You found a Difference!");
}
else if( (event.clientX > 518) && (event.clientX < 534) && ( event.clientY > 308) && ( event.clientY < 323) ){
    document.getElementById("planet").innerHTML = "The colors of the planet";
    alert("You Found a Difference!");
}
else if( (event.clientX > 1031) && (event.clientX < 1050) && ( event.clientY > 308) && ( event.clientY < 323) ){
    document.getElementById("planet").innerHTML = "The colors of the planet";
    alert("You Found a Difference!");
}
else if( (event.clientX > 624) && (event.clientX < 711) && ( event.clientY > 223) && ( event.clientY < 263) ){
    document.getElementById("rocket_line").innerHTML = "The line under the rocket";
    alert("You Found a Difference!");
}
else if( (event.clientX > 107) && (event.clientX < 194) && ( event.clientY > 223) && ( event.clientY < 263) ){
    document.getElementById("rocket_line").innerHTML = "The line under the rocket";
    alert("You Found a Difference!");
}
}

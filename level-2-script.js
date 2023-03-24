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
if( (event.clientX > 661) && (event.clientX < 699) && ( event.clientY > 100) && ( event.clientY < 123) ){
    document.getElementById("ufo").innerHTML = "Above the UFO";
    alert("You found a Difference!");
}
else if( (event.clientX > 113) && (event.clientX < 145) && ( event.clientY > 100) && ( event.clientY < 123) ){
    document.getElementById("ufo").innerHTML = "Above the UFO";
    alert("You found a Difference!");
}
else if( (event.clientX > 728) && (event.clientX < 741) && ( event.clientY > 317) && ( event.clientY < 332) ){
    document.getElementById("planet_spot").innerHTML = "Spot on the planet";
    alert("You found a Difference!");
}
else if( (event.clientX > 178) && (event.clientX < 192) && ( event.clientY > 317) && ( event.clientY < 332) ){
    document.getElementById("planet_spot").innerHTML = "Spot on the planet";
    alert("You found a Difference!");
}
else if( (event.clientX > 907) && (event.clientX < 921) && ( event.clientY > 164) && ( event.clientY < 180) ){
    document.getElementById("star").innerHTML = " There is a missing star";
    alert("You found a Difference!");
}
else if( (event.clientX > 357) && (event.clientX < 373) && ( event.clientY > 164) && ( event.clientY < 180) ){
    document.getElementById("star").innerHTML = " There is a missing star";
    alert("You found a Difference!");
}
else if( (event.clientX > 546) && (event.clientX < 565) && ( event.clientY > 321) && ( event.clientY < 338) ){
    document.getElementById("planet").innerHTML = "The colors of the planet";
    alert("You Found a Difference!");
}
else if( (event.clientX > 1095) && (event.clientX < 1113) && ( event.clientY > 321) && ( event.clientY < 338) ){
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

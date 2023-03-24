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
if( (event.clientX > 209) && (event.clientX < 233) && ( event.clientY > 164) && ( event.clientY < 193) ){
    document.getElementById("hair").innerHTML = "Charlie Brown's hair";
    alert("You found a Difference!");
}
else if( (event.clientX > 748) && (event.clientX < 771) && ( event.clientY > 164) && ( event.clientY < 193) ){
    document.getElementById("hair").innerHTML = "Charlie Brown's hair";
    alert("You found a Difference!");
}
else if( (event.clientX > 244) && (event.clientX < 257) && ( event.clientY > 250) && ( event.clientY < 262) ){
    document.getElementById("hairpin").innerHTML = "The hair accessory";
    alert("You found a Difference!");
}
else if( (event.clientX > 781) && (event.clientX < 794) && ( event.clientY > 250) && ( event.clientY < 262) ){
    document.getElementById("hairpin").innerHTML = "The hair accessory";
    alert("You found a Difference!");
}
else if( (event.clientX > 1008) && (event.clientX < 1019) && ( event.clientY > 189) && ( event.clientY < 201) ){
    document.getElementById("star").innerHTML = "The shining star";
    alert("You found a Difference!");
}
else if( (event.clientX > 461) && (event.clientX < 481) && ( event.clientY > 189) && ( event.clientY < 201) ){
    document.getElementById("star").innerHTML = " The shining star";
    alert("You found a Difference!");
}
else if( (event.clientX > 327) && (event.clientX < 338) && ( event.clientY > 294) && ( event.clientY < 309) ){
    document.getElementById("globe").innerHTML = "The color of the globe";
    alert("You Found a Difference!");
}
else if( (event.clientX > 867) && (event.clientX < 876) && ( event.clientY > 294) && ( event.clientY < 309) ){
    document.getElementById("globe").innerHTML = "The color of the globe";
    alert("You Found a Difference!");
}
else if( (event.clientX > 288) && (event.clientX < 318) && ( event.clientY > 377) && ( event.clientY < 399) ){
    document.getElementById("chick").innerHTML = "Woodstock";
    alert("You Found a Difference!");
}
else if( (event.clientX > 830) && (event.clientX < 863) && ( event.clientY > 377) && ( event.clientY < 399) ){
    document.getElementById("chick").innerHTML = "Woodstock";
    alert("You Found a Difference!");
}
else if( (event.clientX > 460) && (event.clientX < 466) && ( event.clientY > 290) && ( event.clientY < 295) ){
    document.getElementById("patch").innerHTML = "The color of the patch";
    alert("You Found a Difference!");
}
else if( (event.clientX > 997) && (event.clientX < 1004) && ( event.clientY > 290) && ( event.clientY < 295) ){
    document.getElementById("patch").innerHTML = "The color of the patch";
    alert("You Found a Difference!");
}
}

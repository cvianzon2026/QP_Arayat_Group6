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
if( (event.clientX > 604) && (event.clientX < 703) && ( event.clientY > 82) && ( event.clientY < 176) ){
    document.getElementById("halo").innerHTML = "The Earth's Halo";
    alert("You found a Difference!");
}
else if( (event.clientX > 68) && (event.clientX < 167) && ( event.clientY > 82) && ( event.clientY < 176) ){
    document.getElementById("halo").innerHTML = "The Earth's Halo";
    alert("You found a Difference!");
}
else if( (event.clientX > 469) && (event.clientX < 506) && ( event.clientY > 138) && ( event.clientY < 171) ){
    document.getElementById("spacecraft").innerHTML = "The spacecraft";
    alert("You found a Difference!");
}
else if( (event.clientX > 1002) && (event.clientX < 1062) && ( event.clientY > 138) && ( event.clientY < 171) ){
    document.getElementById("spacecraft").innerHTML = "The spacecraft";
    alert("You found a Difference!");
}
else if( (event.clientX > 527) && (event.clientX < 547) && ( event.clientY > 248) && ( event.clientY < 281) ){
    document.getElementById("space-cat").innerHTML = "The space cat";
    alert("You found a Difference!");
}
else if( (event.clientX > 1063) && (event.clientX < 1087) && ( event.clientY > 248) && ( event.clientY < 281) ){
    document.getElementById("space-cat").innerHTML = "The space cat";
    alert("You found a Difference!");
}
else if( (event.clientX > 787) && (event.clientX < 835) && ( event.clientY > 315) && ( event.clientY < 348) ){
    document.getElementById("saturn").innerHTML = "Saturn";
    alert("You Found a Difference!");
}
else if( (event.clientX > 250) && (event.clientX < 302) && ( event.clientY > 315) && ( event.clientY < 348) ){
    document.getElementById("saturn").innerHTML = "Saturn";
    alert("You Found a Difference!");
}
else if( (event.clientX > 245) && (event.clientX < 257) && ( event.clientY > 260) && ( event.clientY < 270) ){
    document.getElementById("space-worm").innerHTML = "The 'space worm'";
    alert("You Found a Difference!");
}
else if( (event.clientX > 776) && (event.clientX < 802) && ( event.clientY > 252) && ( event.clientY < 278) ){
    document.getElementById("space-worm").innerHTML = "The 'space worm'";
    alert("You Found a Difference!");
}
}

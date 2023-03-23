function trackClick(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("coord").innerHTML = "X,Y:" + x + ", " + y;
}
function clearstuff() {
    document.getElementById("coord").innerHTML = "X,Y:";
}
function Pokemon(event){
    var x = event.clientX;
    var y = event.clientY;
    if( (event.clientX > 42) && (event.clientX < 98 ) && ( event.clientY > 283) && ( event.clientY < 341) ){
        document.getElementById("Slurpuff").innerHTML = "Slurpuff has been Found";
        alert("You Found Slurpuff");
    }
    else if( (event.clientX > 696) && (event.clientX < 797 ) && ( event.clientY > 86) && ( event.clientY < 134) ){
        document.getElementById("Togekiss").innerHTML = "Togekiss has been Found";
        alert("You Found Togekiss");
    }
    else if( (event.clientX > 421) && (event.clientX < 464 ) && ( event.clientY > 154) && ( event.clientY < 204) ){
        document.getElementById("Psyduck").innerHTML = " Psyduck has been Found";
        alert("You Found Psyduck");
    }
    else if( (event.clientX > 313) && (event.clientX < 367 ) && ( event.clientY > 147) && ( event.clientY < 213) ){
        document.getElementById("Klefki").innerHTML = "Klefki has been Found";
        alert("You Found Klefki");
    }
}
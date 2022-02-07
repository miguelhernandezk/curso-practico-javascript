/* Functions used for responsive design */

// On movile, this will show or hide the menu, every time the user hit the "menu" button.
function myFunction() {
    var x = document.getElementById("menuNotVisible");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


// The following code will display or hide the menu if the screen is resized
var mobileDevice = true;
start();
window.onresize = start;
function start(){
    console.log("Ejecutando funcion ONRESIZE");
    var x = document.getElementById("menuNotVisible");
    if (window.innerWidth>=600 && mobileDevice == true){
        x.style.display = "block";
        mobileDevice = false;
    }
    else if(window.innerWidth < 600 && mobileDevice == false){
        x.style.display = "none";
        mobileDevice = true;
    }
}

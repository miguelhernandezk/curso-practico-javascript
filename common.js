function myFunction() {
    var x = document.getElementById("menuNotVisible");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

var mobileDevice = true;
start();
window.onresize = start;
function start(){
    console.log("Ejecutando funcion ONRESIZE");
    var x = document.getElementById("menuNotVisible");
    if (window.innerWidth>=600 && mobileDevice == true){
        x.style.display = "block";
        mobileDevice = false;
        console.log("Mobile puesto en falso");
    }
    else if(window.innerWidth < 600 && mobileDevice == false){
        x.style.display = "none";
        mobileDevice = true;
        console.log("Me Movile VerdaDERO");
    }
}

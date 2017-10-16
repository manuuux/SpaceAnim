var x = 1;
var fondo = document.getElementById("fondo");
function rotate(){
  fondo.style.backgroundPosition = x + 'px '+x/2+'px';
  x=x-0.5;
}


/*Se tiene como base el siguiente ejercicio que cambia el color de 
fondo de un elemento de HTML al hacerle click:

function pintar(){
  ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1") ele.addEventListener("click", pintar);
1. Modifica la función para que reciba el elemento clickeado 
de forma de no tener que seleccionarlo nuevamente dentro de la función.
2. Modifica el código anterior para poder pasarle un color como argumento a la función pintar.
El color debe ser verde (green) por defecto, al hacer clic en el párrafo se debe pasar amarillo como color.
*/


function pintar(element, color = 'green'){
    element.style.backgroundColor = color;
  }
  
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
  });
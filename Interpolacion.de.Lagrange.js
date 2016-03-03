//// INTERPOLACIÓN DE LAGRANGE
////
//// @funcion : es la función (texto plano no vale) que queremos evaluar
//// @nodos : un array con los nodos que tenemos para interpolar
//// @x : el punto de la función en donde queremos evaluar

function Lagrange(funcion, nodos, x) {
	var polinomioFinal = 0;
	for (var k=0; k<nodos.length; k++) {
		polinomioFinal += funcion(nodos[k]) * L(nodos, k, x);
	}
	return polinomioFinal;
}
function L(nodos, k, x) {
	var polinomio = 1;
	for (var i=0; i<nodos.length; i++) {
		if (i !== k) {
			polinomio *= (x - nodos[i]) / (nodos[k] - nodos[i]);
		}
	}
	return polinomio;
}


// Ejemplo
var resultado = Lagrange(function(x) {return 1/x}, [2, 5/2, 4], 3);
alert('El resultado de f(x)=1/x evaluado en x=3 es ' + resultado);
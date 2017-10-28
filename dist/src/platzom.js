'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Platzom;
//MANIPULACION DE STRINGS - EJERCICIO NUEVO IDIOMA

function Platzom(str) {
	//Si la palabra es un palindromo se lee igual atras adelante, ninguna cuenta y se devuelve intercalando mayusculas y minisculas
	// funcion fleacha se corta y se pone reverse y luego se une
	var Reverso = function Reverso(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var tamanio = str.length;
		var manipulacion = '';
		var flag = true;
		for (var i = 0; i < tamanio; i++) {
			var char = str.charAt(i);
			manipulacion += flag ? char.toUpperCase() : char.toLowerCase();
			flag = !flag;
		}
		return manipulacion;
	}

	if (str == Reverso(str)) {
		return minMay(str);
	}

	var manipulacion = str;
	//si la palabra termina en ar se quitan
	if (str.toLowerCase().endsWith('ar')) {
		manipulacion = str.slice(0, -2);
	}
	//Si la palabra incia con "z" se le agrega "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		manipulacion += 'pe';
	}
	//Si la palabra tiene 10 o más se parte a la mitad con guío en medio
	var tamanio = manipulacion.length;
	if (tamanio >= 10) {
		var primeraparte = manipulacion.slice(0, Math.round(tamanio / 2));
		var segundaparte = manipulacion.slice(Math.round(tamanio / 2));
		manipulacion = primeraparte + '-' + segundaparte;
	}

	return manipulacion;
}
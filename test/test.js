const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

it('Si la palabra termina en ar se quitan', function(){
const translation = platzom("Programar")
expect(translation).to.equal("Program")
})

it('Si la palabra incia con "z" se le agrega "pe" al final', function(){
const translation = platzom("Zorro")
const translation2 = platzom("Zarpar")
expect(translation).to.equal("Zorrope")
expect(translation2).to.equal("Zarppe")
})

it('Si la palabra tiene 10 o más se parte a la mitad con guío en medio', function(){
const translation = platzom("abecedario")
expect(translation).to.equal("abece-dario")	
})

it('Si la palabra es un palindromo se lee igual atras adelante, ninguna cuenta y se devuelve intercalando mayusculas y minisculas', function(){
	const translation = platzom("sometemos")
expect(translation).to.equal("SoMeTeMoS")	
})

})

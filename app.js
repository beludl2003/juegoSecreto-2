let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}
function verificarIntento() {
	let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
	
	console.log(numeroDeUsuario);
	console.log(numeroSecreto);
	console.log(intentos);
	if(numeroDeUsuario === numeroSecreto) {
asignarTextoElemento('p',`¡acertaste el numero! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
	} else{
		//el usuario no acertó
		if(numeroDeUsuario > numeroSecreto) {
		asignarTextoElemento('p','el numero secreto es menor');	
		} else{
			asignarTextoElemento('p','el numero secreto es mayor');
		}
		intentos++;
		limpiarCaja();
	}
	
	return;
}

function condicionesIniciales() {
	asignarTextoElemento('h1','juego del numero secreto!');
     asignarTextoElemento('p',`indica un numero del 1 al 100 ${numeroMaximo}`);
     numeroSecreto = generarNumeroSecreto();
	 intentos = 1;
}

function limpiarCaja() {
	document.querySelector('#valorUsuario').value = '';
	
}
function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
	console.log(numeroGenerado);
	console.log(listaNumerosSorteados);
	//si el numero generado está incluido en la lista 
	if(listaNumerosSorteados.length == numeroMaximo) {
		asignarTextoElemento(`p`,`ya se sortearon todos los numeros posibles`);
	}

		//si ya sorteamos todos los números
		else {
			if(listaNumerosSorteados.includes(numeroGenerado)) {
		return generarNumeroSecreto();
		
	} else{
		listaNumerosSorteados.push(numeroGenerado);
		return numeroGenerado;
	}

		}
	}


	

function reiniciarJuego() {
	//limpiar caja
	limpiarCaja();
	//indicar mensaje de intervalo de numeros 
	//generar el numero aleatorio
	//inicializar el numero de intentos
	condicionesIniciales();
	//deshabilitar el boton de nuevo juego
	document.querySelector('#reiniciar').setAttribute('disabled','true');
	
	
	
}
condicionesIniciales();
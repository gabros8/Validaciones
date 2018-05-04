function validacion(e){
	let nombre=$("#nombre").value
	let apellido=$("#apellidos").value
	let fecha=$("#date").value
	let correo=$("#email").value
	let pass=$("#password").value
	let user=$("#user").value;

	
	if(!caracteresNombres(nombre)){
		alert("El nombre debe tener entre 2 y 60 caracteres");
		return false;
	}
	
	if(!caracteresNombres(apellido)){
		alert("Los apellidos deben tener entre 2 y 60 caracteres");
		return false;
	}
	
	if(nombre.indexOf(" ")==0){
		alert("Borra el espacio al inicio del nombre");
		return false;
	}
	
	if(apellido.indexOf(" ")==0){
		alert("Borra el espacio al inicio del apellido");
		return false;
	}
	
	cortarEspacios(nombre);


}

function $(argument) {
	return document.querySelector(argument);
}

function caracteresNombres(nombre){
	if(nombre.length<2||nombre.length>60){
		return false;
	}
	else{
		return true;
	}
}

function cortarEspacios(string){

	let pat_Space=/(?:[a-zA-ZÑñáÁéÉíÍóÓúÚüÜ]\s?[a-zA-ZÑñáÁéÉíÍóÓúÚüÜ]?){1,}/
	let string2=string.match(pat_Space);
	alert(string2);
	return string2;
}
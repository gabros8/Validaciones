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
	
	if(!sinPEspacio(nombre)){
		alert("Borra el espacio al inicio del nombre");
		return false;
	}
	
	
	if(!sinPEspacio(apellido)){
		alert("Borra el espacio al inicio del apellido");
		return false;
	}
	
	if(!cortarEspacios(nombre)){
		alert("Quita los espacios seguidos en el nombre");
		return false;
	}

	if(!cortarEspacios(apellido)){
		alert("Quita los espacios seguidos en el apellido");
		return false;
	}

	if(!letras(nombre)){
		alert("Solo puedes usar letras del alfabeto español en el nombre");
		return false;
	}

	if(!letras(apellido)){
		alert("Solo puedes usar letras del alfabeto español en el apellido");
		return false;
	}

	if(!caracteresUsu(user)){
		alert("El nombre de usuario debe tener entre 2 y 30 caracteres");
		return false;
	}

	if(!valUsu(user)){
		alert("Solo se aceptan las letras del alfabeto inglés, números, puntos, espacios y guiones para el nombre de usuario");
		return false;
	}

	if (!valEmail(correo)) {
		alert("EL correo electrónico debe contar con la estructura siguiente: nombre de usuario, seguido de un @ seguido del dominio al que pertenece el correo electrónico. P.e. usuario@dominio.com.")
		return false;
	}

	if(!caracteresPass(pass)){
		alert("La contraseña debe tener entre 6 y 30 caracteres")
		return false
	}

	if(!valPass(pass)){
		alert("En la contraseña sólo se aceptan las letras del alfabeto inglés, números y los siguientes caracteres:-/=/&%#$”!")
		return false
	}



}

//funcion para obtener el campo del formulario
function $(argument) {
	return document.querySelector(argument);
}

//funcion para contar los caracteres de nombres y apellidos
function caracteresNombres(nombre){
	if(nombre.length<2||nombre.length>60){
		return false;
	}
	else{
		return true;
	}
}

//funcion para comprobar que no haya un espacio al inicio de un nombre o appellido
function sinPEspacio(nombre){
	if(nombre.indexOf(" ")==0){
		return false;
	}
	else{
		return true;
	}
}

//funcion para comprobar que no haya mas de un espacio seguido
function cortarEspacios(string){

	let pat_Space=/\s{2,}/
	let string2=string.replace(pat_Space," ");
	if (string==string2) {
		return true;
	}
	else{
		return false;
	}
}

//funcion para hacer que el usuario solo escriba letras del alfabeto español en el nombre y apellido
function letras(nombre){
	let letra
	let pat_Let=/[^(?:a-zA-ZñÑáÁéÉíÍóÓúÚüÜ)]/
	for (var i = 0; i < nombre.length; i++) {
	letra=nombre[i].match(pat_Let);
	}
	if (letra!=null) {
		return false;
	}
	else{
		return true;
	}
}

//funcion pr validar la longitud del nombre de usuario
function caracteresUsu(usuario){
	if(usuario.length<2||usuario.length>30){
		return false;
	}
	else{
		return true;
	}
}

//funcion para validar los caracteres del nombre de usuario
function valUsu(usuario){
	let letra
	let pat_usu=/[^(?:a-zA-Z\s\.\d\-)]/
	for (var i = 0; i < usuario.length; i++) {
		letra=usuario[i].match(pat_usu);
	}
	if (letra!=null) {
		return false;
	}
	else{
		return true;
	}
}

//funcion para validar estructura de correo electrónico
function valEmail(email){
	let pat_email=/(?:\w+\@{1}\w+\.{1}\w+){1}/
	let bool=pat_email.test(email);
	if(bool){
		email=email.match(pat_email)
		return true;
	}
	else{
		return false;
	}
}

//funcion para validar el tamaño de la contraseña
function caracteresPass(password){
	if(password.length<6||password.length>30){
		return false;
	}
	else{
		return true;
	}
}

function valPass(password){
	let caracter
	let pat_pass=/[^(?:a-zA-Z\d\-\=\/\&\%\#\$\”\!)]/
	for (var i = 0; i < password.length; i++) {
		caracter=password[i].match(pat_pass)
	}
	if (caracter!=null) {
		return false;
	}
	else{
		return true;
	}
}
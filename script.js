



document.addEventListener('DOMContentLoaded', function () {
	// Ocultar todas las secciones excepto la primera
	document.querySelectorAll('section > div').forEach(div => {
	  div.style.display = 'none';
	});
	document.querySelector('#expLab').style.display = 'block';
  
	// Agregar un evento de clic a cada enlace de navegación
	document.querySelectorAll('nav a').forEach(link => {
	  link.addEventListener('click', function (event) {


		// Evitar el comportamiento predeterminado del enlace
		event.preventDefault();
  

		// Obtener el ID de la sección correspondiente al enlace
		const targetId = this.getAttribute('href');
  

		// Ocultar todas las secciones y mostrar la sección correspondiente
		document.querySelectorAll('section > div').forEach(div => {
		  div.style.display = 'none';
		});
		document.querySelector(targetId).style.display = 'block';
	  });
	});
  });
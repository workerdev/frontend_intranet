var consulta = $("#searchTable").DataTable({
    dom : "t",
    language : {
        "url": "/js/Spanish.json"
      }
});

$("#inputBusqueda").keyup(function(){
	consulta.search($(this).val()).draw();

	$("header").css({
		"height": "100vh",
		"background": "rgba(0,0,0,0.5)"
	})

	if ($("#inputBusqueda").val() == ""){
		$("header").css({
			"height": "auto",
			"background": "none"
		})

		$("#search").hide()

	} else {
		$("#search").fadeIn("fast");
	}
})
var path = window.location.pathname
$('.procesos').click(function(){
	console.log("procesos")
	localStorage.setItem("aplicacionSIG","procesos")
	window.location = "/menu/5"
})
if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "procesos"){
	$('#opciones').hide()
	$('#op_process').show()
	localStorage.setItem("aplicacionSIG","")
}
$('#fpOrdenadoGerencia').click(function(){	
	localStorage.setItem("aplicacionSIG","fpOrdenadoGerencia")
	window.location = "/menu/5"
})
$('#fpOrdenadoProcesos').click(function(){	
	localStorage.setItem("aplicacionSIG","fpOrdenadoProcesos")
	window.location = "/menu/5"
})
$('#indOrdenadoGerencia').click(function(){	
	localStorage.setItem("aplicacionSIG","indOrdenadoGerencia")
	window.location = "/menu/5"
})
$('#indSeguimiento').click(function(){	
	localStorage.setItem("aplicacionSIG","indSeguimiento")
	window.location = "/menu/5"
})
$('#crocmOrdenadoGerencias').click(function(){	
	localStorage.setItem("aplicacionSIG","crocmOrdenadoGerencias")
	window.location = "/menu/5"
})
$('#crocmSeguimiento').click(function(){	
	localStorage.setItem("aplicacionSIG","crocmSeguimiento")
	window.location = "/menu/5"
})

$('#documentos').click(function(){	
	localStorage.setItem("aplicacionSIG","documentos")
	window.location = "/menu/5"
})
$('#docInformacionDocumentada').click(function(){	
	localStorage.setItem("aplicacionSIG","docInformacionDocumentada")
	window.location = "/menu/5"
})
$('#docFormularios').click(function(){	
	localStorage.setItem("aplicacionSIG","docFormularios")
	window.location = "/menu/5"
})
$('#docExternosYLegales').click(function(){	
	localStorage.setItem("aplicacionSIG","docExternosYLegales")
	window.location = "/menu/5"
})
$('#docEnProceso').click(function(){	
	localStorage.setItem("aplicacionSIG","docEnProceso")
	window.location = "/menu/5"
})
$('#docBaja').click(function(){	
	localStorage.setItem("aplicacionSIG","docBaja")
	window.location = "/menu/5"
})
$('#fichaCargo').click(function(){	
	localStorage.setItem("aplicacionSIG","fichaCargo")
	window.location = "/menu/5"
})
$('#audAuditoriaYHallazgos').click(function(){	
	localStorage.setItem("aplicacionSIG","audAuditoriaYHallazgos")
	window.location = "/menu/5"
})
$('#audAcciones').click(function(){	
	localStorage.setItem("aplicacionSIG","audAcciones")
	window.location = "/menu/5"
})
$('#audHallazgos').click(function(){	
	localStorage.setItem("aplicacionSIG","audHallazgos")
	window.location = "/menu/5"
})
$('#audVerEficacia').click(function(){	
	localStorage.setItem("aplicacionSIG","audVerEficacia")
	window.location = "/menu/5"
})
$('#audFortalezas').click(function(){	
	localStorage.setItem("aplicacionSIG","audFortalezas")
	window.location = "/menu/5"
})

window.onload = function(){
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "fpOrdenadoGerencia"){
		$('#opciones').hide()
		fpOrdenadoGerencia()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "fpOrdenadoProcesos"){
		$('#opciones').hide()
		fpOrdenadoProcesos()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "indOrdenadoGerencia"){
		$('#opciones').hide()
		indOrdenadoGerencia()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "indSeguimiento"){
		$('#opciones').hide()
		indSeguimiento()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "crocmOrdenadoGerencias"){
		$('#opciones').hide()
		crocmOrdenadoGerencias()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "crocmSeguimiento"){
		$('#opciones').hide()
		crocmSeguimiento()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "documentos"){
		$('#opciones').hide()
		mostrar_docs()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}	
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "docInformacionDocumentada"){
		$('#opciones').hide()
		listarInformacionDocumentada()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "docFormularios"){
		$('#opciones').hide()
		listarDocFormulario()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "docExternosYLegales"){
		$('#opciones').hide()
		docExternosYLegales()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "docEnProceso"){
		$('#opciones').hide()
		docExternosYLegales()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "docBaja"){
		$('#opciones').hide()
		docExternosYLegales()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "fichaCargo"){
		$('#opciones').hide()
		fichaCargo()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "audAuditoriaYHallazgos"){
		$('#opciones').hide()
		audAuditoriaYHallazgos()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "audAcciones"){
		$('#opciones').hide()
		audAcciones()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "audHallazgos"){
		$('#opciones').hide()
		audHallazgos()
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "audCrocm"){
		$('#opciones').hide()
		$("#crocm").show(); 
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	if( path == "/menu/5" && localStorage.getItem("aplicacionSIG") == "audFortalezas"){
		$('#opciones').hide()
		audVerEficacia() 
		$('.botonAtras').show()
		localStorage.setItem("aplicacionSIG","")
	}
	 

}


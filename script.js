function mostrarVolcan() {
    document.getElementById('detalle-experimento').style.display = "block";
    document.getElementById('titulo-exp').innerText = "Guía: Volcán de Vinagre";
    
    var lista = document.getElementById('lista-pasos');
    lista.innerHTML = "<li>Busca una bandeja</li><li>Pon bicarbonato</li><li>Pon jabon</li><li>Pon colorante</li><li>Echa el vinagre</li>";
}

function mostrarFluido() {
    document.getElementById('detalle-experimento').style.display = "block";
    document.getElementById('titulo-exp').innerText = "Guía: Fluido No-Newtoniano";
    
    var lista = document.getElementById('lista-pasos');
    lista.innerHTML = "<li>Usa maicena</li><li>Echa agua</li><li>Mezcla bien</li><li>Prueba pegarle fuerte</li>";
}

function mostrarLampara() {
    document.getElementById('detalle-experimento').style.display = "block";
    document.getElementById('titulo-exp').innerText = "Guía: Lámpara de Lava";
    
    var lista = document.getElementById('lista-pasos');
    lista.innerHTML = "<li>Usa aceite</li><li>Pon agua</li><li>Pon colorante</li><li>Echa la pastilla</li>";
}

function cerrar() {
    document.getElementById('detalle-experimento').style.display = "none";
}
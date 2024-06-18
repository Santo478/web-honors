function citarWeb(){
    const url = 'http://127.0.0.1:8000/citar-apa/';
    const aCitar = document.getElementById('pagina-a-citar').value;
    const linkCompleto = url + '?link=' + aCitar;

    fetch(linkCompleto)
    .then(response => response.json())
    .then(data => {
        let informacion = JSON.parse(data)[0];
        let autores = '';
        for (let i = 0; i < informacion.creators.length; i++) {
            let autor = informacion.creators[i];
            autores += autor.lastName + ', ' + autor.firstName.charAt(0) + '.';
            if (i < informacion.creators.length - 1) {
                autores += ', ';
            }
        }
        const anno = informacion.date ? '(' + informacion.date + ').' : '(s.f.).';
        const titulo = informacion.title;
        const url = informacion.url;
        const citaCompleta = autores + ' ' + anno + ' ' + titulo + '. ' + url;
        
        console.log(citaCompleta);

        const listaCitas = document.getElementById('apa-bibliografia');
        const nuevaCita = document.createElement("li");
        const text = document.createTextNode(citaCompleta);
        nuevaCita.appendChild(text);
        
        // Añadir un salto de línea antes de la nueva cita
        listaCitas.appendChild(document.createTextNode('\n'));
        listaCitas.appendChild(nuevaCita);
    });
}

function prueba(){
    console.log('hola')
}

document.addEventListener("DOMContentLoaded", function () {
    const botonCitar = document.getElementById('citar-apa')
    botonCitar.addEventListener('click', citarWeb)
})
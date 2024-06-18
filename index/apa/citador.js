function citarWeb(){
    const url = 'http://127.0.0.1:8000/citar-apa/'
    const aCitar = document.getElementById('pagina-a-citar').value
    const linkCompleto = url + '?link=' + aCitar
    fetch(linkCompleto)
    .then(response => response.json())
    .then(data => {
        let informacion = JSON.parse(data)[0];
        console.log(informacion);
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
        citaCompleta = autores + ' ' + anno + ' ' + titulo + '. ' + url + '\n'
        console.log(citaCompleta)
        const listaCitas = document.getElementById('resultados');
        const nuevaCita = document.createElement("il");
        nuevaCita.textContent = citaCompleta;
        listaCitas.appendChild(nuevaCita);
        listaCitas.appendChild(document.createElement("br"));

    })
}

function prueba(){
    console.log('hola')
}

document.addEventListener("DOMContentLoaded", function () {
    const botonCitar = document.getElementById('citar-apa')
    botonCitar.addEventListener('click', citarWeb)
})
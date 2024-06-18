async function PaginaW() {
    const wea = {
        nombre: document.getElementById("input-nombre").value,
        email: document.getElementById("input-correo").value,
        sugerencia: document.getElementById("mensaje").value,
        }
    console.log(wea)
    fetch("http://127.0.0.1:8000/pagina-review", {
        method:'POST',
        headers: {'Accept': 'application/json',"Content-Type": "application/json; charset=UTF-8", 'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(wea)})
    .then(data => console.log(data))
}

function prueba(){
    console.log('hola')
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("send").addEventListener("click", PaginaW)
})
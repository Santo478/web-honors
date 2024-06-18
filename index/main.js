async function PaginaW() {
    const wea = {
        nombre: document.getElementById("input-nombre").value,
        email: document.getElementById("input-correo").value,
        mensaje: document.getElementById("mensaje").value,
        }
        const response = await 
        fetch("http://127.0.0.1:8000/pagina-review", {
            method:"POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(wea)
        })}

document.getElementById("send").addEventListener("click", PaginaW)
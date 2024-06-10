function contarPalabras() {
    var texto = document.getElementById('inputText').value;
    // Eliminar espacios en blanco al inicio y al final
    texto = texto.trim();
    // Contar palabras separadas por espacios
    var palabras = texto.split(/\s+/);
    // Filtrar espacios vacíos
    palabras = palabras.filter(function(palabra) {
        return palabra.length > 0;
    });
    // Mostrar el número de palabras
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = palabras.length;
}
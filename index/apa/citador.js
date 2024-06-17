function citarWeb(){
    console.log('holi')
    url = 'https://t0guvf0w17.execute-api.us-east-1.amazonaws.com/Prod/web'
    aCitar = document.getElementById('pagina-a-citar')
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "es-GT,es-419;q=0.9,es;q=0.8,en;q=0.7",
            "Content-Type": "text/plain",
            "Origin": "https://zbib.org",
            "Priority": "u=1, i",
            "Sec-Ch-Ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": '"Windows"',
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "cross-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"        },
        body: aCitar})
        .then(response => {
            if (!response.ok) {
                return response.text().then(text => {
                    throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. Response body: ${text}`);
                });
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function prueba(){
    const xdd = document.getElementById('pagina-a-citar').value
    console.log(typeof xdd)
}

document.addEventListener("DOMContentLoaded", function () {
    const botonCitar = document.getElementById('citar-apa')
    botonCitar.addEventListener('click', citarWeb)
})
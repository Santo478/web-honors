import requests
from bs4 import BeautifulSoup

def citar(link):
    url = "https://t0guvf0w17.execute-api.us-east-1.amazonaws.com/Prod/web"

    headers = {
        "authority": "t0guvf0w17.execute-api.us-east-1.amazonaws.com",
        "method": "POST",
        "path": "/Prod/web",
        "scheme": "https",
        "Content-Type": "text/plain",
        "Origin": "https://zbib.org",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
    }

    response = requests.post(url, headers=headers, data=link)
    btf = BeautifulSoup(response.text, "html.parser")
    return btf.prettify()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from scrapAPA import citar

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

class sugerencia(BaseModel):
    nombre: str
    email: str
    sugerencia: str

lista_atributos = list(sugerencia.__annotations__.keys())

@app.post("/pagina-review")
async def create_cv(cv: sugerencia):
    archivo = open("sugerencias.txt","a",encoding="utf=8")
    x= ""
    x+=cv.nombre + ";"
    x+=cv.email + ";"
    x+=cv.mensaje

    print(x,file=archivo)
    archivo.close()
    return

@app.get('/citar-apa')
def CitarApa(link: str):
    html = citar(link)
    return html
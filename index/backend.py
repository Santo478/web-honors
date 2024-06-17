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


@app.post('/guardar-sugerencia')
def guardar_sugerencia(sugerencia: sugerencia):
    archivo = open('sugerencias.txt', 'a', encoding='utf-8')
    xdd = sugerencia.dict()
    archivo.write(f'{";".join(map(str, xdd.values()))}\n')
    return sugerencia

@app.get('/citar-apa')
def CitarApa(link: str):
    html = citar(link)
    return html
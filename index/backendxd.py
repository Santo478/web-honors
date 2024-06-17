from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

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

lista_atributos = list(CV.__annotations__.keys())


@app.post('/guardar-sugerencia')
def guardar_sugerencia(sugerencia: sugerencia):
    archivo = open('sugerencias.txt', 'a', encoding='utf-8')
    xdd = sugerencia.dict()
    archivo.write(f'{";".join(map(str, xdd.values()))}\n')
    return sugerencia

@app.get('/citar-apa')
def CitarApa():
    pass
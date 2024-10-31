# Paso importante a para hacer funcionar esta API

> [!WARNING]
> Esta API se ha hecho con una base de datos MySQL con dos tablas llamadas 'eventos' y 'usuarios' relacionadas entre sí.
> La estructura de la tabla eventos es esta:
``` bash
    {
        "id": 1,
        "nombre": "Maratón de Primavera",
        "descripcion": "Carrera de 10km por la ciudad.",
        "fecha": "2023-09-15",
        "ubicacion": "Madrid",
        "tipoDeporte": "Atletismo",
        "organizador_id": 1 
    }
```
> Y la estrucura de usuarios es esta:
``` bash
    {
    "id": 1,
    "username": "organizador1",
    "password": "hashed_password",
    "rol": "regular o admin (por defecto está en regular)"
    }
```


## 1. Crea el archivo .env

## 2. Mete estas variables al archivo .env


```bash
PASSWORD=''

DATABASE=''

KEY=''

USER=''

HOST='
```

## 3. Rellena las variables con los datos que se piden. (La variable KEY es solo la clave para el JWT) 😖

## 4. Con eso deberia funcionar 👍


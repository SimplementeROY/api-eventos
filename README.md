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
> Y la estrucura de la tabla usuarios es esta:
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
USER='' #Usuario del MySQL

PASSWORD='' #Contraseña del usuario

DATABASE='' #Nombre de la base de datos

KEY='' #La palabra secreta que servirá para firmar el Token

HOST='' #La dirección de la base de datos, por ejemplo, localhost
```

## 3. Rellena las variables con los datos que se piden. 😖

## 4. Con eso deberia funcionar. 👍


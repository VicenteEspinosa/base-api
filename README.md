# base-api

# Instalacion

### 1. Instalar docker y docker-compose


### 2. Clonar el repositorio

```bash
git clone https://github.com/VicenteEspinosa/base-api.git
```

### 3. Hacer build de la imagen

```bash
docker-compose build
```

### 4. Levantar el contenedor

```bash
docker-compose up
```

# Estrcutura de archivos

```
.
├── Dockerfile
├── README.md
├── src
│   ├── index.ts
│   ├── routes
│   │   └── index.ts
│   └── controllers
│       └── controlador.ts
│   └── services
│       └── servicio.ts
│   └── models
│       └── modelo.ts
├── package.json

```

# Uso actual

### Endpoints

- POST / - Crea un objeto de prueba
- GET / - Retorna todos los objetos de prueba

### Modelo

```json
{
    "_id": "string",
    "name": "string",
    "createdAt": "string",
    "updatedAt": "string"
}
```

Solo requiere el nombre para crear un objeto de prueba en el endpoint POST /.
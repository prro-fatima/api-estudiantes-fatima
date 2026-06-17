# API REST - Gestión de Estudiantes

## Descripción

Este proyecto consiste en una API REST desarrollada con Node.js y Express.js para administrar estudiantes utilizando datos almacenados en un arreglo de JavaScript (datos quemados o hardcoded).

La API permite:

* Consultar todos los estudiantes.
* Consultar un estudiante por ID.
* Crear nuevos estudiantes.
* Actualizar estudiantes existentes.
* Eliminar estudiantes.

## Instalación

1. Clonar el repositorio.

```bash
git clone URL_DEL_REPOSITORIO
```

2. Instalar dependencias.

```bash
npm install
```

3. Ejecutar el servidor.

```bash
node index.js
```

## Endpoints Disponibles

### Obtener todos los estudiantes

```http
GET /api/estudiantes
```

### Obtener estudiante por ID

```http
GET /api/estudiantes/:id
```

### Crear estudiante

```http
POST /api/estudiantes
```

Ejemplo de Body:

```json
{
  "nombre": "Fatima",
  "edad": 25
}
```

### Actualizar estudiante

```http
PUT /api/estudiantes/:id
```

### Eliminar estudiante

```http
DELETE /api/estudiantes/:id
```

## Tecnologías utilizadas

* Node.js
* Express.js
* Git
* GitHub

## Autor

Fatima Maria Flores de Reyes

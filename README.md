# 🧪 Rick and Morty App

Aplicación fullstack simple que consume la API pública de Rick and Morty, implementando un backend en PHP y un frontend en JavaScript.

---

## 🚀 Objetivo

Este proyecto fue desarrollado como prueba técnica para demostrar:

* Integración frontend + backend
* Consumo de APIs externas
* Diseño de endpoints propios
* Transformación de datos
* Estructura de proyecto
* Resolución end-to-end

---

## 🧱 Tecnologías utilizadas

* PHP (Backend)
* JavaScript (Frontend)
* HTML / CSS
* XAMPP (entorno local)

---

## 📁 Estructura del proyecto

```
rick-morty-app/
│
├── backend/
│   ├── api/
│   │   └── characters.php
│   ├── config/
│   │   └── config.php
│   ├── helpers/
│   │   └── Response.php
│   └── services/
│       └── RickAndMortyService.php
│
└── frontend/
    ├── index.html
    ├── css/
    │   └── styles.css
    └── js/
        └── app.js
```

---

## 🔄 Flujo de la aplicación

1. El frontend realiza una petición a:

   ```
   /backend/api/characters.php
   ```

2. El backend:

   * Consume la API pública de Rick and Morty
   * Transforma los datos
   * Retorna una respuesta JSON estandarizada

3. El frontend:

   * Renderiza los personajes en un grid
   * Permite filtrar por nombre
   * Maneja estados de carga y error

---

## 🔌 Endpoint disponible

### GET /characters

```
http://localhost/rick-morty-app/backend/api/characters.php
```

### Respuesta

```json
{
  "success": true,
  "message": "Personajes obtenidos correctamente",
  "data": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "species": "Human",
      "status": "Alive",
      "image": "..."
    }
  ]
}
```

---

## ⚙️ Configuración

1. Clonar o descargar el repositorio
2. Colocar la carpeta en:

```
C:\xampp\htdocs\
```

3. Iniciar Apache desde XAMPP

4. Abrir en navegador:

```
http://localhost/rick-morty-app/frontend/
```

---

## ⚠️ Nota importante

El frontend consume el backend mediante una URL fija:

```javascript
fetch("http://localhost/rick-morty-app/backend/api/characters.php");
```

Si se utiliza otro entorno (puerto, carpeta o servidor), es necesario actualizar esta URL en:

```
frontend/js/app.js
```

---

## ✨ Funcionalidades

* Listado de personajes en formato grid
* Visualización de:

  * Imagen
  * Nombre
  * Especie
  * Estado
* Filtro por nombre (client-side)
* Manejo de estados:

  * Loading
  * Error

---

## 🚧 Mejoras futuras

* Filtro por estado y especie
* Paginación desde backend
* Cache de respuestas
* Uso de variables de entorno en frontend

---

## 👨‍💻 Autor

Proyecto desarrollado como ejercicio técnico.

---

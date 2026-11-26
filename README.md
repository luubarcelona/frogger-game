🎮 Juego del Minero de Gemas

Este proyecto consiste en el desarrollo de un videojuego en el que el jugador controla a un minero que debe recorrer un escenario subterráneo para encontrar y recoger gemas.

📂 Organización del proyecto

La estructura de carpetas se irá definiendo a medida que avance el desarrollo.

Ejemplo de estructura inicial:

NOMBRE-DEL-PROYECTO/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── images/
│   └── sounds/
│
└── README.md

# 💻 Configuración inicial del proyecto

## 1. Clonar el repositorio

Cada participante deberá descargar una copia del repositorio de GitHub en su ordenador.

Desde Visual Studio Code:

1. Abrir la paleta de comandos con `Ctrl + Shift + P`.
2. Buscar `Git: Clone`.
3. Pegar la URL del repositorio.
4. Seleccionar la ubicación donde guardar el proyecto.
5. Abrir la carpeta descargada en Visual Studio Code.

De esta manera, tendremos una copia local del proyecto que podremos modificar desde nuestro ordenador.

## 2. Comprobar la rama actual

Una vez dentro de la carpeta del proyecto, abriremos la terminal de Visual Studio Code y ejecutaremos:

```bash
git branch
```

Este comando muestra las ramas locales disponibles.

La rama en la que nos encontramos trabajando aparecerá marcada con un asterisco (`*`).

## 3. Consultar el estado del proyecto

```bash
git status
```

Permite comprobar el estado de los archivos del proyecto.

Nos informa de:
- Archivos modificados.
- Archivos nuevos que todavía no están controlados por Git.
- Cambios preparados para realizar un commit.
- Rama en la que nos encontramos.

---

# 🔄 Actualizar el proyecto antes de empezar a trabajar

Antes de comenzar una nueva tarea, debemos asegurarnos de que nuestra copia local contiene los últimos cambios incorporados en GitHub.

Para ello, seguiremos estos pasos:

### Paso 1. Cambiar a la rama principal

```bash
git checkout main
```

Nos sitúa en la rama principal del proyecto.

### Paso 2. Descargar los últimos cambios de GitHub

```bash
git pull origin main
```

Descarga e integra en nuestra rama local `main` los últimos cambios publicados en la rama principal de GitHub.

**Importante:** si tenemos modificaciones locales sin guardar, debemos realizar un commit o apartarlas antes de cambiar de rama o actualizar el proyecto.

---

# 🌱 Crear una nueva rama

Una vez actualizada la rama `main`, podremos crear una rama para desarrollar nuestra nueva funcionalidad.

### Paso 1. Comprobar que estamos en main

```bash
git branch
```

Debemos comprobar que el asterisco (`*`) aparece junto a `main`.

### Paso 2. Crear la nueva rama

Utilizaremos el siguiente comando:

```bash
git checkout -b nombre-de-la-rama
```

Este comando realiza dos acciones:

1. Crea una nueva rama con el nombre indicado.
2. Nos cambia automáticamente a esa rama para comenzar a trabajar.

Por ejemplo, para nuestra primera tarea:

```bash
git checkout -b feature/game-board-and-movement
```

A partir de este momento, trabajaremos en esta rama sin modificar directamente `main`.

### Paso 3. Comprobar que la rama se ha creado correctamente

```bash
git branch
```

La nueva rama aparecerá en el listado marcada con un asterisco (`*`), indicando que estamos trabajando en ella.

**Importante:** cada nueva rama debe crearse desde `main` una vez actualizado, salvo que necesitemos expresamente partir de otra rama de trabajo.
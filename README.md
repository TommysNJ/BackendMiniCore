**MINICORE**

***Descripción del proyecto:***

MiniCore es una aplicación que permite la gestión de empleados, proyectos 
y tareas de manera eficiente. Está diseñada para simplificar la creación, 
edición, eliminación y seguimiento de estos elementos, asegurando un control 
adecuado de las tareas asignadas a los empleados dentro de un proyecto. El 
proyecto está dividido en dos partes:
- Backend: Desarrollado con Node.js, Express y Sequelize para interactuar
  con una base de datos MySQL.
- Frontend: Construido con React.js, desplegado en Netlify, y que interactúa
  con el backend desplegado en Render.

***Tabla de contenidos***

- Instalación
- Uso del Proyecto
- Despliegue
- Endpoints del Backend
- Características
- Tecnologías Utilizadas
- Licencia
  
***Instalación***

Backend:
1. Clonar el repositorio del backend:
   git clone https://github.com/TommysNJ/BackendMiniCore.git
   cd BackendMiniCore
2. Instalar las dependencias:
   npm install
3. Iniciar el servidor:
   nodemon app
4. El backend estará corriendo en http://localhost:8000.

Frontend:
1. Clonar el repositorio del frontend:
   git clone https://github.com/TommysNJ/FrontMiniCore.git
   cd FrontMiniCore
2. Instalar las dependencias:
   npm install
3. Iniciar la aplicación:
   npm start
4. El frontend estará corriendo en http://localhost:3000.

***Uso del Proyecto***

El backend gestiona las siguientes entidades:
- Empleados: Crear, editar, eliminar y listar empleados.
- Proyectos: Crear, editar, eliminar y listar proyectos.
- Tareas: Crear, editar, eliminar y listar tareas asignadas a empleados
  en proyectos.
Funcionalidades del Frontend:
- Visualizar listas de empleados, proyectos y tareas.
- Crear nuevos empleados, proyectos y tareas.
- Editar o eliminar registros existentes.
- Generar reportes de tareas atrasadas.

***Despliegue***

Backend en Render
- El backend ha sido desplegado en Render. Puedes acceder a la API en la 
siguiente URL: https://backend-mini-core.onrender.com
Frontend en Netlify
- El frontend ha sido desplegado en Netlify y se conecta con el backend
  para todas las operaciones CRUD. Puedes acceder al frontend en:
  https://elaborate-lokum-24e27c.netlify.app/

***Endpoints del Backend***

Empleados
- GET /api/empleados: Lista todos los empleados.
- GET /api/empleados/:id: Obtiene un empleado por ID.
- POST /api/empleados: Crea un nuevo empleado.
- PUT /api/empleados/:id: Actualiza un empleado existente.
- DELETE /api/empleados/:id: Elimina un empleado.

Proyectos
- GET /api/proyectos: Lista todos los proyectos.
- GET /api/proyectos/:id: Obtiene un proyecto por ID.
- POST /api/proyectos: Crea un nuevo proyecto.
- PUT /api/proyectos/:id: Actualiza un proyecto existente.
- DELETE /api/proyectos/:id: Elimina un proyecto.

Tareas
- GET /api/tareas: Lista todas las tareas.
- GET /api/tareas/:id: Obtiene una tarea por ID.
- POST /api/tareas: Crea una nueva tarea.
- PUT /api/tareas/:id: Actualiza una tarea existente.
- DELETE /api/tareas/:id: Elimina una tarea.

***Características***

- CRUD Completo: Permite crear, editar, visualizar y eliminar empleados,
  proyectos y tareas.
- Reportes: Genera reportes sobre el estado de las tareas y los empleados
  asignados.
- Autenticación: El frontend y backend pueden ser extendidos para incluir
  autenticación de usuarios.
- Despliegue Profesional: Backend desplegado en Render y frontend en Netlify.

***Tecnologías Utilizadas***

Backend
- Node.js
- Express
- Sequelize
- MySQL
- Render (para despliegue)

Frontend
- React.js
- Netlify (para despliegue)

***Licencia***

Este proyecto está licenciado bajo la Licencia MIT.

 

import express from 'express';
import routes from './routes/index.js';  
import cors from 'cors';

// Importar la conexión a MySQL desde db.js
import db from './database/db.js';
import Empleado from './models/Empleado.js';
import Tarea from './models/Tarea.js';
import Proyecto from './models/Proyecto.js';

// Definir las relaciones después de importar los modelos
Empleado.hasMany(Tarea, {
    foreignKey: 'Id_Empleado'
});

Tarea.belongsTo(Empleado, {
    foreignKey: 'Id_Empleado'
});

Proyecto.hasMany(Tarea, {
    foreignKey: 'Id_Proyecto'
});

Tarea.belongsTo(Proyecto, {
    foreignKey: 'Id_Proyecto'
});

const app = express();

// Configuración de middleware
app.use (cors())
app.use(express.json())

// Rutas
app.use('/api', routes);

try {
    await db.authenticate()
    console.log('Conexión exitosa con la base de datos')
} catch (error) {
    console.log('El error de conexión es: ${error}')
}

// Iniciar el servidor
app.listen(8000, () =>{
    console.log('Server UP running in http://localhost:8000/')
})

export default app;








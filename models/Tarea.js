import { DataTypes } from 'sequelize';
import db from '../database/db.js';
import Empleado from './Empleado.js';

const Tarea = db.define('Tarea', {
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tiempoEstimado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('ToDo', 'InProgress', 'Done'),
        allowNull: false
    },
    Id_Empleado: {
        type: DataTypes.INTEGER,
        references: {
            model: Empleado, // Relación con la tabla Empleado
            key: 'id'
        }
    }
},{
    timestamps: false // Esto desactiva las columnas `createdAt` y `updatedAt`
});


export default Tarea;
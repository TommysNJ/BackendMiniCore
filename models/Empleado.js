import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Empleado = db.define('Empleado', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false // Esto desactiva las columnas `createdAt` y `updatedAt`
});


export default Empleado;
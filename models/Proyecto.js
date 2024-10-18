import { DataTypes } from 'sequelize';
import db from '../database/db.js';

const Proyecto = db.define('Proyecto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false // Esto desactiva las columnas `createdAt` y `updatedAt`
});

export default Proyecto;
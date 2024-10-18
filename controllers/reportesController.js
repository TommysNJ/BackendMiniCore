/*import Tarea from '../models/Tarea.js';
import Empleado from '../models/Empleado.js';
import Proyecto from '../models/Proyecto.js';

// Función para calcular tareas atrasadas dentro de un rango de fechas
async function calcularTareasAtrasadas(fechaInicio, fechaFin) {
    try {
        console.log(`Calculando tareas atrasadas desde ${fechaInicio} hasta ${fechaFin}`);

        // Buscar todas las tareas en estado 'InProgress'
        const tareas = await Tarea.findAll({
            where: { estado: 'InProgress' },
            include: [
                { model: Empleado, attributes: ['nombre', 'apellido'] },
                { model: Proyecto, attributes: ['nombre'] }
            ]
        });

        const tareasAtrasadas = tareas.filter(tarea => {
            const fechaEstimadaFinalizacion = new Date(tarea.fechaInicio);
            fechaEstimadaFinalizacion.setDate(fechaEstimadaFinalizacion.getDate() + tarea.tiempoEstimado);
            const estaAtrasada = fechaEstimadaFinalizacion < new Date(fechaFin);
            const dentroDeRango = new Date(tarea.fechaInicio) <= new Date(fechaFin) && new Date(tarea.fechaInicio) >= new Date(fechaInicio);
            return estaAtrasada && dentroDeRango;
        }).map(tarea => {
            const fechaEstimadaFinalizacion = new Date(tarea.fechaInicio);
            fechaEstimadaFinalizacion.setDate(fechaEstimadaFinalizacion.getDate() + tarea.tiempoEstimado);
            const diasAtrasados = Math.floor((new Date(fechaFin) - fechaEstimadaFinalizacion) / (1000 * 60 * 60 * 24));
            return {
                ...tarea.toJSON(),
                fechaEstimadaFinalizacion,
                diasAtrasados
            };
        });

        return { totalAtrasadas: tareasAtrasadas.length, tareasAtrasadas };
    } catch (error) {
        throw error;
    }
}

// Controlador para manejar la solicitud del reporte con fechas como parámetros de ruta
export const reporteTareasAtrasadas = async (req, res, next) => {
    const { fechaInicio, fechaFin } = req.params;

    try {
        const reporte = await calcularTareasAtrasadas(new Date(fechaInicio), new Date(fechaFin));
        res.json(reporte);
    } catch (error) {
        res.status(500).json({ mensaje: 'Hubo un error al generar el reporte' });
        next();
    }
};*/

import Tarea from '../models/Tarea.js';
import Empleado from '../models/Empleado.js';
import Proyecto from '../models/Proyecto.js';

// Función para calcular tareas atrasadas dentro de un rango de fechas
async function calcularTareasAtrasadas(fechaInicio, fechaFin) {
    try {
        console.log(`Calculando tareas atrasadas desde ${fechaInicio} hasta ${fechaFin}`);

        // Buscar todas las tareas en estado 'InProgress'
        const tareas = await Tarea.findAll({
            where: { estado: 'InProgress' },
            include: [
                { model: Empleado, attributes: ['nombre', 'apellido'] },
                { model: Proyecto, attributes: ['nombre'] }
            ]
        });

        const tareasAtrasadas = tareas.filter(tarea => {
            const fechaEstimadaFinalizacion = new Date(tarea.fechaInicio);
            fechaEstimadaFinalizacion.setDate(fechaEstimadaFinalizacion.getDate() + tarea.tiempoEstimado);
            const estaAtrasada = fechaEstimadaFinalizacion < new Date(fechaFin);
            const dentroDeRango = new Date(tarea.fechaInicio) <= new Date(fechaFin) && new Date(tarea.fechaInicio) >= new Date(fechaInicio);
            return estaAtrasada && dentroDeRango;
        }).map(tarea => {
            const fechaEstimadaFinalizacion = new Date(tarea.fechaInicio);
            fechaEstimadaFinalizacion.setDate(fechaEstimadaFinalizacion.getDate() + tarea.tiempoEstimado);
            const diasAtrasados = Math.floor((new Date(fechaFin) - fechaEstimadaFinalizacion) / (1000 * 60 * 60 * 24));
            return {
                ...tarea.toJSON(),
                fechaEstimadaFinalizacion,
                diasAtrasados
            };
        });

        return { totalAtrasadas: tareasAtrasadas.length, tareasAtrasadas };
    } catch (error) {
        console.error('Error calculando tareas atrasadas:', error);
        throw error;
    }
}

// Controlador para manejar la solicitud del reporte con fechas como parámetros de ruta
export const reporteTareasAtrasadas = async (req, res, next) => {
    const { fechaInicio, fechaFin } = req.params;

    try {
        const reporte = await calcularTareasAtrasadas(new Date(fechaInicio), new Date(fechaFin));
        res.json(reporte);
    } catch (error) {
        console.error('Error generando el reporte de tareas atrasadas:', error);  // Agrega más detalles al log
        res.status(500).json({ mensaje: 'Hubo un error al generar el reporte' });
        next();
    }
};

/*import Tarea from '../models/Tarea.js';
import Empleado from '../models/Empleado.js';
// import Proyecto from '../models/Proyecto.js';

// Función para calcular tareas atrasadas dentro de un rango de fechas
async function calcularTareasAtrasadas(fechaInicio, fechaFin) {
    try {
        console.log(`Calculando tareas atrasadas desde ${fechaInicio} hasta ${fechaFin}`);

        // Buscar todas las tareas en estado 'InProgress'
        const tareas = await Tarea.findAll({
            where: { estado: 'InProgress' },
            include: [
                { model: Empleado, attributes: ['nombre', 'apellido'] },
                //{ model: Proyecto, attributes: ['nombre'] }
            ]
        });

        console.log(`Total de tareas encontradas en estado InProgress: ${tareas.length}`);

        const tareasAtrasadas = tareas.filter(tarea => {
            const fechaEstimadaFinalizacion = new Date(tarea.fechaInicio);
            fechaEstimadaFinalizacion.setDate(fechaEstimadaFinalizacion.getDate() + tarea.tiempoEstimado);

            const estaAtrasada = fechaEstimadaFinalizacion < new Date(fechaFin);
            const dentroDeRango = new Date(tarea.fechaInicio) <= new Date(fechaFin) && new Date(tarea.fechaInicio) >= new Date(fechaInicio);

            // Log para depurar
            console.log(`Tarea: ${tarea.descripcion}`);
            console.log(`Fecha de inicio: ${tarea.fechaInicio}`);
            console.log(`Tiempo estimado: ${tarea.tiempoEstimado} días`);
            console.log(`Fecha estimada de finalización: ${fechaEstimadaFinalizacion}`);
            console.log(`¿Está atrasada?: ${estaAtrasada}`);
            console.log(`¿Dentro del rango de fechas?: ${dentroDeRango}`);

            return estaAtrasada && dentroDeRango;
        }).map(tarea => {
            const fechaEstimadaFinalizacion = new Date(tarea.fechaInicio);
            fechaEstimadaFinalizacion.setDate(fechaEstimadaFinalizacion.getDate() + tarea.tiempoEstimado);
            const diasAtrasados = Math.floor((new Date(fechaFin) - fechaEstimadaFinalizacion) / (1000 * 60 * 60 * 24));

            // Log adicional
            console.log(`Días de atraso: ${diasAtrasados}`);

            return {
                ...tarea.toJSON(),
                fechaEstimadaFinalizacion,
                diasAtrasados
            };
        });

        return { totalAtrasadas: tareasAtrasadas.length, tareasAtrasadas };
    } catch (error) {
        console.error('Error calculando tareas atrasadas:', error);
        throw error;
    }
}

// Controlador para manejar la solicitud del reporte con fechas como parámetros de ruta
export const reporteTareasAtrasadas = async (req, res, next) => {
    const { fechaInicio, fechaFin } = req.params;

    try {
        const reporte = await calcularTareasAtrasadas(new Date(fechaInicio), new Date(fechaFin));
        res.json(reporte);
    } catch (error) {
        console.error('Error generando el reporte de tareas atrasadas:', error);  // Agrega más detalles al log
        res.status(500).json({ mensaje: 'Hubo un error al generar el reporte' });
        next();
    }
};*/
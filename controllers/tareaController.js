import Tarea from '../models/Tarea.js';
import Empleado from '../models/Empleado.js';
import Proyecto from '../models/Proyecto.js';


// Obtener todas las tareas
/*export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findAll();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};*/

// Obtener todas las tareas incluyendo relaciones con Empleado y Proyecto
export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findAll({
            include: [
                {
                    model: Empleado, // Incluir el modelo Empleado
                    attributes: ['nombre', 'apellido'] // Solo devolver los campos 'nombre' y 'apellido'
                },
                {
                    model: Proyecto, // Incluir el modelo Proyecto
                    attributes: ['nombre'] // Solo devolver el campo 'nombre'
                }
            ]
        });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una tarea por su ID
export const getTareaById = async (req, res) => {
    try {
        const tarea = await Tarea.findByPk(req.params.id, {
            include: [
                { model: Empleado, attributes: ['nombre', 'apellido'] },
                { model: Proyecto, attributes: ['nombre'] }
            ]
        });
        if (tarea) {
            res.json(tarea);
        } else {
            res.status(404).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Crear una nueva tarea
export const createTarea = async (req, res) => {
    try {
        const tarea = await Tarea.create(req.body);
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una tarea
export const updateTarea = async (req, res) => {
    try {
        const tarea = await Tarea.update(req.body, { where: { id: req.params.id } });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una tarea
export const deleteTarea = async (req, res) => {
    try {
        await Tarea.destroy({ where: { id: req.params.id } });
        res.json({ message: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
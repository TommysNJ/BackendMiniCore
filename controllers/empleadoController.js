import Empleado from '../models/Empleado.js';

// Obtener todos los empleados
export const getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo empleado
export const createEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.create(req.body);
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un empleado
export const updateEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.update(req.body, { where: { id: req.params.id } });
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un empleado
export const deleteEmpleado = async (req, res) => {
    try {
        await Empleado.destroy({ where: { id: req.params.id } });
        res.json({ message: "Empleado eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
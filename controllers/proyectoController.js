import Proyecto from '../models/Proyecto.js';

// Obtener todos los proyectos
export const getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll();
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo proyecto
export const createProyecto = async (req, res) => {
    try {
        const proyecto = await Proyecto.create(req.body);
        res.json(proyecto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un proyecto
export const updateProyecto = async (req, res) => {
    try {
        const proyecto = await Proyecto.update(req.body, { where: { id: req.params.id } });
        res.json(proyecto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un proyecto
export const deleteProyecto = async (req, res) => {
    try {
        await Proyecto.destroy({ where: { id: req.params.id } });
        res.json({ message: "Proyecto eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
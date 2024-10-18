import express from 'express';
import { getEmpleados, createEmpleado, updateEmpleado, deleteEmpleado } from '../controllers/empleadoController.js';
import { getProyectos, createProyecto, updateProyecto, deleteProyecto } from '../controllers/proyectoController.js';
import { getTareas, createTarea, updateTarea, deleteTarea, getTareaById } from '../controllers/tareaController.js';
import { reporteTareasAtrasadas } from '../controllers/reportesController.js';

const router = express.Router();

// Rutas para empleados
router.get('/empleados', getEmpleados);
router.post('/empleados', createEmpleado);
router.put('/empleados/:id', updateEmpleado);
router.delete('/empleados/:id', deleteEmpleado);

// Rutas para proyectos
router.get('/proyectos', getProyectos);
router.post('/proyectos', createProyecto);
router.put('/proyectos/:id', updateProyecto);
router.delete('/proyectos/:id', deleteProyecto);

// Rutas para tareas
router.get('/tareas', getTareas);
router.get('/tareas/:id', getTareaById); // Obtener una tarea por ID
router.post('/tareas', createTarea);
router.put('/tareas/:id', updateTarea);
router.delete('/tareas/:id', deleteTarea);

// Ruta para el reporte de tareas atrasadas
router.get('/reportes/atrasadas/:fechaInicio/:fechaFin', reporteTareasAtrasadas);

export default router;
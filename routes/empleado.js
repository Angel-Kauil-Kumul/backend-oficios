const express = require('express');
const router = express.Router();
const Empleado = require('../models/empleado');

// GET /api/empleados
router.get('/', async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (err) {
    console.error('❌ Error al obtener empleados:', err);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
});

module.exports = router;

// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./models/index');
const Usuario = require('./models/usuario');
const Oficio = require('./models/oficio');
const Departamento = require('./models/departamento');

const empleadoRoutes = require('./routes/empleado');


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Verifica la conexión
sequelize.authenticate().then(() => {
  console.log('✅ Sequelize conectado a la BD');
  return sequelize.sync(); // crea las tablas si no existen
}).catch((error) => {
  console.error('❌ Error al conectar Sequelize:', error);
});

// 🔐 Ruta de Login
app.post('/api/login', async (req, res) => {
  const { nombre, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { Nombre: nombre, Contrasena: contrasena } });
    if (usuario) {
      res.status(200).json({ message: 'Login exitoso', usuario });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (err) {
    console.error('❌ Error en login:', err);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// 📄 Crear un oficio
app.post('/api/oficios', async (req, res) => {
  const datos = req.body;

  try {
    await Oficio.create(datos);
    res.status(201).json({ message: '✅ Oficio creado correctamente' });
  } catch (err) {
    console.error('❌ Error al crear el oficio:', err);
    res.status(500).json({ error: 'Error al crear el oficio' });
  }
});

// 📋 Obtener oficios por usuario
app.get('/api/oficios/usuario/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const oficios = await Oficio.findAll({ where: { remitente_id: userId } });
    res.json(oficios);
  } catch (err) {
    console.error('❌ Error al obtener oficios:', err);
    res.status(500).json({ error: 'Error al obtener oficios' });
  }
});

// 📌 NUEVA RUTA: Obtener departamentos
app.get('/api/departamentos', async (req, res) => {
  try {
    const departamentos = await Departamento.findAll();
    res.json(departamentos);
  } catch (err) {
    console.error('❌ Error al obtener departamentos:', err);
    res.status(500).json({ error: 'Error al obtener departamentos' });
  }
});

app.use('/api/empleados', empleadoRoutes);

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    console.error('❌ Error al obtener usuarios:', err);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});


// 🚀 Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

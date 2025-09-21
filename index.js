import express from "express";
import { swaggerUi, swaggerDocs } from "./swagger.mjs";
import routsComp from "./routes/compania.mjs";
import routsJuegos from "./routes/juego.mjs";
import routsAuth from "./routes/auth.mjs"; // <-- importamos rutas de usuarios
import serverless from "serverless-http";
// Conexión a la base de datos
import "./drivers/conection-db.mjs";

const app = express();

// Middleware para JSON
app.use(express.json());

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Rutas principales
app.use("/api/auth", routsAuth);   // <-- rutas de registro/login
app.use("/api/comps", routsComp);  // rutas de compañías
app.use("/api/juegos", routsJuegos); // rutas de juegos

// Documentación con Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📖 Documentación Swagger en http://localhost:${PORT}/api-docs`);
});

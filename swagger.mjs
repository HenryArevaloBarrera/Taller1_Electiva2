import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Juegos y Compañías",
      version: "1.0.0",
      description: "Documentación de la API REST con Swagger",
    },
    servers: [
      {
        url: "https://taller1-electiva2.vercel.app",
      },
    ],
  },
  apis: ["./routes/*.mjs"], // Aquí Swagger leerá las anotaciones en tus rutas
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };

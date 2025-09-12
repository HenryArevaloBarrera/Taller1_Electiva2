import express from "express";
import { findAll, findById, save, update, deleteById } from "../controllers/controlles-juego.mjs";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Juegos
 *   description: Gestión de juegos
 */

/**
 * @swagger
 * /juegos:
 *   get:
 *     summary: Obtener todos los juegos
 *     tags: [Juegos]
 *     responses:
 *       200:
 *         description: Lista de juegos
 */
router.get("/", findAll);

/**
 * @swagger
 * /juegos/{id}:
 *   get:
 *     summary: Obtener un juego por ID
 *     tags: [Juegos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del juego
 *     responses:
 *       200:
 *         description: Juego encontrado
 *       404:
 *         description: No se encontró el juego
 */
router.get("/:id", findById);

/**
 * @swagger
 * /juegos:
 *   post:
 *     summary: Crear un nuevo juego
 *     tags: [Juegos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       201:
 *         description: Juego creado
 */
router.post("/", save);

/**
 * @swagger
 * /juegos/{id}:
 *   put:
 *     summary: Actualizar un juego por ID
 *     tags: [Juegos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del juego
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               genero:
 *                 type: string
 *     responses:
 *       200:
 *         description: Juego actualizado
 *       404:
 *         description: No se encontró el juego
 */
router.put("/:id", update);

/**
 * @swagger
 * /juegos/{id}:
 *   delete:
 *     summary: Eliminar un juego por ID
 *     tags: [Juegos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del juego
 *     responses:
 *       200:
 *         description: Juego eliminado
 *       404:
 *         description: No se encontró el juego
 */
router.delete("/:id", deleteById);

export default router;

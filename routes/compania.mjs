import express from "express";
import { findAll, findById, save, update, deleteById } from '../controllers/controlles-compania.mjs';

const router = express.Router();

/**
 * @swagger
 * /comps:
 *   get:
 *     summary: Obtiene todas las compañías
 *     tags: [Compañías]
 *     responses:
 *       200:
 *         description: Lista de compañías obtenida correctamente
 */
router.get("/", findAll);

/**
 * @swagger
 * /comps/{id}:
 *   get:
 *     summary: Obtiene una compañía por su ID
 *     tags: [Compañías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compañía
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Compañía encontrada
 *       404:
 *         description: No se encontró la compañía
 */
router.get("/:id", findById);

/**
 * @swagger
 * /comps:
 *   post:
 *     summary: Crea una nueva compañía
 *     tags: [Compañías]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               nombre:
 *                 type: string
 *               pais:
 *                 type: string
 *     responses:
 *       201:
 *         description: Compañía creada exitosamente
 */
router.post("/", save);

/**
 * @swagger
 * /comps/{idcomp}:
 *   put:
 *     summary: Actualiza una compañía existente
 *     tags: [Compañías]
 *     parameters:
 *       - in: path
 *         name: idcomp
 *         required: true
 *         description: ID de la compañía a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               pais:
 *                 type: string
 *     responses:
 *       200:
 *         description: Compañía actualizada
 *       404:
 *         description: No se encontró la compañía
 */
router.put("/:idcomp", update);

/**
 * @swagger
 * /comps/{id}:
 *   delete:
 *     summary: Elimina una compañía
 *     tags: [Compañías]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compañía a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Compañía eliminada exitosamente
 *       404:
 *         description: No se encontró la compañía
 */
router.delete("/:id", deleteById);

export default router;

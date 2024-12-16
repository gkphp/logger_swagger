const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

/**
 * @swagger
 * /student:
 *   post:
 *     summary: Create a new student
 *     tags:
 *       - Students
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - dateOfBirth
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", studentController.createStudent);

/**
 * @swagger
 * /student/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID
 *     responses:
 *       200:
 *         description: A student object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
router.get("/:email", studentController.getStudentById);

/**
 * @swagger
 * /student:
 *   get:
 *     summary: Get all students
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: List of all students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get("/", studentController.getAllStudents);

/**
 * @swagger
 * /student/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Student not found
 */
router.put("/:id", studentController.updateStudentById);

/**
 * @swagger
 * /student/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
router.delete("/:id", studentController.deleteStudentById);

module.exports = router;

const studentService = require("../services/student.service");
const logger = require("../logger");

const createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);
    logger.info(`Student created: ${student.id}`);
    res.status(201).json(student);
  } catch (error) {
    logger.error(`Error creating student: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    logger.info(`Fetched all students`);
    res.status(200).json(students);
  } catch (error) {
    logger.error(`Error fetching students: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentService.getStudentById(req.params.email);
    logger.info(`Fetched student with ID: ${req.params.email}`);
    res.status(200).json(student);
  } catch (error) {
    logger.error(
      `Error fetching student with ID ${req.params.id}: ${error.message}`
    );
    res.status(404).json({ message: error.message });
  }
};

const updateStudentById = async (req, res) => {
  try {
    const student = await studentService.updateStudentById(
      req.params.id,
      req.body
    );
    logger.info(`Updated student with ID: ${req.params.id}`);
    res.status(200).json(student);
  } catch (error) {
    logger.error(
      `Error updating student with ID ${req.params.id}: ${error.message}`
    );
    res.status(404).json({ message: error.message });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const response = await studentService.deleteStudentById(req.params.id);
    logger.info(`Deleted student with ID: ${req.params.id}`);
    res.status(200).json(response);
  } catch (error) {
    logger.error(
      `Error deleting student with ID ${req.params.id}: ${error.message}`
    );
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};

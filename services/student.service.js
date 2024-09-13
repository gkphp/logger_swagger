const Student = require("../models/student");

const createStudent = async (studentData) => {
  try {
    const student = new Student(studentData);
    return await student.save();
  } catch (error) {
    throw new Error(`Error creating student: ${error.message}`);
  }
};

const getAllStudents = async () => {
  try {
    return await Student.find();
  } catch (error) {
    throw new Error(`Error fetching students: ${error.message}`);
  }
};

const getStudentById = async (id) => {
  try {
    const student = await Student.findById(id);
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    throw new Error(`Error fetching student: ${error.message}`);
  }
};

const updateStudentById = async (id, studentData) => {
  try {
    const student = await Student.findByIdAndUpdate(id, studentData, {
      new: true,
    });
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  } catch (error) {
    throw new Error(`Error updating student: ${error.message}`);
  }
};

const deleteStudentById = async (id) => {
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      throw new Error("Student not found");
    }
    return { message: "Student deleted successfully" };
  } catch (error) {
    throw new Error(`Error deleting student: ${error.message}`);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
};

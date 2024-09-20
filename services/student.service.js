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

const getStudentById = async (email) => {
  try {
    const student = await Student.findOne({ email: email });
    if (!student) {
      throw new Error("Student not found");
    }
    // const { createdAt, __v, ...rest } = student;
    const obj = {
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      dateOfBirth: student.dateOfBirth,
      updateAt: student.updatedAt,
    };
    return obj;
  } catch (error) {
    throw new Error(`Error fetching student: ${error.message}`);
  }
};

const updateStudentById = async (id, studentData) => {
  try {
    const student = await Student.findByIdAndUpdate(id, studentData, {
      new: true,
    });
    // const student = await Student.findOneAndUpdate({email: id}, studentData, {
    //   new: true,
    // });
    if (!student) {
      throw new Error("Student not found");
    }
    // const { createdAt, __v, ...rest } = student;
    return student;
  } catch (error) {
    throw new Error(`Error updating student: ${error.message}`);
  }
};

const deleteStudentById = async (id) => {
  try {
    const student = await Student.findByIdAndDelete(id);
    // const student = await Student.findOneAndDelete({email:id});
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

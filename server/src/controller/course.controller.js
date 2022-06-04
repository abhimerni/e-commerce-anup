const {
    createCourse,
    getAllCourses,
    deleteCourses,
  } = require("../services/course.service");
  
  const newCourse = async (req, res) => {
    const { title } = req.body;
    const file = req.files.image;
  
    try {
      const newCourse = await createCourse(title, file);
      const saveCourse = await newCourse.save();
      res.status(200).json(saveCourse);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  const getAllCourse = async (req, res) => {
    try {
      const allCourse = await getAllCourses();
      res.status(200).json(allCourse);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  const deleteCourse = async (req, res) => {
    try {
      const id = req.params.id;
      const course = await deleteCourses(id);
      res
        .status(200)
        .json({ message: "Course is deleted successfully...", course });
    } catch (error) {}
  };
  
  module.exports = {
    newCourse,
    getAllCourse,
    deleteCourse,
  };
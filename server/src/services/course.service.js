const Course = require("../model/course.model");
const cloudinary = require("cloudinary").v2;

const createCourse = async (title, file) => {

  if (!file) return res.status(400).json("No image in request");
  const cloudi = await cloudinary.uploader.upload(file.tempFilePath);

  const newSubject = new Course({
    title: title,
    imageUrl: cloudi.url,
  });
  return newSubject;
};

const getAllCourses = async () =>{
	const course = await Course.find()
	return course
}

const deleteCourses = async (id)=>{
	const course = await Course.findByIdAndDelete(id)
	return course
}


module.exports = {
  createCourse,
  getAllCourses,
  deleteCourses
};
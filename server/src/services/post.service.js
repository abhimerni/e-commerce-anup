const Post = require("../model/post.model");

const createPost = async (title, desc, user, category) => {
  console.log("from service", title, desc, user, category);
  const newSubject = new Post({
    title: title,
    desc: desc,
    user: user,
    category: category,
  });
  return newSubject;
};

const getAllPosts = async () => {
  const post = await Post.find()
    .populate("user", "username")
    .populate("category", "name");
  return post;
};

const latestPost = async () => {
  const post = await Post.find()
    .sort({ createdAt: -1 })
    .limit(1)
    .populate("user", "username")
    .populate("category", "name");
  return post;
};

const deletePosts = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

const getOnePostbyId = async (id) => {
  const post = await Post.findById(id)
    .populate("user", "username")
    .populate("category", "name");
  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  deletePosts,
  getOnePostbyId,
  latestPost,
};

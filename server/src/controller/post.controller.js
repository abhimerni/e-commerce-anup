const {
  getAllPosts,
  createPost,
  deletePosts,
  getOnePostbyId,
  latestPost,
} = require("../services/post.service");

const newPost = async (req, res) => {
  const { title, desc, user,category } = req.body;

  try {
    const newPost = await createPost(title, desc, user,category);
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json({error, message:"something error happens"});
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPosts = await getAllPosts();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

const latestPosts = async(req, res)=>{
  try {
    const post = await latestPost();
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await deletePosts(id);
    res
      .status(200)
      .json({ message: "Course is deleted successfully...", post });
  } catch (error) {}
};

const getOnePostbyIds = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await getOnePostbyId(id);
    res
      .status(200)
      .json( post);
  } catch (error) {}
};



module.exports = {
  newPost,
  getAllPost,
  deletePost,
  getOnePostbyIds,
  latestPosts
};

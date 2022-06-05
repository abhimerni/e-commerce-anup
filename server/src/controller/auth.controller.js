const jwt = require("jsonwebtoken");
const { registerService, loginService } = require("../services/auth.services");

const register = async (req, res) => {
  try {
    const newUser = await registerService(req.body.username, req.body.email, req.body.password, req.body.phone);
    const user = await newUser.save();
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...rest } = user._doc;
    
    res.status(200).json({ ...rest, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await loginService(req.body.email, req.body.password);
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...rest } = user._doc;
    
    res.status(200).json({ ...rest, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
};

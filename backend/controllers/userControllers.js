const asyncHandler = require("express-async-handler")

// @description: register a new user
// @route: /api/users
// @access: Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400)
    throw new Error("Please include all fields")
  }
  res.send("register user")
});

// @description: Login a user
// @route: /api/users/login
// @access: Public

const loginUser = asyncHandler(async (req, res) => {
  await res.send("login user");
});

module.exports = { registerUser, loginUser };
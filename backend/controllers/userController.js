import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  console.log(req);
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

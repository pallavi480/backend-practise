import UserModel from "../models/usermodels.js";

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, age, email, password, mobile } = req.body;

    const user = await UserModel.create({
      name,
      age,
      email,
      password,
      mobile,
    });

    res.status(201).json({
      message: "User added successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL USERS
const GetData = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Deleted successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createUser, GetData, updateUser, deleteUser };